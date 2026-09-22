import { useEffect, useState } from 'react'
import { CONTACT_MAILTO, RESERVE_MAILTO } from '../contactEmail'
import './Hero.css'

const HERO_IMAGE = '/images/hero-image.avif'

const navLinks = [
  { href: '#the-retreat', label: 'The Retreat' },
  { href: '#itinerary', label: 'Itinerary' },
  { href: '#accommodations', label: 'Accommodations' },
  { href: '#faq', label: 'FAQ' },
]

const features = [
  {
    title: '5 Days / 4 Nights',
    subtitle: 'March 18 – 22, 2027',
    color: 'pink',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 10h18M8 3v4M16 3v4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="8" cy="14" r="1" fill="currentColor" />
        <circle cx="12" cy="14" r="1" fill="currentColor" />
        <circle cx="16" cy="14" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Tucson, Arizona',
    subtitle: 'Sonoran Desert',
    color: 'olive',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M3 19L9.5 8l3.2 5.2L16 7l5 12H3z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Limited to 10 Women',
    subtitle: 'Intentionally Small',
    color: 'pink',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="8" cy="8" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="6.5" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="8" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M4.5 19c.4-3 2-4.8 3.5-4.8S11 16 11.2 19M8.8 19c.4-3.2 2.1-5.2 3.2-5.2s2.8 2 3.2 5.2M12.8 19c.4-3 2-4.8 3.5-4.8S19.5 16 20 19"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Guided Hiking',
    subtitle: 'Iconic Trails',
    color: 'olive',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M8 4h5l2 5-3 1 2 9H9l1.5-6H8L8 4z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M7 21h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Luxury Retreat Home',
    subtitle: 'Private En-Suite Baths',
    color: 'pink',
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
]

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <section id="hero" className="hero" aria-label="Hero">
      <div className="hero__stage">
        <div className="hero__background" aria-hidden="true">
          <img className="hero__background-image" src={HERO_IMAGE} alt="" />
        </div>

        <header className="hero__header">
          <nav
            id="hero-primary-nav"
            className={['hero__nav', menuOpen ? 'hero__nav--open' : '']
              .filter(Boolean)
              .join(' ')}
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a className="hero__header-cta" href={CONTACT_MAILTO}>
            Questions? Let&apos;s Chat
          </a>

          <button
            type="button"
            className="hero__menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="hero-primary-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="hero__menu-toggle-bars" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </header>

        <div className="hero__content">
          <div className="hero__intro">
            <p className="hero__eyebrow">Thrive Women</p>
            <h1 className="hero__title">Tucson Hiking Retreat</h1>
            <p className="hero__script">
              Discover
              <span className="hero__script-dot" aria-hidden="true" />
              Connect
              <span className="hero__script-dot" aria-hidden="true" />
              Thrive
            </p>
          </div>

          <div className="hero__body">
            <p className="hero__meta">
              March 18–22, 2027 &nbsp;|&nbsp; Tucson,{' '}
              <span className="hero__meta-state hero__meta-state--full">
                Arizona
              </span>
              <span className="hero__meta-state hero__meta-state--short">AZ</span>
            </p>
            <p className="hero__description">
              Five unforgettable days of hiking, strength, restoration and
              connection — created exclusively for women 40+.
            </p>
          <a className="hero__cta" href={RESERVE_MAILTO}>
            Reserve Your Room <span aria-hidden="true">→</span>
          </a>
            <p className="hero__details">
              Limited to 10 Women <span aria-hidden="true">•</span> Luxury
              Accommodations <span aria-hidden="true">•</span> All Meals{' '}
              <span aria-hidden="true">•</span> Guided Adventures
            </p>
          </div>
        </div>

        <p className="hero__side-script">
          Explore &amp; Restore
          <span className="hero__heart" aria-hidden="true">
            ♥
          </span>
        </p>

        <a className="hero__scroll" href="#the-retreat" aria-label="Scroll to The Retreat">
          <span aria-hidden="true">⌄</span>
        </a>
      </div>

      <ul className="hero__features">
        {features.map((feature) => (
          <li key={feature.title} className={`hero__feature hero__feature--${feature.color}`}>
            <span className="hero__feature-icon">{feature.icon}</span>
            <div>
              <p className="hero__feature-title">{feature.title}</p>
              <p className="hero__feature-subtitle">{feature.subtitle}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Hero
