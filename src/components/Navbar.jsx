import { useState } from 'react'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { label: 'Templates', href: '#templates' },
    { label: 'Compare', href: '#compare' },
    { label: 'How to use', href: '#howto' }
  ]
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink font-serif text-lg text-white">
            P
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-wide">Portfolio Templates Hub</span>
            <span className="block text-xs text-muted">Free starter collection</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium md:flex" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-ink/80 transition hover:text-accent">
              {l.label}
            </a>
          ))}
          <a
            href="#templates"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accentdark"
          >
            Browse collection
          </a>
        </nav>
        <button
          className="rounded-lg border border-line bg-card px-4 py-2 text-sm font-semibold md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open && (
        <nav className="border-t border-line bg-card px-5 py-4 md:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-3 text-sm font-medium">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 hover:bg-tint">
                {l.label}
              </a>
            ))}
            <a
              href="#templates"
              onClick={() => setOpen(false)}
              className="rounded-full bg-accent px-5 py-2.5 text-center font-semibold text-white"
            >
              Browse collection
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
