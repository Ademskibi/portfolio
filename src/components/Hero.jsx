import { profile, heroShots } from '../data'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden px-5 pt-16">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-12">
        <div className="animate-rise lg:col-span-7">
          <p className="mb-4 font-medium text-accent">Hi, I’m {profile.name}.</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
            I build full-stack web apps and mobile apps that scale.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-400">
            {profile.title}. I turn ideas into fast, reliable products with React, Node.js, Flutter and clean APIs.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-lg bg-accent px-6 py-3 font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-emerald-300">View projects</a>
            <a href="#contact" className="rounded-lg border border-line px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-accent hover:text-accent">Get in touch</a>
          </div>
          <div className="mt-10 flex gap-6 text-sm font-medium">
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-accent">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-accent">LinkedIn</a>
          </div>
        </div>

        {/* Collage of real project screenshots */}
        <div aria-hidden className="relative hidden h-[460px] animate-rise lg:col-span-5 lg:block">
          <div className="absolute left-0 top-0 w-[88%] -rotate-3 overflow-hidden rounded-xl border border-line shadow-2xl shadow-black/60">
            <img src={heroShots.web.src} alt="" className="aspect-[16/10] w-full object-cover object-top" />
          </div>
          <div className="absolute bottom-6 right-0 w-[70%] rotate-2 overflow-hidden rounded-xl border border-line bg-white shadow-2xl shadow-black/60">
            <img src={heroShots.webAlt.src} alt="" className="aspect-[16/10] w-full object-cover object-top" />
          </div>
          <div className="absolute bottom-0 left-4 w-28 -rotate-6 overflow-hidden rounded-[1.5rem] border-[5px] border-neutral-800 bg-black shadow-2xl shadow-black/70">
            <img src={heroShots.phone.src} alt="" className="aspect-[9/20] w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
