import { useState } from 'react'
import Section from './Section'
import { profile } from '../data'

const field = 'w-full rounded-lg border border-line bg-panel px-4 py-3 text-white placeholder-slate-500 transition focus:border-accent focus:outline-none'

export default function Contact() {
  const [sent, setSent] = useState(false)

  // Opens the visitor's mail app with the message filled in. To receive messages
  // directly, swap this for a Formspree/EmailJS call.
  const onSubmit = (e) => {
    e.preventDefault()
    const d = new FormData(e.target)
    const subject = encodeURIComponent(`Portfolio message from ${d.get('name')}`)
    const body = encodeURIComponent(`${d.get('message')}\n\nReply to: ${d.get('email')}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <Section id="contact" title="Let’s work together">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-lg">Have a project, an internship or a role in mind? Send a message and I’ll reply soon.</p>
          <p><a className="font-semibold text-white hover:text-accent" href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <p className="text-slate-400">{profile.phone}</p>
          <div className="flex gap-6 font-medium">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">LinkedIn</a>
          </div>
        </div>
        {/* <form onSubmit={onSubmit} className="space-y-4">
          <input required name="name" placeholder="Your name" className={field} aria-label="Your name" />
          <input required type="email" name="email" placeholder="Your email" className={field} aria-label="Your email" />
          <textarea required name="message" rows="5" placeholder="Your message" className={field} aria-label="Your message" />
          <button className="rounded-lg bg-accent px-6 py-3 font-semibold text-ink transition hover:bg-emerald-300">Send message</button>
          {sent && <p role="status" className="text-sm text-accent">Your mail app should open with the message ready to send.</p>}
        </form> */}
      </div>
    </Section>
  )
}
