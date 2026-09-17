import { CONTACT_MAILTO } from '../contactEmail'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="contact__inner">
        <h2 id="contact-heading" className="contact__title">
          Have a Question?
        </h2>
        <div className="contact__accent" aria-hidden="true" />
        <p className="contact__copy">We&apos;d love to hear from you.</p>

        <a className="contact__link" href={CONTACT_MAILTO}>
          Email Us <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}

export default Contact
