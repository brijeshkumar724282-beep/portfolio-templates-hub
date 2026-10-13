import { templates } from '../data.js'

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white font-serif text-lg text-ink">P</span>
              <p className="font-bold">Portfolio Templates Hub</p>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Three free portfolio starters for writers, developers, and designers. Preview live and ship today.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/50">Templates</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {templates.map((t) => (
                <li key={t.id}>
                  <a href={t.live} target="_blank" rel="noreferrer" className="text-white/85 hover:text-white hover:underline underline-offset-4">
                    {t.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/50">Source code</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {templates.map((t) => (
                <li key={t.id}>
                  <a href={t.repo} target="_blank" rel="noreferrer" className="text-white/85 hover:text-white hover:underline underline-offset-4">
                    {t.name} repo
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
          <p>Released under the MIT License. Free for personal and client work.</p>
          <p>Crafted with care for the portfolio community.</p>
        </div>
      </div>
    </footer>
  )
}
