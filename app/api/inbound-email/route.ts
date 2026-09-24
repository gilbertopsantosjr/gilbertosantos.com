import { Resend } from 'resend'

// Receives Resend `email.received` webhooks for *@gilbertosantos.com
// and forwards each message (original content + attachments) to FORWARD_TO.
export async function POST(request: Request) {
  const { RESEND_API_KEY, RESEND_WEBHOOK_SECRET, FORWARD_TO, FORWARD_FROM } = process.env
  if (!RESEND_API_KEY || !RESEND_WEBHOOK_SECRET || !FORWARD_TO) {
    return new Response('Inbound email forwarding is not configured', { status: 500 })
  }

  const resend = new Resend(RESEND_API_KEY)
  const payload = await request.text()

  let event
  try {
    event = resend.webhooks.verify({
      payload,
      headers: {
        id: request.headers.get('svix-id') ?? '',
        timestamp: request.headers.get('svix-timestamp') ?? '',
        signature: request.headers.get('svix-signature') ?? '',
      },
      webhookSecret: RESEND_WEBHOOK_SECRET,
    })
  } catch {
    return new Response('Invalid signature', { status: 401 })
  }

  if (event.type !== 'email.received') {
    return new Response('Ignored', { status: 200 })
  }

  const { error } = await resend.emails.receiving.forward(
    {
      emailId: event.data.email_id,
      to: FORWARD_TO,
      from: FORWARD_FROM ?? 'Inbox <forward@gilbertosantos.com>',
    },
    // Resend retries webhooks; the email id keeps a retry from sending a duplicate.
    { idempotencyKey: `forward-${event.data.email_id}` },
  )

  if (error) {
    console.error('Failed to forward inbound email', event.data.email_id, error)
    return new Response('Forward failed', { status: 502 })
  }

  return new Response('Forwarded', { status: 200 })
}
