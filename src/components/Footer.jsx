import './Footer.css'

const footerLinks = [
  { href: '#the-retreat', label: 'The Retreat' },
  { href: '#itinerary', label: 'Itinerary' },
  { href: '#accommodations', label: 'Accommodations' },
  { href: '#faq', label: 'FAQ' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <a className="site-footer__logo" href="#hero">
            <span className="site-footer__logo-thrive">Thrive</span>
            <span className="site-footer__logo-sub">Women Fitness</span>
          </a>

          <p className="site-footer__tagline">
            <span>Stronger</span>
            <span>Happier</span>
            <span>Brighter</span>
            <span>Together</span>
          </p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            © 2027 THRIVE Women Fitness
          </p>

          <a
            className="site-footer__external"
            href="https://www.thrivewomenfitness.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Thrive Women Fitness
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
