import { RESERVE_MAILTO } from '../contactEmail'
import './FinalCTA.css'

function FinalCTA() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-heading">
      <div className="final-cta__inner">
        <p className="final-cta__label">Ready for Your Next Adventure?</p>
        <h2 id="final-cta-heading" className="final-cta__title">
          Tucson Is Calling.
        </h2>
        <div className="final-cta__accent" aria-hidden="true" />
        <p className="final-cta__copy">
          Five unforgettable days of hiking, strength, restoration and connection
          in the Sonoran Desert.
        </p>

        <ul className="final-cta__meta">
          <li>March 18–22, 2027</li>
          <li>Tucson, Arizona</li>
          <li>Only 7–10 Women</li>
        </ul>

        <a className="final-cta__button" href={RESERVE_MAILTO}>
          Reserve Your Room <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}

export default FinalCTA
