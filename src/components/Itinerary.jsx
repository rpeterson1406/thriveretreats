import './Itinerary.css'

const days = [
  {
    id: 1,
    side: 'left',
    tone: 'green',
    label: 'Day 1',
    title: (
      <>
        Arrive <span className="itin__card-plus">+</span> Connect
      </>
    ),
    text: (
      <>
        Settle into our desert retreat
        <br />
        home, meet the group, enjoy a
        <br />
        welcome dinner, and ease into
        <br />
        the experience with light
        <br />
        movement and connection.
      </>
    ),
    image: '/images/house_patio_pic.avif',
    imageAlt: 'Desert retreat patio at golden hour',
    icon: 'home',
  },
  {
    id: 2,
    side: 'right',
    tone: 'orange',
    label: 'Day 2',
    title: 'Explore',
    text: (
      <>
        Head out for a beautiful guided
        <br />
        hike, take in iconic Sonoran Desert
        <br />
        scenery, then return for recovery,
        <br />
        nourishment, and relaxation.
      </>
    ),
    image: '/images/day2card.png',
    imageAlt: 'Women hiking a Sonoran Desert trail toward mountain peaks',
    icon: 'binoculars',
  },
  {
    id: 3,
    side: 'left',
    tone: 'pink',
    label: 'Day 3',
    title: 'Challenge',
    text: (
      <>
        Today is the signature adventure —
        <br />
        a longer, more memorable hike
        <br />
        with incredible views, shared
        <br />
        accomplishment, and a satisfying
        <br />
        finish.
      </>
    ),
    image: '/images/day3card.png',
    imageAlt: 'Women hikers posing by a desert waterfall in a rocky canyon',
    icon: 'mountain',
  },
  {
    id: 4,
    side: 'right',
    tone: 'green',
    label: 'Day 4',
    title: (
      <>
        Adventure <span className="itin__card-plus">+</span> Restore
      </>
    ),
    text: (
      <>
        Enjoy another scenic outing with
        <br />
        space to breathe, reflect, recover,
        <br />
        and savor the rhythm of the
        <br />
        retreat.
      </>
    ),
    image: '/images/day4card.png',
    imageAlt: 'Sonoran Desert sunset with saguaros and mountain ridges',
    icon: 'lotus',
  },
  {
    id: 5,
    side: 'left',
    tone: 'orange',
    label: 'Day 5',
    title: (
      <>
        Reflect <span className="itin__card-plus">+</span> Depart
      </>
    ),
    text: (
      <>
        Begin the morning with gentle
        <br />
        movement and breakfast before
        <br />
        wrapping up the retreat feeling
        <br />
        stronger, clearer, and renewed.
      </>
    ),
    image: '/images/day5card.png',
    imageAlt: 'Speckled mug with desert sunrise view on a wooden table',
    icon: 'sun',
  },
]

const dayIcons = {
  home: { src: '/images/itin-icon-home.png', w: 62, h: 66 },
  binoculars: { src: '/images/itin-icon-binoculars.png', w: 59, h: 59 },
  mountain: { src: '/images/itin-icon-mountain.png', w: 59, h: 59 },
  lotus: { src: '/images/itin-icon-lotus.png', w: 59, h: 58 },
  sun: { src: '/images/itin-icon-sun.png', w: 60, h: 60 },
}

function DayIcon({ type }) {
  const icon = dayIcons[type]
  if (!icon) return null

  return (
    <img
      className="itin__card-icon-img"
      src={icon.src}
      alt=""
      width={icon.w}
      height={icon.h}
      decoding="async"
    />
  )
}

function TrailPath() {
  return (
    <svg
      className="itin__trail-svg"
      viewBox="0 0 160 1200"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        className="itin__trail-line"
        d="M80 8
           C 48 55, 118 95, 80 150
           C 35 215, 130 265, 80 330
           C 28 400, 135 455, 80 525
           C 22 595, 140 650, 80 720
           C 30 790, 132 845, 80 915
           C 40 975, 120 1025, 80 1085
           C 58 1125, 98 1160, 80 1192"
      />
    </svg>
  )
}

function CactusMark() {
  return (
    <img
      className="itin__cactus"
      src="/images/itin-cactus.png"
      alt=""
      aria-hidden="true"
      width="56"
      height="58"
      decoding="async"
    />
  )
}

