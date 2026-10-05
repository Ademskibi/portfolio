export default function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-24">
      <h2 className="mb-12 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title}</h2>
      {children}
    </section>
  )
}
