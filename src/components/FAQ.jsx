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
      '[PLACEHOLDER] Hiking difficulty, distances, and elevation details for the Tucson trails will be provided in the final itinerary.',
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
      '[PLACEHOLDER] Items not included — such as airfare, ground transportation, personal gear, or optional extras — will be listed clearly in the final retreat details.',
  },
  {
    question: 'What should I pack?',
    answer:
      '[PLACEHOLDER] A recommended packing list (hiking footwear, layers, sun protection, and personal items) will be shared with registered guests before the retreat.',
  },
  {
    question: 'How do accommodations work?',
    answer:
      'Guests stay together at a private luxury estate with five bedrooms and en-suite baths. Room assignments and shared-space details will be confirmed closer to the retreat dates.',
  },
  {
    question: 'Can I attend by myself?',
    answer:
      'Yes. Many women attend on their own. The intentionally small group is designed to help you feel welcomed and connected from the first evening.',
  },
  {
    question: 'How do I get to the retreat?',
    answer:
      '[PLACEHOLDER] Arrival airport, transfer options, and recommended travel timing for the Tucson property will be provided in the final logistics guide.',
  },
  {
    question: 'What is the cancellation policy?',
    answer:
      '[PLACEHOLDER] The official cancellation and refund policy will be published with final registration details. No specific terms are listed here yet.',
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
