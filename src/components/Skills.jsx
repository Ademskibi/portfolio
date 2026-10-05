import Section from './Section'
import { skills } from '../data'

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([cat, items]) => (
          <div key={cat} className="rounded-xl border border-line bg-panel p-6 transition hover:border-accent/50">
            <h3 className="mb-4 font-bold text-white">{cat}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((s) => (
                <span key={s} className="rounded-full border border-line px-3 py-1 text-sm transition hover:border-accent hover:text-accent">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
