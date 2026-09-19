import { CONTACT_EMAIL } from '../contactEmail'
import './BedroomsPricing.css'

/**
 * Swap `image` to a path under /images when bedroom photos are ready.
 * Example: image: '/images/bedroom-shared-queen.jpg'
 */
const rooms = [
  {
    id: 'shared-queen',
    image: '/images/bed_queen_shared.avif',
    imageAlt: 'Shared Queen Suite bedroom',
    tag: 'Most Popular for Solo Travelers',
    title: 'Shared Queen Suite',
    description:
      'A comfortable private queen room within a shared suite — perfect for solo travelers who want their own space while still enjoying the connection of the retreat.',
    details: [
      { label: 'Bed', value: 'Your own Queen' },
      { label: 'Bath', value: 'En-suite' },
      { label: 'Best for', value: 'Solo travelers' },
    ],
    availability: 'Only 4 spots',
    availabilityHighlight: true,
    price: '$2,995',
    featured: true,
  },
  {
    id: 'king-for-two',
    image: '/images/bed_king_shared.avif',
    imageAlt: 'King Suite for Two bedroom',
    tag: 'Traveling with a Friend?',
    title: 'King Suite for Two',
    description:
      'Share a spacious king room with a friend and enjoy the retreat experience together.',
    details: [
      { label: 'Bed', value: 'King shared with friend' },
      { label: 'Bath', value: 'En-suite' },
      { label: 'Best for', value: 'Friends' },
    ],
    availability: 'Limited',
    availabilityHighlight: true,
    price: '$3,195',
    priceFrom: true,
    featured: false,
  },
  {
    id: 'private-king',
    image: '/images/bed_king_private.avif',
    imageAlt: 'Private King Suite bedroom',
    tag: 'Most Private',
    title: 'Private King Suite',
    description:
      'Your own private king suite for the most spacious and private THRIVE retreat experience.',
    details: [
      { label: 'Bed', value: 'Private King' },
      { label: 'Bath', value: 'En-suite' },
      { label: 'Best for', value: 'Maximum privacy' },
    ],
    availability: 'Limited',
    availabilityHighlight: true,
    price: '$4,495',
    priceFrom: true,
    featured: false,
    upgrade: {
      title: 'Premier Primary Suite Upgrade',
      lines: [
        'Our largest King suite features an expansive private bathroom and additional space',
        '+$200/person when shared.',
        '+$400 when private',
      ],
    },
  },
]

function roomMailto(roomTitle) {
  const subject = encodeURIComponent(
    `Thrive Women Retreat - Room Selection: ${roomTitle}`,
  )
  return `mailto:${CONTACT_EMAIL}?subject=${subject}`
}

function BedroomsPricing() {
  return (
    <section
      id="bedrooms-pricing"
      className="pricing"
      aria-labelledby="pricing-heading"
    >
      <div className="pricing__inner">
        <header className="pricing__header">
          <h2 id="pricing-heading" className="pricing__title">
            Choose Your Retreat Stay
          </h2>
          <p className="pricing__subhead">
            Three beautiful ways to experience THRIVE. Choose the room that best
            fits how you want to retreat.
          </p>
          <div className="pricing__accent" aria-hidden="true" />
        </header>

        <div className="pricing__grid">
          {rooms.map((room) => (
            <article
              key={room.id}
              className={[
                'pricing__card',
                room.featured ? 'pricing__card--featured' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <div className="pricing__media">
                {room.image ? (
                  <img
                    className="pricing__image"
                    src={room.image}
                    alt={room.imageAlt}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="pricing__placeholder" aria-hidden="true">
                    <span>Bedroom Image</span>
                  </div>
                )}
                <span className="pricing__tag">{room.tag}</span>
              </div>

              <div className="pricing__body">
                <h3 className="pricing__room-title">{room.title}</h3>
                <p className="pricing__description">{room.description}</p>

                <ul className="pricing__details">
                  {room.details.map((detail) => (
                    <li key={detail.label}>
                      <span className="pricing__detail-label">{detail.label}</span>
                      <span className="pricing__detail-value">{detail.value}</span>
                    </li>
                  ))}
                </ul>

                <p
                  className={[
                    'pricing__availability',
                    room.availabilityHighlight
                      ? 'pricing__availability--notice'
                      : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  Availability: {room.availability}
                </p>

                <div
                  className={[
                    'pricing__upgrade',
                    room.upgrade ? '' : 'pricing__upgrade--spacer',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  aria-hidden={room.upgrade ? undefined : true}
                >
                  {room.upgrade ? (
                    <>
                      <p className="pricing__upgrade-title">
                        {room.upgrade.title}
                      </p>
                      {room.upgrade.lines.map((line) => (
                        <p key={line} className="pricing__upgrade-line">
                          {line}
                        </p>
                      ))}
                    </>
                  ) : null}
                </div>

                <div className="pricing__footer">
                  <p className="pricing__price">
                    {room.priceFrom ? (
                      <span className="pricing__from">from</span>
                    ) : null}
                    <span className="pricing__amount">{room.price}</span>
                    <span className="pricing__per">per person</span>
                  </p>
                  <a className="pricing__select" href={roomMailto(room.title)}>
                    Reserve
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BedroomsPricing
