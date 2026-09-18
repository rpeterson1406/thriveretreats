import { useEffect, useRef, useState } from 'react'
import './AnnouncementBanner.css'

const AUTO_DISMISS_MS = 4000
const FADE_MS = 420

function AnnouncementBanner() {
  const [mounted, setMounted] = useState(true)
  const [leaving, setLeaving] = useState(false)
  const leavingRef = useRef(false)
  const timerRef = useRef(null)
  const fadeRef = useRef(null)

  useEffect(() => {
    if (typeof AUTO_DISMISS_MS === 'number' && AUTO_DISMISS_MS > 0) {
      timerRef.current = window.setTimeout(() => {
        dismiss()
      }, AUTO_DISMISS_MS)
    }

    return () => {
      window.clearTimeout(timerRef.current)
      window.clearTimeout(fadeRef.current)
    }
    // Mount-only auto-dismiss
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function dismiss() {
    if (leavingRef.current) return
    leavingRef.current = true
    window.clearTimeout(timerRef.current)
    setLeaving(true)
    fadeRef.current = window.setTimeout(() => setMounted(false), FADE_MS)
  }

  function handleExplore(event) {
    event.preventDefault()
    dismiss()
    const target = document.getElementById('the-retreat')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  if (!mounted) return null

  return (
    <div
      className={['announce', leaving ? 'announce--leaving' : '']
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
