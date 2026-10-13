import { Reveal } from './Reveal.jsx'
import { templates } from '../data.js'

function ThumbEditorial() {
  return (
    <div className="flex h-44 flex-col rounded-xl border border-line bg-white p-5" aria-hidden="true">
      <div className="flex items-center justify-between">
        <div className="h-2 w-16 rounded bg-ink" />
        <div className="flex h-6 w-11 items-center rounded-full bg-tint px-1">
          <div className="h-4 w-4 rounded-full bg-ink" />
        </div>
      </div>
      <div className="mt-4 font-serif text-xl leading-none text-ink">Aa</div>
      <div className="mt-2 space-y-2">
        <div className="h-1.5 w-full rounded bg-line" />
        <div className="h-1.5 w-11/12 rounded bg-line" />
        <div className="h-1.5 w-3/4 rounded bg-line" />
      </div>
      <div className="mt-auto flex gap-2">
        <div className="h-8 flex-1 rounded bg-paper" />
        <div className="h-8 flex-1 rounded bg-paper" />
        <div className="h-8 flex-1 rounded bg-accent" />
      </div>
    </div>
  )
}

function ThumbDeveloper() {
  return (
    <div className="h-44 rounded-xl bg-ink p-4" aria-hidden="true">
      <div className="flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        <span className="ml-2 h-2 w-20 rounded bg-white/20" />
      </div>
      <div className="mt-3 font-mono text-[10px] leading-relaxed text-white/80">
        <p>$ whoami</p>
        <p className="text-white">creative developer</p>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2">
        <div className="h-10 rounded bg-white/10" />
        <div className="h-10 rounded bg-white/10" />
        <div className="h-10 rounded bg-accent" />
      </div>
    </div>
  )
}

function ThumbDesigner() {
  return (
    <div className="h-44 overflow-hidden rounded-xl border border-line bg-white" aria-hidden="true">
      <div className="bg-accent py-1.5">
        <p className="whitespace-nowrap text-center text-[10px] font-bold uppercase tracking-widest text-white">
          Selected work selected work selected work
        </p>
      </div>
      <div className="grid grid-cols-3 gap-2 p-3">
        <div className="h-16 rounded bg-ink" />
        <div className="h-16 rounded bg-tint" />
        <div className="h-16 rounded bg-line" />
        <div className="col-span-2 h-8 rounded bg-paper" />
        <div className="h-8 rounded bg-ink" />
      </div>
    </div>
  )
}

const thumbs = {
  'minimal-editorial': <ThumbEditorial />,
  'creative-developer': <ThumbDeveloper />,
  'visual-designer': <ThumbDesigner />
}

export function TemplateCards() {
  return (
    <section id="templates" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-24">
      <Reveal>
        <p className="text-xs font-bold uppercase tracking-widest text-accent">The collection</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-xl font-serif text-4xl leading-tight md:text-5xl">Three starters, each with a point of view.</h2>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Every template is a complete site. Open the live preview in a new tab, then grab the code.
          </p>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {templates.map((t, i) => (
          <Reveal key={t.id} delay={i * 0.08}>
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card shadow-card transition duration-300 hover:shadow-pop">
              <div className="border-b border-line bg-paper p-4">
                <div className="flex items-center justify-between px-1 pb-3">
                  <span className="font-mono text-xs text-muted">{t.index}</span>
                  <span className="rounded-full bg-tint px-3 py-1 text-[11px] font-semibold text-accent">{t.tagline}</span>
                </div>
                {thumbs[t.id]}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-2xl">{t.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t.description}</p>
                <ul className="mt-4 space-y-2.5">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-3 pt-2">
                  <a
                    href={t.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-full bg-ink px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-accent"
                  >
                    Live Preview
                  </a>
                  <a
                    href={t.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 rounded-full border border-ink/20 px-4 py-3 text-center text-sm font-semibold transition hover:border-accent hover:text-accent"
                  >
                    Get Code
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
