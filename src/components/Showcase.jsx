import { useCallback, useEffect, useState } from 'react'

const Arrow = ({ flip }) => (
  <svg viewBox="0 0 24 24" className={`h-5 w-5 ${flip ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="m9 6 6 6-6 6" />
  </svg>
)

function BrowserFrame({ src, alt, label, onOpen }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-panel shadow-2xl shadow-black/60">
      <div className="flex items-center gap-2 border-b border-line bg-black/30 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        <span className="ml-3 truncate rounded-md bg-white/5 px-3 py-1 text-xs text-slate-500">{label}</span>
      </div>
      <button type="button" onClick={onOpen} aria-label={`Enlarge: ${alt}`} className="block w-full cursor-zoom-in bg-white">
        <img key={src} src={src} alt={alt} loading="lazy" className="aspect-[16/10] w-full animate-fade object-cover object-top" />
      </button>
    </div>
  )
}

function Phone({ src, alt, className = '', onClick, ariaLabel }) {
  const Tag = onClick ? 'button' : 'div'
  return (
    <Tag
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`shrink-0 overflow-hidden rounded-[1.75rem] border-[5px] border-neutral-800 bg-black shadow-2xl shadow-black/70 ${className}`}
    >
      <img src={src} alt={alt} loading="lazy" className="aspect-[9/20] w-full object-cover" />
    </Tag>
  )
}

function Lightbox({ shots, index, setIndex, onClose, mobile }) {
  const n = shots.length
  const go = useCallback((d) => setIndex((i) => (i + d + n) % n), [n, setIndex])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [go, onClose])

  const s = shots[index]
  const btn = 'flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20'
  return (
    <div role="dialog" aria-modal="true" aria-label={s.caption} className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-fade" onClick={onClose}>
      <button type="button" onClick={onClose} aria-label="Close" className={`${btn} absolute right-4 top-4 text-xl`}>×</button>
      <div className="flex w-full max-w-6xl items-center justify-center gap-3" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={() => go(-1)} aria-label="Previous screenshot" className={`${btn} hidden sm:flex`}><Arrow flip /></button>
        <img src={s.src} alt={s.caption} className={`min-w-0 rounded-lg object-contain ${mobile ? 'max-h-[80vh]' : 'max-h-[80vh] max-w-full'}`} />
        <button type="button" onClick={() => go(1)} aria-label="Next screenshot" className={`${btn} hidden sm:flex`}><Arrow /></button>
      </div>
      <div className="mt-4 flex items-center gap-4 text-sm text-slate-300" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={() => go(-1)} aria-label="Previous screenshot" className={`${btn} sm:hidden`}><Arrow flip /></button>
        <p>{s.caption} <span className="text-slate-500">· {index + 1}/{n}</span></p>
        <button type="button" onClick={() => go(1)} aria-label="Next screenshot" className={`${btn} sm:hidden`}><Arrow /></button>
      </div>
    </div>
  )
}

export default function Showcase({ project }) {
  const { shots, kind, title } = project
  const mobile = kind === 'mobile'
  const [i, setI] = useState(0)
  const [zoom, setZoom] = useState(false)
  const n = shots.length
  const at = (k) => shots[(k + n) % n]

  return (
    <div>
      <div className="relative">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 m-auto h-3/4 w-3/4 rounded-full bg-accent/10 blur-3xl" />
        {mobile ? (
          <div className="flex items-center justify-center gap-3 overflow-hidden py-2 sm:gap-5">
            <Phone src={at(i - 1).src} alt="" onClick={() => setI((i - 1 + n) % n)} ariaLabel={`Show ${at(i - 1).caption}`} className="w-24 scale-95 opacity-40 transition hover:opacity-70 sm:w-28" />
            <div key={i} className="animate-fade">
              <Phone src={at(i).src} alt={`${title}: ${at(i).caption}`} onClick={() => setZoom(true)} ariaLabel={`Enlarge: ${at(i).caption}`} className="w-40 cursor-zoom-in ring-1 ring-accent/30 sm:w-48" />
            </div>
            <Phone src={at(i + 1).src} alt="" onClick={() => setI((i + 1) % n)} ariaLabel={`Show ${at(i + 1).caption}`} className="w-24 scale-95 opacity-40 transition hover:opacity-70 sm:w-28" />
          </div>
        ) : (
          <BrowserFrame src={at(i).src} alt={`${title}: ${at(i).caption}`} label={title} onOpen={() => setZoom(true)} />
        )}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 text-sm">
        <p className="text-slate-400"><span className="font-semibold text-white">{at(i).caption}</span></p>
        <div className="flex gap-2">
          <button type="button" onClick={() => setI((i - 1 + n) % n)} aria-label="Previous screenshot" className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-slate-300 transition hover:border-accent hover:text-accent"><Arrow flip /></button>
          <button type="button" onClick={() => setI((i + 1) % n)} aria-label="Next screenshot" className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-slate-300 transition hover:border-accent hover:text-accent"><Arrow /></button>
        </div>
      </div>

      <div className="mt-3 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label={`${title} screenshots`}>
        {shots.map((s, k) => (
          <button
            key={s.caption}
            type="button"
            role="tab"
            aria-selected={k === i}
            aria-label={s.caption}
            onClick={() => setI(k)}
            className={`shrink-0 overflow-hidden rounded-md border-2 transition ${k === i ? 'border-accent' : 'border-line opacity-60 hover:opacity-100'}`}
          >
            <img src={s.src} alt="" loading="lazy" className={mobile ? 'aspect-[9/20] h-16 object-cover' : 'aspect-[16/10] h-12 object-cover object-top'} />
          </button>
        ))}
      </div>

      {zoom && <Lightbox shots={shots} index={i} setIndex={setI} onClose={() => setZoom(false)} mobile={mobile} />}
    </div>
  )
}
