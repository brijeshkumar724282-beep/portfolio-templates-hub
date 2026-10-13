import { Reveal } from './Reveal.jsx'
import { compareRows, templates } from '../data.js'

export function Compare() {
  return (
    <section id="compare" className="scroll-mt-24 border-y border-line bg-card">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-accent">Find your fit</p>
          <h2 className="mt-3 max-w-xl font-serif text-4xl leading-tight md:text-5xl">Which one matches your work?</h2>
          <p className="mt-4 max-w-xl text-muted">A quick side by side so you can choose in under a minute.</p>
        </Reveal>
        <Reveal delay={0.1} className="mt-10">
          <div className="overflow-x-auto rounded-3xl border border-line shadow-card">
            <table className="w-full min-w-[640px] border-collapse bg-card text-left text-sm">
              <thead>
                <tr className="bg-ink text-white">
                  <th className="p-5 font-semibold" scope="col">Topic</th>
                  {templates.map((t) => (
                    <th key={t.id} className="p-5 font-semibold" scope="col">{t.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, ri) => (
                  <tr key={row.label} className={ri % 2 === 0 ? 'bg-paper' : 'bg-card'}>
                    <th className="p-5 align-top font-bold" scope="row">{row.label}</th>
                    {row.values.map((v, vi) => (
                      <td key={vi} className="p-5 align-top text-muted">{v}</td>
                    ))}
                  </tr>
                ))}
                <tr className="bg-tint">
                  <th className="p-5 font-bold" scope="row">Preview</th>
                  {templates.map((t) => (
                    <td key={t.id} className="p-5">
                      <a
                        href={t.live}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-accent underline-offset-4 hover:underline"
                      >
                        Open live site
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {templates.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.07}>
              <div className="rounded-2xl border border-line bg-paper p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-muted">Choose {t.name} if</p>
                <p className="mt-2 text-sm leading-relaxed">Your best work is {t.audience.toLowerCase()} and you like a {t.vibe.toLowerCase()} feel.</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
