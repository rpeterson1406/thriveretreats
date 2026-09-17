import './Accommodations.css'

/**
 * Property images — replace these files in /public/images/ when ready:
 * - accommodation-main.jpg
 * - accommodation-pool.jpg
 * - accommodation-bedroom.jpg
 * - accommodation-patio.jpg
 */
const propertyImages = {
  main: {
    src: '/images/accommodation-main.jpg',
    label: 'accommodation-main.jpg',
    hint: 'Primary estate exterior or great room',
  },
  pool: {
    src: '/images/accommodation-pool.jpg',
    label: 'accommodation-pool.jpg',
    hint: 'Heated pool & spa',
  },
  bedroom: {
    src: '/images/accommodation-bedroom.jpg',
    label: 'accommodation-bedroom.jpg',
    hint: 'En-suite bedroom suite',
  },
  patio: {
    src: '/images/accommodation-patio.jpg',
    label: 'accommodation-patio.jpg',
    hint: 'Outdoor patio with desert views',
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

function ImagePlaceholder({ image, variant = 'secondary' }) {
  return (
    <div
      className={`stay__placeholder stay__placeholder--${variant}`}
      role="img"
      aria-label={`${image.hint} — photo coming soon`}
      data-image={image.src}
    >
      <span className="stay__placeholder-label">{image.label}</span>
      <span className="stay__placeholder-hint">{image.hint}</span>
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
          {/* Replace with /public/images/accommodation-main.jpg */}
          <div className="stay__gallery-main">
            <ImagePlaceholder image={propertyImages.main} variant="main" />
          </div>

          <div className="stay__gallery-side">
            {/* Replace with /public/images/accommodation-pool.jpg */}
            <ImagePlaceholder image={propertyImages.pool} />
            {/* Replace with /public/images/accommodation-bedroom.jpg */}
            <ImagePlaceholder image={propertyImages.bedroom} />
            {/* Replace with /public/images/accommodation-patio.jpg */}
            <ImagePlaceholder image={propertyImages.patio} />
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
