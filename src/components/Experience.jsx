import Section from './Section'
import { experience } from '../data'

export default function Experience() {
  return (
    <Section id="experience" title="Experience and education">
      <ol className="relative ml-3 border-l border-line">
        {experience.map((e) => (
          <li key={e.role + e.org} className="mb-10 ml-8 last:mb-0">
            <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-ink" />
            <p className="text-sm font-medium text-accent">{e.date}</p>
            <h3 className="text-lg font-bold text-white">{e.role}</h3>
            <p className="text-slate-400">{e.org}</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
              {e.points.map((pt) => (<li key={pt}>{pt}</li>))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
