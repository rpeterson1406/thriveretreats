import './ThoughtfullyDesigned.css'

const DESERT_IMAGE = '/images/whats_included_desert.avif'

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.35,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const inclusions = [
  {
    title: 'Guided Hikes',
    text: 'Expert-led hikes on iconic Tucson trails, with routes chosen for adventure, beauty and the right level of challenge.',
    color: 'olive',
    iconAsset: true,
    icon: (
      <img
        src="/images/guided-hikes-icon.png"
        alt=""
        width={800}
        height={800}
        decoding="async"
      />
    ),
  },
  {
    title: 'Movement & Recovery',
    text: 'Thoughtful strength work, mobility, stretching and recovery sessions to keep you feeling strong and ready for each day.',
    color: 'pink',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...stroke} d="M10 18v12M14 14v20M34 14v20M38 18v12M14 24h20" />
        <path {...stroke} d="M8 20v8M40 20v8" />
      </svg>
    ),
  },
  {
    title: 'Luxury Accommodations',
    text: 'Five days in a beautiful private retreat home with spacious rooms, en-suite bathrooms, a pool, hot tub and stunning desert views.',
    color: 'olive',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path {...stroke} d="M8 22L24 10l16 12v16a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V22z" />
        <path {...stroke} d="M20 40V28h8v12" />
        <path {...stroke} d="M30 14v-4h5v8" />
      </svg>
    ),
  },
  {
    title: 'All Meals & Snacks',
    text: 'Delicious, nutritious meals and snacks prepared for you throughout the retreat, with a focus on fueling your adventures.',
    color: 'pink',
    iconAsset: true,
    icon: (
      <img
        src="/images/meals-snacks-icon.png"
        alt=""
        width={800}
        height={800}
        decoding="async"
      />
    ),
  },
  {
    title: 'A Supportive Community',
    text: 'Share the experience with 7–10 like-minded women who encourage, inspire and get what this stage of life is all about.',
    color: 'pink',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        {/* Three people — middle figure larger/taller like the reference */}
        <circle cx="10" cy="16" r="3.6" {...stroke} />
        <path {...stroke} d="M4.5 38c0.7-7.5 3.4-11 5.5-11s4.8 3.5 5.5 11" />
        <circle cx="24" cy="11.5" r="4.8" {...stroke} />
        <path {...stroke} d="M16.5 38c0.9-9.5 4.5-14.5 7.5-14.5s6.6 5 7.5 14.5" />
        <circle cx="38" cy="16" r="3.6" {...stroke} />
        <path {...stroke} d="M32.5 38c0.7-7.5 3.4-11 5.5-11s4.8 3.5 5.5 11" />
      </svg>
    ),
  },
  {
    title: 'Transportation',
    text: 'All transportation during the retreat, including shuttles to trailheads and group activities.',
    color: 'olive',
    iconAsset: true,
    icon: (
      <img
        src="/images/transportation-icon.png"
        alt=""
        width={800}
        height={800}
        decoding="async"
      />
    ),
  },
  {
    title: 'Airport Pickup & Drop-Off',
    text: 'We’ve got you covered with group airport transportation during designated windows (see FAQ for details).',
    color: 'pink',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        {/* Material-style plane, rotated to point up-right */}
        <g transform="translate(24 24) rotate(-48) scale(1.7) translate(-11.5 -12)">
          <path
            {...stroke}
            strokeWidth={1.45}
            d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9L2 14v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
          />
        </g>
      </svg>
    ),
  },
  {
    title: 'THRIVE Extras',
    text: 'Park fees, guided experiences, retreat materials, surprise goodies and all the thoughtful details that make this experience seamless.',
    color: 'olive',
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="12" y="8" width="24" height="32" rx="2" {...stroke} />
        <path {...stroke} d="M18 6h12v4H18z" />
        <path {...stroke} d="M17 18l2.5 2.5L24 16M17 26l2.5 2.5L24 24M17 34l2.5 2.5L24 32" />
        <path {...stroke} d="M27 19h6M27 27h6M27 35h6" />
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
            We Take Care of the Details
          </h2>
          <p className="designed__subhead">
            So you can focus on what matters most — moving, connecting, and
            enjoying every moment.
          </p>
          <div className="designed__accent" aria-hidden="true" />
        </header>

        <ul className="designed__grid">
          {inclusions.map((item) => (
            <li key={item.title} className="designed__item">
              <span
                className={[
                  'designed__icon',
                  `designed__icon--${item.color}`,
                  item.iconAsset ? 'designed__icon--asset' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {item.icon}
              </span>
              <h3 className={`designed__item-title designed__item-title--${item.color}`}>
                {item.title}
              </h3>
              <p className="designed__item-text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="designed__closing">
        <p className="designed__closing-text">All included. All for you.</p>
        <div className="designed__closing-accent" aria-hidden="true" />
      </div>

      <div className="designed__landscape" aria-hidden="true">
        <img
          className="designed__landscape-image"
          src={DESERT_IMAGE}
          alt=""
        />
      </div>
    </section>
  )
}

export default ThoughtfullyDesigned
