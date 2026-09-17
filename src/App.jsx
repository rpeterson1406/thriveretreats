import Hero from './components/Hero'
import TheRetreat from './components/TheRetreat'
import Itinerary from './components/Itinerary'
import Accommodations from './components/Accommodations'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <main className="page">
      <Hero />
      <TheRetreat />
      <Itinerary />
      <Accommodations />
      <FAQ />
      <FinalCTA />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
