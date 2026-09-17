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
            <p>
              This is an intimate women&apos;s hiking and fitness retreat created
              exclusively for women 40+. Over five days and four nights, you&apos;ll
              move through guided outdoor adventures, thoughtful strength work,
              and restorative downtime designed to help you feel strong, steady,
              and deeply connected.
            </p>
            <p>
              With only 7–10 women in the group, every moment feels personal.
              Expect luxurious accommodations, nourishing meals included, and a
              pace that balances challenge with room to breathe — so you can
              return home clearer, brighter, and more yourself.
            </p>
            <p>
              Come for the trails. Stay for the sisterhood. Leave with a
              renewed sense of what&apos;s possible when hiking, strength,
              restoration, and connection share the same week.
            </p>
          </div>
        </div>

        <div className="retreat__media">
          {/*
            IMAGE PLACEHOLDER — replace with a real retreat photograph.
            Suggested file: /public/images/retreat-intro.jpg
          */}
          <div
            className="retreat__image-placeholder"
            role="img"
            aria-label="Retreat photo coming soon"
          >
            <span className="retreat__image-label">Retreat Photo</span>
            <span className="retreat__image-hint">
              Replace this placeholder with the retreat image
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TheRetreat
