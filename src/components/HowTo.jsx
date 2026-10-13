import { useState } from 'react'
import { Reveal } from './Reveal.jsx'
import { templates } from '../data.js'

function CopyButton({ text }) {
  const [done, setDone] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setDone(true)
    setTimeout(() => setDone(false), 1600)
  }
  return (
    <button
      onClick={copy}
      className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition ${
        done ? 'bg-white text-ink' : 'bg-accent text-white hover:bg-accentdark'
      }`}
      aria-live="polite"
    >
      {done ? 'Copied' : 'Copy'}
    </button>
  )
}

const steps = [
  {
    n: '1',
    title: 'Pick your template',
    body: 'Compare the three above and open a live preview. Each one is free and MIT licensed, so client work is fine.'
  },
  {
    n: '2',
    title: 'Clone the code',
    body: 'Copy a command below and run it in your terminal. Open the folder, edit the text, add your projects and photos.'
  },
  {
    n: '3',
    title: 'Deploy in minutes',
    body: 'Push to GitHub and turn on Pages, or drop the folder into Netlify or Vercel. Share your new URL everywhere.'
  }
]

export function HowTo() {
  return (
    <section id="howto" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-24">
      <Reveal>
        <p className="text-xs font-bold uppercase tracking-widest text-accent">Zero to live</p>
        <h2 className="mt-3 max-w-xl font-serif text-4xl leading-tight md:text-5xl">Online in three simple steps.</h2>
      </Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.08}>
            <div className="h-full rounded-3xl border border-line bg-card p-7 shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink font-serif text-xl text-white">
                {s.n}
              </span>
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.1}>
        <div className="mt-8 rounded-3xl bg-ink p-6 text-white md:p-8">
          <h3 className="font-serif text-2xl">Copy a clone command</h3>
          <p className="mt-2 text-sm text-white/70">Paste in your terminal, press enter, start editing.</p>
          <div className="mt-6 space-y-3">
            {templates.map((t) => (
              <div key={t.id} className="flex flex-col gap-3 rounded-2xl bg-white/10 p-4 md:flex-row md:items-center">
                <span className="w-40 shrink-0 text-sm font-bold">{t.name}</span>
                <code className="flex-1 overflow-x-auto rounded-xl bg-black/40 px-4 py-3 font-mono text-xs text-white/90">
                  {t.clone}
                </code>
                <CopyButton text={t.clone} />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
