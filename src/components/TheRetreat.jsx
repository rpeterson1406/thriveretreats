import './TheRetreat.css'

function TheRetreat() {
  return (
    <section id="the-retreat" className="retreat" aria-labelledby="retreat-heading">
      <div className="retreat__inner">
        <div className="retreat__copy">
          <p className="retreat__label">The Retreat</p>
          <h2 id="retreat-heading" className="retreat__title">
            A Small Circle.
            <br />
            Big Transformation.
          </h2>
          <div className="retreat__accent" aria-hidden="true" />

          <div className="retreat__prose">
            <p>There&apos;s a reason we keep THRIVE retreats small.</p>
            <p>
              With just <strong>7–10 women</strong>, you&apos;re not one face in
              a crowd. There&apos;s time to get to know one another, space for
              individual attention, and the flexibility to move through each day
              as a group rather than following a rigid tour schedule.
            </p>
            <p>
              On the trail, that means encouragement when you need it, leaders
              who know how you&apos;re doing, and a pace that allows you to
              challenge yourself without feeling left behind.
            </p>
            <p>
              Back at the house, it means shared meals, easy conversation,
              plenty of laughter, and the kind of connection that happens
              naturally when a small group of women steps away from everyday
              life and experiences something meaningful together.
            </p>
          </div>

          <p className="retreat__closing">
            Come for the trails.{' '}
            <span className="retreat__closing-accent">
              Leave with far more than miles behind you.
            </span>
          </p>
        </div>

        <div className="retreat__media">
          <img
            className="retreat__image"
            src="/images/retreat_hike_photo1.avif"
            alt="Women hiking together on a THRIVE retreat"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}

export default TheRetreat