function MountainMark() {
  return (
    <img
      className="itin__mountains-small"
      src="/images/itin-trail-mountain.png"
      alt=""
      aria-hidden="true"
      width="82"
      height="37"
      decoding="async"
    />
  )
}

function Itinerary() {
  return (
    <section id="itinerary" className="itin" aria-labelledby="itinerary-heading">
      <div className="itin__backdrop" aria-hidden="true">
        <img
          className="itin__topo"
          src="/images/itin-topo.png"
          alt=""
          width="300"
          height="95"
          decoding="async"
        />
      </div>

      <div className="itin__inner">
        <header className="itin__header">
          <div className="itin__eyebrow-row">
            <span className="itin__eyebrow-rule" aria-hidden="true" />
            <p className="itin__eyebrow">
              Hike <span aria-hidden="true">•</span> Grow{' '}
              <span aria-hidden="true">•</span> Belong{' '}
              <span aria-hidden="true">•</span> Thrive
            </p>
            <span className="itin__eyebrow-rule" aria-hidden="true" />
          </div>

          <div className="itin__title-band">
            <p className="itin__destination" aria-hidden="true">
              Destination:
              <br />
              Fully
              <br />
              Alive
              <span className="itin__destination-rule" />
            </p>

            <div className="itin__title-block">
              <h2 id="itinerary-heading" className="itin__title">
                A Look at Your Tucson Retreat
              </h2>
              <p className="itin__subtitle">
                Five unforgettable days of hiking, strength, restoration and
                connection in the Sonoran Desert.
              </p>
            </div>

            <span className="itin__title-spacer" aria-hidden="true" />
          </div>

          <img
            className="itin__script-note"
            src="/images/itin-hike-script.png"
            alt=""
            aria-hidden="true"
            width="230"
            height="148"
            decoding="async"
          />
        </header>

        <div className="itin__board">
          <TrailPath />

          <div className="itin__trail-ornaments" aria-hidden="true">
            <CactusMark />
            <MountainMark />
          </div>

          <ol className="itin__markers" aria-hidden="true">
            {days.map((day) => (
              <li
                key={day.id}
                className={`itin__marker itin__marker--${day.id} itin__marker--${day.side} itin__marker--${day.tone}`}
              >
                <span className="itin__marker-connector" />
                <span className="itin__marker-disk">{day.id}</span>
              </li>
            ))}
          </ol>

          <p className="itin__aside itin__aside--top" aria-hidden="true">
            Bolder Steps
            <br />
            Brighter Tomorrows
            <span className="itin__aside-rule" />
          </p>

          <p className="itin__aside itin__aside--mid" aria-hidden="true">
            To Go Further,
            <br />
            Go Together
            <span className="itin__aside-rule" />
          </p>

          <div className="itin__cards">
            {days.map((day) => (
              <article
                key={day.id}
                data-day={day.id}
                className={`itin__card itin__card--${day.side} itin__card--${day.tone} itin__card--day${day.id}`}
              >
                <div className="itin__card-media">
                  <img
                    className="itin__card-image"
                    src={day.image}
                    alt={day.imageAlt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="itin__card-body">
                  <div className="itin__card-heading">
                    <p className="itin__card-day">{day.label}</p>
                    <h3 className="itin__card-title">{day.title}</h3>
                  </div>
                  <div className="itin__card-content">
                    <span className="itin__card-icon" aria-hidden="true">
                      <DayIcon type={day.icon} />
                    </span>
                    <p className="itin__card-text">{day.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <footer className="itin__footer">
          <div className="itin__footer-center">
            <div className="itin__distance-pill">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="m3 18 5.5-8.5 2.8 4.2L15 7l6 11H3Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              <p>
                Approx. hike distances: Day 2 ~7 miles • Day 3 ~5 miles • Day 4 ~7
                miles • Day 5 optional short walk
              </p>
            </div>
            <p className="itin__note">
              Note: Planned hikes may change due to weather and conditions
            </p>
          </div>

          <p className="itin__footer-script">
            Strength
            <br />
            <span className="itin__footer-script-row">
              Grows Here
              <span className="itin__footer-script-line" aria-hidden="true" />
            </span>
          </p>
        </footer>

      </div>
    </section>
  )
}

export default Itinerary
