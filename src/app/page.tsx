import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Principles from '@/components/Principles'
import PracticeAreas from '@/components/PracticeAreas'
import Articles from '@/components/Articles'
import ContactCTA from '@/components/ContactCTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Principles />
      <PracticeAreas />
      <Articles />
      <ContactCTA />
      <Contact />
      <Footer />
    </main>
  )
}