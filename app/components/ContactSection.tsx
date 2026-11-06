'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { CONTACT_TOPICS } from '@/app/lib/contact'

// Cloudflare's always-pass test site key, used when no real key is configured.
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '1x00000000000000000000AA'

type TurnstileApi = {
  render: (el: HTMLElement, options: Record<string, unknown>) => string
  reset: (widgetId: string) => void
  remove: (widgetId: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/gilbertopsantosjr', icon: faLinkedin },
  { label: 'GitHub', href: 'https://github.com/gilbertosantos', icon: faGithub },
  { label: 'X / Twitter', href: 'https://twitter.com/gilbertosantos', icon: faXTwitter },
]

const inputClass =
  'w-full rounded-button border border-neutral-cool-gray bg-white px-4 py-3 text-neutral-charcoal ' +
  'placeholder:text-neutral-medium-gray/70 focus:border-royal focus:outline-none focus:ring-2 focus:ring-royal/20 ' +
  'dark:border-neutral-charcoal dark:bg-neutral-navy-dark dark:text-neutral-light-gray transition-colors'

type Status = { state: 'idle' | 'sending' | 'sent' } | { state: 'error'; message: string }

export default function ContactSection() {
  const widgetRef = useRef<HTMLDivElement>(null)
  const widgetId = useRef<string | null>(null)
  const [scriptReady, setScriptReady] = useState(false)
  const [token, setToken] = useState('')
  const [status, setStatus] = useState<Status>({ state: 'idle' })

  useEffect(() => {
    if (!scriptReady || !widgetRef.current || !window.turnstile || widgetId.current) return
    widgetId.current = window.turnstile.render(widgetRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      theme: 'auto',
      size: 'flexible',
      callback: (t: string) => setToken(t),
      'expired-callback': () => setToken(''),
      'error-callback': () => setToken(''),
    })
    return () => {
      if (widgetId.current) window.turnstile?.remove(widgetId.current)
      widgetId.current = null
    }
  }, [scriptReady])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!token) {
      setStatus({ state: 'error', message: 'Please complete the spam check.' })
      return
    }
    const form = event.currentTarget
    setStatus({ state: 'sending' })
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...Object.fromEntries(new FormData(form)), turnstileToken: token }),
      })
      const result = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(result.error ?? 'Your message could not be sent.')
      form.reset()
      setStatus({ state: 'sent' })
    } catch (err) {
      setStatus({ state: 'error', message: err instanceof Error ? err.message : 'Your message could not be sent.' })
    } finally {
      // A Turnstile token is single use, so get a fresh one for the next attempt.
      setToken('')
      if (widgetId.current) window.turnstile?.reset(widgetId.current)
    }
  }

  return (
    <section className="section section-alt relative" id="contact">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
      />
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-h2 font-bold mb-4">Get in touch</h2>
          <p className="text-lg text-neutral-medium-gray leading-relaxed">
            A new product, a second opinion on your architecture, or anything else. Send a message and I&apos;ll get
            back to you within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14 items-start max-w-5xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="relative rounded-card border border-neutral-cool-gray border-t-4 border-t-royal bg-white p-6 md:p-8 shadow-card dark:bg-neutral-charcoal dark:border-neutral-charcoal dark:border-t-royal"
          >
            <h3 className="font-sans text-xl font-semibold mb-6">Send me a message</h3>

            {status.state === 'sent' ? (
              <div role="status" className="rounded-button bg-accent-soft-green p-5 text-neutral-charcoal">
                <p className="font-semibold mb-1">Thanks, your message is on its way.</p>
                <p className="text-sm">I&apos;ll reply to the email address you gave.</p>
                <button
                  type="button"
                  onClick={() => setStatus({ state: 'idle' })}
                  className="mt-4 text-sm font-medium text-royal hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <label className="block">
                    <span className="block text-sm font-medium mb-2">Name</span>
                    <input name="name" required maxLength={100} autoComplete="name" className={inputClass} />
                  </label>
                  <label className="block">
                    <span className="block text-sm font-medium mb-2">Email</span>
                    <input
                      name="email"
                      type="email"
                      required
                      maxLength={254}
                      autoComplete="email"
                      className={inputClass}
                    />
                  </label>
                </div>

                <label className="block mb-5">
                  <span className="block text-sm font-medium mb-2">Topic</span>
                  <select name="topic" defaultValue={CONTACT_TOPICS[0]} className={inputClass}>
                    {CONTACT_TOPICS.map((topic) => (
                      <option key={topic}>{topic}</option>
                    ))}
                  </select>
                </label>

                <label className="block mb-2">
                  <span className="block text-sm font-medium mb-2">Message</span>
                  <textarea
                    name="message"
                    required
                    minLength={10}
                    maxLength={5000}
                    rows={6}
                    placeholder="What are you trying to build, and what's in the way?"
                    className={`${inputClass} resize-y`}
                  />
                </label>
                <p className="text-xs text-neutral-medium-gray mb-5">
                  For a new project, include your timeline and budget range if you have them.
                </p>

                {/* Honeypot: hidden from people, often filled in by bots. */}
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label>
                    Company
                    <input name="company" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                <div ref={widgetRef} className="mb-6 min-h-[65px]" />

                {status.state === 'error' && (
                  <p role="alert" className="mb-4 text-sm text-accent-coral">
                    {status.message}
                  </p>
                )}

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    disabled={status.state === 'sending'}
                    className="btn-primary disabled:opacity-60 disabled:pointer-events-none"
                  >
                    {status.state === 'sending' ? 'Sending…' : 'Send message'}
                  </button>
                  <span className="text-xs text-neutral-medium-gray">I reply to the email you give above.</span>
                </div>
              </>
            )}
          </form>

          <div className="lg:pt-6">
            <BellIllustration />
            <h3 className="font-sans text-lg font-semibold mt-8 mb-2">Other ways to reach me</h3>
            <p className="text-sm text-neutral-medium-gray mb-5">Already on one of these? Find me there.</p>
            <ul className="divide-y divide-neutral-cool-gray border-b border-neutral-cool-gray dark:divide-neutral-charcoal dark:border-neutral-charcoal">
              <li>
                <a
                  href="mailto:chat@gilbertosantos.com"
                  className="flex items-center gap-3 py-3 text-sm hover:text-royal transition-colors"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 text-neutral-medium-gray" aria-hidden="true" />
                  <span className="flex-1">chat@gilbertosantos.com</span>
                </a>
              </li>
              {SOCIALS.map(({ label, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 py-3 text-sm hover:text-royal transition-colors"
                  >
                    <FontAwesomeIcon icon={icon} className="w-4 h-4 text-neutral-medium-gray" aria-hidden="true" />
                    <span className="flex-1">{label}</span>
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="w-3.5 h-3.5 text-neutral-medium-gray"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function BellIllustration() {
  return (
    <svg width="136" height="104" viewBox="0 0 136 104" fill="none" aria-hidden="true" className="ml-6">
      <path
        d="M48 70V46a20 20 0 0 1 40 0v24l6 8H42l6-8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        className="text-neutral-medium-gray"
      />
      <path d="M62 82a6 6 0 0 0 12 0" stroke="currentColor" strokeWidth="1.5" className="text-neutral-medium-gray" />
      <path d="M30 96h76" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="text-neutral-medium-gray" />
      <circle cx="92" cy="28" r="12" className="fill-royal" />
      <path d="m86.5 28 4 4 7-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
