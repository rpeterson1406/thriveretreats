import { useState } from 'react'
import './FAQ.css'

/**
 * FAQ content — replace placeholder answers with final Tucson retreat details.
 * Keep answers short and accurate; do not invent policies or logistics.
 */
const faqItems = [
  {
    question: 'Who is this retreat designed for?',
    answer:
      'This retreat is designed for women 40+ who want hiking, strength, restoration, and connection in a small, supportive group. Exact fitness guidelines will be confirmed in the final retreat details.',
  },
  {
    question: 'How difficult are the hikes?',
    answer:
      "Be prepared to hike up to 8 miles. Groups usually break into different paces so you don't have to be fast, but you do need to be able to do the distance.",
  },
  {
    question: 'Do I need to be an experienced hiker?',
    answer:
      'No prior expedition experience is required. A baseline comfort with outdoor walking and a willingness to move at a group-friendly pace is helpful. Final readiness guidance will be shared before the retreat.',
  },
  {
    question: 'What is included in the retreat?',
    answer:
      'The retreat includes lodging at the private estate, meals during the retreat dates, guided hiking and fitness programming, and small-group connection. A complete inclusions list will be confirmed in the final package details.',
  },
  {
    question: 'What is not included?',
    answer:
      'Airfare, travel insurance, personal gear, and Uber for airport transportation outside of our private THRIVE shuttle. The final retreat details will clearly list what is not included.',
  },
  {
    question: 'What should I pack?',
    answer:
      'Upon registration we will provide a full packing list. Know that you will need to have your own hydration system with at least 1.5L water bladder and hiking poles. We will have some poles on hand to lend out and can also provide links for some of our favorite lightweight options.',
  },
  {
    question: 'How do accommodations work?',
    answer:
      'Guests stay together at a private luxury estate with five bedrooms and en-suite baths. Room assignments and shared-space details will be confirmed closer to the retreat dates.',
  },
  {
    question: 'Can I attend by myself?',
    answer:
      'Yes. Many women attend on their own. The intentionally small group is designed to help you feel welcomed and connected from the first evening. We will happily pair you with another fabulous THRIVE woman. When filling out the registration form, there will be a question asking if you have a roommate already or would like us to match you.',
  },
  {
    question: 'How do I get to the retreat?',
    answer:
      "Tucson International Airport. It's conveniently located 35 minutes away. Complimentary airport transportation is provided for guests arriving and departing during our designated retreat travel windows. If your flight schedule falls outside those times, ride-share services such as Uber and Lyft are readily available and can be arranged at your own expense for approximately $60. Please do not book any airfare or travel arrangements until your trip details are confirmed. We will provide further information and assistance upon confirmation.",
  },
  {
    question: 'What is the cancellation policy?',
    answer:
      'A 50% deposit is required upon registration. The remainder of the deposit is due 60 days prior to the retreat. You can cancel for a full refund up until 90 days prior to the retreat.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleItem = (index) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section id="faq" className="faq" aria-labelledby="faq-heading">
      <div className="faq__inner">
        <header className="faq__header">
          <p className="faq__label">FAQ</p>
          <h2 id="faq-heading" className="faq__title">
            Questions? We&apos;ve Got You.
          </h2>
          <div className="faq__accent" aria-hidden="true" />
        </header>

        <div className="faq__list">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`

            return (
              <div
                key={item.question}
                className={`faq__item${isOpen ? ' is-open' : ''}`}
              >
                <h3 className="faq__question">
                  <button
                    id={buttonId}
                    type="button"
                    className="faq__trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(index)}
                  >
                    <span className="faq__question-text">{item.question}</span>
                    <span className="faq__icon" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="faq__panel"
                >
                  <div className="faq__panel-inner">
                    <p className="faq__answer">{item.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
