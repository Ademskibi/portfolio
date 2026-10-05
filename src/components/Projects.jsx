import Section from './Section'
import Showcase from './Showcase'
import { projects } from '../data'

const kindLabel = { web: 'Web application', mobile: 'Mobile app' }
const link = 'inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition'

export default function Projects() {
  return (
    <Section id="projects" title="Featured projects">
      <div className="space-y-24 md:space-y-28">
        {projects.map((p, idx) => (
          <article key={p.title} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className={`min-w-0 lg:col-span-8 ${idx % 2 ? 'lg:order-2' : ''}`}>
              <Showcase project={p} />
            </div>
            <div className="lg:col-span-4">
              <p className="flex items-center gap-3 text-sm font-semibold text-accent">
                <span className="font-mono">{String(idx + 1).padStart(2, '0')}</span>
                <span className="h-px w-8 bg-accent/50" />
                {kindLabel[p.kind]}
              </p>
              <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">{p.title}</h3>
              <p className="mt-4 leading-relaxed">{p.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-400">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3"><span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{f}</li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tech.map((t) => (<span key={t} className="rounded-md bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">{t}</span>))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className={`${link} bg-accent text-ink hover:bg-emerald-300`}>Live site ↗</a>}
                <a href={p.github} target="_blank" rel="noreferrer" className={`${link} border border-line text-white hover:border-accent hover:text-accent`}>GitHub</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}