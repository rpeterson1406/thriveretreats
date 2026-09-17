import './Leaders.css'

/**
 * Leader photos — replace these files in /public/images/ when ready:
 * - leader-shannon.jpg
 * - leader-melissa.jpg
 */
const leaders = [
  {
    name: 'Shannon',
    image: {
      src: '/images/leader-shannon.jpg',
      label: 'leader-shannon.jpg',
      hint: 'Photo of Shannon',
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
      src: '/images/leader-melissa.jpg',
      label: 'leader-melissa.jpg',
      hint: 'Photo of Melissa',
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

function LeaderPhoto({ image }) {
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
              {/* Replace with the file named in leader.image.src */}
              <LeaderPhoto image={leader.image} />

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
