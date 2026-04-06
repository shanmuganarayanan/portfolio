import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TechStrip from '@/components/TechStrip'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Work from '@/components/Work'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TechStrip />
      <Skills />
      <Projects />
      <Work />
      <Contact />
      <Footer />
    </main>
  )
}
