import './Accommodations.css'

/**
 * Property images:
 * - /images/House_main_upscaled.png
 * - /images/pool1.avif
 * - /images/livingroom.avif
 * - /images/house_patio_pic.avif
 */
const propertyImages = {
  main: {
    src: '/images/House_main_upscaled.png',
    alt: 'Private luxury retreat estate in the Sonoran Desert',
  },
  pool: {
    src: '/images/pool1.avif',
    alt: 'Heated swimming pool at the retreat estate',
  },
  bedroom: {
    src: '/images/livingroom.avif',
    alt: 'Living room and shared gathering space at the retreat estate',
  },
  patio: {
    src: '/images/house_patio_pic.avif',
    alt: 'Outdoor patio with desert and mountain views',
  },
}

const propertyHighlights = [
  'Private 6,200+ sq. ft. estate',
  '5 bedrooms',
  '5.5 bathrooms',
  'En-suite bathroom for every bedroom',
  'Heated swimming pool',
  'Spa / hot tub',
  'Multiple outdoor patios',
  'Mountain and city views',
  'Fully equipped kitchen',
  'Private gated desert setting',
]

function PropertyImage({ image, variant = 'secondary' }) {
  return (
    <div className={`stay__photo stay__photo--${variant}`}>
      <img className="stay__photo-img" src={image.src} alt={image.alt} />
    </div>
  )
}

function Accommodations() {
  return (
    <section
      id="accommodations"
      className="stay"
      aria-labelledby="accommodations-heading"
    >
      <div className="stay__inner">
        <header className="stay__header">
          <p className="stay__label">Accommodations</p>
          <h2 id="accommodations-heading" className="stay__title">
            Your Desert Retreat
          </h2>
          <div className="stay__accent" aria-hidden="true" />
          <p className="stay__intro">
            After a day on the trails, return to a private luxury estate
            surrounded by the beauty of the Sonoran Desert.
          </p>
        </header>

        <div className="stay__gallery">
          <div className="stay__gallery-main">
            <PropertyImage image={propertyImages.main} variant="main" />
          </div>

          <div className="stay__gallery-side">
            <PropertyImage image={propertyImages.pool} />
            <PropertyImage image={propertyImages.bedroom} />
            <PropertyImage image={propertyImages.patio} />
          </div>
        </div>

        <div className="stay__details">
          <div className="stay__copy">
            <h3 className="stay__subtitle">A Private Sonoran Sanctuary</h3>
            <p>
              Nestled in a private gated desert setting, this 6,200+ square foot
              estate is where the group gathers, rests, and reconnects after each
              day on the trail. Five bedrooms — each with its own en-suite bath —
              offer space to unwind, while shared living areas invite conversation
              long after the boots come off.
            </p>
            <p>
              Outside, a heated swimming pool, spa, and multiple outdoor patios
              open to mountain and city views. Inside, a fully equipped kitchen
              and thoughtfully designed spaces support the rhythm of a luxury
              women&apos;s retreat: nourishing meals, quiet mornings, and evenings
              that feel like home.
            </p>
          </div>

          <div className="stay__highlights">
            <p className="stay__highlights-label">Property Highlights</p>
            <ul className="stay__highlights-list">
              {propertyHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Accommodations
