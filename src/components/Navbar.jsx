import { useState } from 'react'
import { nav, profile } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="text-lg font-extrabold tracking-tight text-white">
          adem<span className="text-accent">.dev</span>
        </a>
        <ul className="hidden gap-8 md:flex">
          {nav.map((n) => (
            <li key={n}><a href={`#${n.toLowerCase()}`} className="text-sm font-medium text-slate-400 transition hover:text-accent">{n}</a></li>
          ))}
        </ul>
        <button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)} className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden">
          <span className={`h-0.5 w-6 bg-white transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>
      {open && (
        <ul className="border-t border-line bg-ink px-5 py-3 md:hidden">
          {nav.map((n) => (
            <li key={n}><a onClick={() => setOpen(false)} href={`#${n.toLowerCase()}`} className="block py-3 font-medium text-slate-300">{n}</a></li>
          ))}
          <li><a href={`mailto:${profile.email}`} className="block py-3 font-medium text-accent">Email me</a></li>
        </ul>
      )}
    </header>
  )
}
