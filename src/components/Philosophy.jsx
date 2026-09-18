import './Philosophy.css'

function Philosophy() {
  return (
    <section
      id="philosophy"
      className="philosophy"
      aria-labelledby="philosophy-heading"
    >
      <div className="philosophy__inner">
        <header className="philosophy__header">
          <p className="philosophy__label">Our Belief</p>
          <h2 id="philosophy-heading" className="philosophy__title">
            The THRIVE Philosophy
          </h2>
          <div className="philosophy__accent" aria-hidden="true" />
        </header>

        <p className="philosophy__intro">
          THRIVE was created for women who want more from this stage of life —
          more strength, more confidence, more adventure, and more experiences
          that make them feel fully alive.
        </p>
      </div>

      <div className="philosophy__manifesto">
        <div className="philosophy__manifesto-inner">
          <p className="philosophy__manifesto-lead">
            We don&apos;t become less capable with age.
          </p>
          <p className="philosophy__manifesto-support">
            We become more intentional about what we say{' '}
            <span className="philosophy__yes">yes</span> to.
          </p>
        </div>
      </div>

      <div className="philosophy__inner">
        <div className="philosophy__columns">
          <div className="philosophy__column">
            <p className="philosophy__eyebrow">The Experience</p>
            <p>
              You&apos;ll challenge yourself on the trail, nourish your body,
              recover intentionally, connect with like-minded women, laugh a
              lot, and step outside your normal routine long enough to reconnect
              with yourself.
            </p>
          </div>

          <div className="philosophy__column">
            <p className="philosophy__eyebrow">The Why</p>
            <p>
              This isn&apos;t about proving anything to anyone else. It&apos;s
              about discovering what you&apos;re capable of — and creating the
              strength, confidence, and mindset to keep doing the things you
              love while saying yes to new adventures along the way.
            </p>
          </div>
        </div>

        <div className="philosophy__closing">
          <p className="philosophy__closing-lead">
            You won&apos;t leave THRIVE simply having taken a trip.
          </p>
          <p className="philosophy__closing-emphasis">
            You&apos;ll leave reminded of{' '}
            <span className="philosophy__capable">
              just how capable you are
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

export default Philosophy
