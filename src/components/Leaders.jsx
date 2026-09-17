import './Leaders.css'

/**
 * Leader photos:
 * - Shannon: /images/shannon_leader_pic.avif
 * - Melissa: /images/mel_leader_pic.avif
 */
const leaders = [
  {
    name: 'Shannon',
    image: {
      src: '/images/shannon_leader_pic.avif',
      alt: 'Shannon, THRIVE Women Fitness retreat leader',
      ready: true,
    },
    credentials: [
      'BS in Exercise Science',
      '30+ Years Coaching Women',
      'Menopause Fitness Specialist',
      '3x Ironman World Championship Finisher',
      'Creator of THRIVE Women Fitness',
      'Leading women\'s fitness retreats since 2017',
    ],
    bio: [
      'Shannon has completed epic hikes including Grand Canyon Rim-to-Rim, the Enchantments, and Havasupai. She now shares the benefits of physical activity in nature\'s gym and the spiritual reset of getting off the grid.',
      'Her mission is optimizing health for women 40+ by integrating exercise, nutrition, hormonal health, and mindset.',
    ],
  },
  {
    name: 'Melissa',
    image: {
      src: '/images/mel_leader_pic.avif',
      alt: 'Melissa, THRIVE Women Fitness retreat leader',
      ready: true,
    },
    credentials: [
      '3x 100K Run Finisher',
      '2x Ironman Finisher',
      'Expert Desert Hiking Guide',
      'Passionate women\'s health advocate',
      'Outdoor Adventure Specialist',
    ],
    bio: [
      'Mel spent her career in tech and is now shifting toward her real passions: fitness, food, wine, travel, and the meaningful connections made between people when experiencing them.',
      'She made the Coachella Valley her second home in 2020 and looks forward to sharing this amazing place with retreat guests.',
    ],
  },
]

function LeaderPhoto({ image, name }) {
  if (image.ready) {
    return (
      <div className="leaders__photo leaders__photo--filled">
        <img
          className="leaders__photo-img"
          src={image.src}
          alt={image.alt || name}
        />
      </div>
    )
  }

  return (
    <div
      className="leaders__photo"
      role="img"
      aria-label={`${image.hint} — coming soon`}
      data-image={image.src}
    >
      <span className="leaders__photo-label">{image.label}</span>
      <span className="leaders__photo-hint">{image.hint}</span>
    </div>
  )
}

function Leaders() {
  return (
    <section id="leaders" className="leaders" aria-labelledby="leaders-heading">
      <div className="leaders__inner">
        <header className="leaders__header">
          <p className="leaders__label">Your Guides</p>
          <h2 id="leaders-heading" className="leaders__title">
            Meet Your Leaders
          </h2>
          <div className="leaders__accent" aria-hidden="true" />
        </header>

        <div className="leaders__grid">
          {leaders.map((leader) => (
            <article key={leader.name} className="leaders__profile">
              <LeaderPhoto image={leader.image} name={leader.name} />

              <div className="leaders__content">
                <h3 className="leaders__name">{leader.name}</h3>

                <ul className="leaders__credentials">
                  {leader.credentials.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="leaders__divider" aria-hidden="true" />

                <div className="leaders__bio">
                  {leader.bio.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leaders
