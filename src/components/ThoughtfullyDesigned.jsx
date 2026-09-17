import './ThoughtfullyDesigned.css'

const benefits = [
  {
    title: 'Curated hiking adventures',
    text: 'Through Tucson and the Sonoran Desert’s most breathtaking landscapes.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M3 19L9.5 8l3.2 5.2L16 7l5 12H3z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Limited to 10 women',
    text: 'An intentionally small group for a more personalized experience.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 20s-7-4.4-7-9.2A3.8 3.8 0 0 1 12 7.5a3.8 3.8 0 0 1 7 3.3C19 15.6 12 20 12 20z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Relaxing accommodations',
    text: 'A beautiful private estate selected specifically for the THRIVE retreat experience.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1v-8.5z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Meals & snacks',
    text: 'Nutritious, delicious meals and snacks throughout the retreat.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M8 3v8a3 3 0 0 0 3 3h0V3M16 3v18M16 3c2.2 2.5 2.2 6 0 8.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Guided recovery sessions',
    text: 'Stretching, mobility, recovery, and mindful movement to support your body.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 8v4l2.5 2.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Expert guidance & support',
    text: 'Retreat leaders Shannon and Melissa with you every step of the way.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="8" cy="8" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="8" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M4.5 19c.4-3 2-4.8 3.5-4.8S11 16 11.2 19M12.8 19c.4-3 2-4.8 3.5-4.8S19.5 16 20 19"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Transportation throughout',
    text: 'Getting you to and from adventures during the retreat week.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 16V8.5A2.5 2.5 0 0 1 6.5 6h11A2.5 2.5 0 0 1 20 8.5V16M4 16h16M6.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Park & trail fees included',
    text: 'All park and hiking entrance fees covered for scheduled adventures.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M4 19l5-9 3 5 2.5-4L20 19H4zM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Travel planning assistance',
    text: 'Pre-retreat support to help you plan your trip with confidence.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M10.5 12.5L4 10l16-6-6 16-2.5-7.5z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Airport transportation',
    text: 'Complimentary airport transfers during designated arrival and departure windows.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M5 17h14M7 17l1.2-7h7.6L17 17M9 10V7.5A1.5 1.5 0 0 1 10.5 6h3A1.5 1.5 0 0 1 15 7.5V10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="8.5" cy="17" r="1.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="15.5" cy="17" r="1.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Suggested fitness training',
    text: 'Guidance to help you feel prepared and confident before you arrive.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M6 9v6M8.5 7v10M15.5 7v10M18 9v6M8.5 12h7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Comprehensive packing guide',
    text: 'A clear packing list so you know exactly what to bring.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="3" width="14" height="18" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M8 8h8M8 12h8M8 16h5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]

function ThoughtfullyDesigned() {
  return (
    <section
      id="thoughtfully-designed"
      className="designed"
      aria-labelledby="designed-heading"
    >
      <div className="designed__inner">
        <header className="designed__header">
          <p className="designed__label">What&apos;s Included</p>
          <h2 id="designed-heading" className="designed__title">
            Your Retreat, Thoughtfully Designed
          </h2>
          <div className="designed__accent" aria-hidden="true" />
          <p className="designed__subhead">
            Every detail has been carefully planned so you can focus on what
            matters most — enjoying every moment.
          </p>
        </header>

        <ul className="designed__grid">
          {benefits.map((item) => (
            <li key={item.title} className="designed__card">
              <span className="designed__icon">{item.icon}</span>
              <h3 className="designed__card-title">{item.title}</h3>
              <p className="designed__card-text">{item.text}</p>
            </li>
          ))}
        </ul>

        <p className="designed__note">
          Airfare &amp; optional massages are not included.
        </p>
      </div>
    </section>
  )
}

export default ThoughtfullyDesigned
