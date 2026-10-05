import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <div className="flex gap-5">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
