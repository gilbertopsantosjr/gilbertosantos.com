import { Resend } from 'resend'
import { CONTACT_TOPICS } from '@/app/lib/contact'

// Cloudflare's always-pass test secret, used only outside production.
const TURNSTILE_TEST_SECRET = '1x0000000000000000000000000000000AA'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`)
}

async function verifyTurnstile(token: string, secret: string, ip: string | null) {
  const body = new URLSearchParams({ secret, response: token })
  if (ip) body.set('remoteip', ip)
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body })
  const result = (await res.json()) as { success: boolean }
  return result.success
}

// Receives the site's contact form, checks the Turnstile token and
// emails the message to CONTACT_TO with Reply-To set to the sender.
export async function POST(request: Request) {
  const { RESEND_API_KEY, TURNSTILE_SECRET_KEY, CONTACT_TO, CONTACT_FROM } = process.env
  const turnstileSecret =
    TURNSTILE_SECRET_KEY ?? (process.env.NODE_ENV === 'production' ? undefined : TURNSTILE_TEST_SECRET)
  if (!RESEND_API_KEY || !turnstileSecret) {
    return Response.json({ error: 'The contact form is not configured.' }, { status: 500 })
  }

  let data: Record<string, unknown>
  try {
    data = await request.json()
  } catch {
    return Response.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const field = (key: string) => (typeof data[key] === 'string' ? (data[key] as string).trim() : '')
  const name = field('name')
  const email = field('email')
  const topic = field('topic')
  const message = field('message')

  // Honeypot: real visitors never see or fill this field.
  if (field('company')) {
    return Response.json({ ok: true })
  }

  if (!name || name.length > 100) {
    return Response.json({ error: 'Please enter your name.' }, { status: 400 })
  }
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return Response.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }
  if (!(CONTACT_TOPICS as readonly string[]).includes(topic)) {
    return Response.json({ error: 'Please choose a topic.' }, { status: 400 })
  }
  if (message.length < 10 || message.length > 5000) {
    return Response.json({ error: 'Your message should be between 10 and 5000 characters.' }, { status: 400 })
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? null
  if (!(await verifyTurnstile(field('turnstileToken'), turnstileSecret, ip))) {
    return Response.json({ error: 'Spam check failed. Please try again.' }, { status: 400 })
  }

  const resend = new Resend(RESEND_API_KEY)
  const { error } = await resend.emails.send({
    from: CONTACT_FROM ?? 'Website contact form <contact-form@gilbertosantos.com>',
    to: CONTACT_TO ?? 'contato@gilbertosantos.com',
    replyTo: `${name.replace(/[<>"\r\n]/g, '')} <${email}>`,
    subject: `[${topic}] ${name.replace(/[\r\n]/g, ' ')}`,
    text: `Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`,
    html: `<p><strong>Name:</strong> ${escapeHtml(name)}<br><strong>Email:</strong> ${escapeHtml(email)}<br><strong>Topic:</strong> ${escapeHtml(topic)}</p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
  })

  if (error) {
    console.error('Failed to send contact form message', error)
    return Response.json({ error: 'Your message could not be sent. Please email chat@gilbertosantos.com.' }, { status: 502 })
  }

  return Response.json({ ok: true })
}
