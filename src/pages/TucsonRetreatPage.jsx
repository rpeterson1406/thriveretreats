import AnnouncementBanner from '../components/AnnouncementBanner'
import Hero from '../components/Hero'
import TheRetreat from '../components/TheRetreat'
import Itinerary from '../components/Itinerary'
import Philosophy from '../components/Philosophy'
import Accommodations from '../components/Accommodations'
import Leaders from '../components/Leaders'
import ThoughtfullyDesigned from '../components/ThoughtfullyDesigned'
import BedroomsPricing from '../components/BedroomsPricing'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'
import '../App.css'

/**
 * Existing Tucson retreat page. Reused for both "/" and "/Tucson".
 */
function TucsonRetreatPage() {
  return (
    <>
      <AnnouncementBanner />
      <main className="page">
        <Hero />
        <TheRetreat />
        <Itinerary />
        <ThoughtfullyDesigned />
        <Leaders />
        <Accommodations />
        <BedroomsPricing />
        <Philosophy />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </>
  )
}

export default TucsonRetreatPage
