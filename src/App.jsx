import { Navbar } from './components/Navbar.jsx'
import { Hero } from './components/Hero.jsx'
import { TemplateCards } from './components/TemplateCards.jsx'
import { Compare } from './components/Compare.jsx'
import { HowTo } from './components/HowTo.jsx'
import { Footer } from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <a href="#templates" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-5 focus:py-2 focus:text-white">
        Skip to templates
      </a>
      <Navbar />
      <main>
        <Hero />
        <TemplateCards />
        <Compare />
        <HowTo />
      </main>
      <Footer />
    </div>
  )
}
