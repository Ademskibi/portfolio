import Section from './Section'

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-10 md:grid-cols-3">
        <div className="space-y-5 text-lg leading-relaxed md:col-span-2">
          <p>I’m a full-stack developer and computer engineering student at ESPRIT (alternance program), with a Bachelor’s degree in Information Technology from ISET Zaghouan. I currently work at Techmind Solution, building responsive web and mobile applications with React, Node.js, PHP and Flutter.</p>
          <p>My experience includes a MERN-stack inventory and workflow platform with real-time notifications, built during my end-of-studies internship at ETAP, a car-service management platform, and a Flutter prayer-times app with geolocation and offline support. I’m comfortable across the frontend, backend and software design (UML, Scrum), and I enjoy collaborating to deliver scalable, user-friendly solutions.</p>
          <p className="text-base text-slate-400">Outside of work I build personal projects that push me to grow, and I’m an active member of the SecuriNets Club.</p>
        </div>
        <dl className="space-y-4 rounded-xl border border-line bg-panel p-6 text-sm">
          <div><dt className="text-slate-500">Languages</dt><dd className="text-white">Arabic (native), French, English</dd></div>
          <div><dt className="text-slate-500">Focus</dt><dd className="text-white">Scalable web and mobile applications</dd></div>
          <div><dt className="text-slate-500">Currently</dt><dd className="text-white">Developer at Techmind Solution</dd></div>
        </dl>
      </div>
    </Section>
  )
}
