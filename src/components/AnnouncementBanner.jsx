import { useEffect, useState } from 'react'
import './AnnouncementBanner.css'

const AUTO_DISMISS_MS = 4000
const FADE_MS = 420

/** Survives React Strict Mode remount so the 4s clock isn't reset. */
let autoDismissStartedAt = 0

function AnnouncementBanner() {
  const [phase, setPhase] = useState('open')

  useEffect(() => {
    if (typeof AUTO_DISMISS_MS !== 'number' || AUTO_DISMISS_MS <= 0) return

    if (!autoDismissStartedAt) {
      autoDismissStartedAt = Date.now()
    }

    const wait = Math.max(0, AUTO_DISMISS_MS - (Date.now() - autoDismissStartedAt))
    const timerId = window.setTimeout(() => {
      setPhase((current) => (current === 'open' ? 'leaving' : current))
    }, wait)

    return () => window.clearTimeout(timerId)
  }, [])

  useEffect(() => {
    if (phase !== 'leaving') return
    const fadeId = window.setTimeout(() => setPhase('gone'), FADE_MS)
    return () => window.clearTimeout(fadeId)
  }, [phase])

  function dismiss() {
    setPhase((current) => (current === 'open' ? 'leaving' : current))
  }

  function handleExplore(event) {
    event.preventDefault()
    dismiss()
    const target = document.getElementById('the-retreat')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  if (phase === 'gone') return null

  return (
    <div
      className={['announce', phase === 'leaving' ? 'announce--leaving' : '']
        .filter(Boolean)
        .join(' ')}
      role="dialog"
      aria-modal="true"
      aria-labelledby="announce-heading"
      aria-describedby="announce-body"
    >
      <div
        className="announce__backdrop"
        aria-hidden="true"
        onClick={dismiss}
      />

      <div className="announce__panel">
        <button
          type="button"
          className="announce__close"
          onClick={dismiss}
          aria-label="Close announcement"
        >
          <span aria-hidden="true">×</span>
        </button>

        <h2 id="announce-heading" className="announce__headline">
          Our California Retreat Sold Out. Tucson Is Next.
        </h2>
        <div className="announce__accent" aria-hidden="true" />
        <p id="announce-body" className="announce__body">
          Our THRIVE California Desert Hiking Retreat filled every available spot. In March,
          we&apos;re bringing the THRIVE experience home to Tucson for an even
          more intimate adventure through one of the most spectacular hiking
          destinations in the Southwest.
        </p>
        <a className="announce__cta" href="#the-retreat" onClick={handleExplore}>
          Explore the Retreat
        </a>
      </div>
    </div>
  )
}

export default AnnouncementBanner
