import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Mail, Send } from 'lucide-react'
import ScrollReveal from '../common/ScrollReveal'
import { personal } from '../../data/personal'

const initialForm = {
  fullName: '',
  email: '',
  subject: '',
  message: '',
}

function validateForm(form) {
  const errors = {}
  const requiredFields = {
    fullName: 'Full name',
    email: 'Email address',
    subject: 'Subject',
    message: 'Message',
  }

  Object.entries(requiredFields).forEach(([field, label]) => {
    if (!form[field].trim()) errors[field] = `${label} is required.`
  })

  if (
    form.email.trim() &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())
  ) {
    errors.email = 'Enter a valid email address.'
  }

  return errors
}

async function copyToClipboard(value) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(value)
      return
    } catch {
      // Try the compatibility fallback below when clipboard access is unavailable.
    }
  }

  const field = document.createElement('textarea')
  field.value = value
  field.setAttribute('readonly', '')
  field.style.position = 'fixed'
  field.style.opacity = '0'
  document.body.appendChild(field)
  field.select()
  const copied = document.execCommand('copy')
  field.remove()

  if (!copied) throw new Error('Clipboard access was denied.')
}

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => {
      if (!current[name]) return current
      const next = { ...current }
      delete next[name]
      return next
    })
    setStatus(null)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (isSubmitting) return

    const validationErrors = validateForm(form)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      setStatus({
        type: 'error',
        message: 'Please correct the highlighted fields and try again.',
      })
      document.getElementById(Object.keys(validationErrors)[0])?.focus()
      return
    }

    setIsSubmitting(true)
    setStatus({ type: 'loading', message: 'Preparing your email draft…' })

    const subject = encodeURIComponent(form.subject.trim())
    const body = encodeURIComponent(
      `Name: ${form.fullName.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`,
    )
    const mailto = `mailto:${personal.email}?subject=${subject}&body=${body}`

    window.setTimeout(() => {
      try {
        window.location.href = mailto
        setStatus({
          type: 'success',
          message:
            'Your email app should open with this draft. Please review and send it there; this site cannot confirm delivery.',
        })
      } catch {
        setStatus({
          type: 'error',
          message: `Could not open an email app. You can email ${personal.email} directly.`,
        })
      } finally {
        setIsSubmitting(false)
      }
    }, 350)
  }

  const handleCopyEmail = async () => {
    try {
      await copyToClipboard(personal.email)
      setEmailCopied(true)
      setStatus({ type: 'success', message: 'Email address copied to clipboard.' })
      window.setTimeout(() => setEmailCopied(false), 2000)
    } catch {
      setStatus({
        type: 'error',
        message: 'Could not copy the email address. Please select and copy it manually.',
      })
    }
  }

  const fieldError = (name) => errors[name] ? `${name}-error` : undefined

  return (
    <section className="contact-section" id="contact">
      <div className="contact-orb" />
      <ScrollReveal className="contact-content">
        <p className="section-kicker">07 / HAVE A GOOD ONE IN MIND?</p>
        <h2>Let&apos;s start<br /><span>a conversation.</span></h2>
        <p className="contact-copy">
          Have an opportunity or a project in mind? Send a message or connect
          with me through my professional profiles.
        </p>
        <div className="contact-layout">
          <aside className="contact-card" aria-label="Contact information">
            <p className="contact-card-kicker">CONTACT DETAILS</p>
            <h3>Let&apos;s connect</h3>
            <p className="contact-card-copy">
              Choose the channel that works best for you. I look forward to hearing from you.
            </p>
            <div className="contact-email-row">
              <span className="contact-detail-icon"><Mail size={17} aria-hidden="true" /></span>
              <div className="contact-email-copy">
                <span>Email</span>
                <a href={`mailto:${personal.email}`}>{personal.email}</a>
              </div>
              <button
                className="copy-email-button"
                type="button"
                onClick={handleCopyEmail}
                aria-label={emailCopied ? 'Email copied' : 'Copy email address'}
              >
                {emailCopied
                  ? <Check size={17} aria-hidden="true" />
                  : <Copy size={17} aria-hidden="true" />}
              </button>
            </div>
            <div className="contact-card-links">
              <a href={personal.linkedin} target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.85 0 1.55-.68 1.55-1.52V3.52c0-.84-.7-1.52-1.55-1.52ZM7.93 18.63H4.96V9.06h2.97v9.57ZM6.45 7.75a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.2 10.88h-2.96v-4.65c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.4V9.06h2.84v1.31h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.57 1.97 3.57 4.53v5.27Z" />
                </svg>
                <span>LinkedIn</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <a href={personal.github} target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
                  <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 .1.76 2.64 3.16 1.88.1-.73.39-1.23.7-1.51-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15a10.8 10.8 0 0 1 5.64 0c2.15-1.45 3.1-1.15 3.1-1.15.61 1.55.23 2.7.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.33-2.63 5.28-5.14 5.56.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z" />
                </svg>
                <span>GitHub</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </aside>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-form-grid">
              <div className="contact-field">
                <label htmlFor="fullName">Full Name <span aria-hidden="true">*</span></label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  value={form.fullName}
                  onChange={updateField}
                  required
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={fieldError('fullName')}
                />
                {errors.fullName && <span className="field-error" id="fullName-error">{errors.fullName}</span>}
              </div>
              <div className="contact-field">
                <label htmlFor="email">Email Address <span aria-hidden="true">*</span></label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={updateField}
                  required
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={fieldError('email')}
                />
                {errors.email && <span className="field-error" id="email-error">{errors.email}</span>}
              </div>
              <div className="contact-field contact-field-wide">
                <label htmlFor="subject">Subject <span aria-hidden="true">*</span></label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={updateField}
                  required
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={fieldError('subject')}
                />
                {errors.subject && <span className="field-error" id="subject-error">{errors.subject}</span>}
              </div>
              <div className="contact-field contact-field-wide">
                <label htmlFor="message">Message <span aria-hidden="true">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={updateField}
                  required
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={fieldError('message')}
                />
                {errors.message && <span className="field-error" id="message-error">{errors.message}</span>}
              </div>
            </div>
            <p className="contact-delivery-note">
              This form opens your email app with a prepared draft. No message is sent or stored by this website.
            </p>
            <div className="contact-form-footer">
              <button className="contact-submit" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Preparing…' : 'Prepare email'}
                <Send size={16} aria-hidden="true" />
              </button>
              <span className="contact-required-note">* Required fields</span>
            </div>
            {status && (
              <p
                className={`contact-form-status is-${status.type}`}
                role={status.type === 'error' ? 'alert' : 'status'}
                aria-live="polite"
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </ScrollReveal>
    </section>
  )
}

export default Contact
