import { motion } from 'framer-motion'

const stats = [
  { value: '3', label: 'Ready templates' },
  { value: 'Free', label: 'Forever, no signup' },
  { value: 'MIT', label: 'Use for client work' }
]

export function Hero() {
  return (
    <section id="top" className="dotgrid border-b border-line">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-16 md:pb-24 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Open template library
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] md:text-7xl">
            Ship a portfolio <br />
            you are proud of.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Pick from three crafted starters. Preview live, copy the code, deploy in minutes. No account, no cost, no catch.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#templates"
              className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-accent"
            >
              Browse templates
            </a>
            <a
              href="#howto"
              className="rounded-full border border-ink/20 bg-card px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
            >
              See how it works
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-line bg-card p-6 shadow-card">
              <p className="font-serif text-4xl text-ink">{s.value}</p>
              <p className="mt-1 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="marquee mt-10 overflow-hidden rounded-2xl border border-line bg-ink py-3" aria-hidden="true">
          <div className="marquee-track text-sm font-medium text-white">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center gap-8 pr-8">
                {['Minimal Editorial', 'Creative Developer', 'Visual Designer', 'Live preview', 'Clone and deploy', 'MIT licensed'].map((t) => (
                  <span key={t + copy} className="flex items-center gap-8 whitespace-nowrap">
                    <span>{t}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
