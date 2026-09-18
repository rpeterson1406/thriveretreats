import './Leaders.css'

const SHARED_PHOTO = '/images/two_leaders_pic.jpeg?v=2'

/**
 * Bios and credentials summarized ONLY from the previous Leaders section content.
 * Shannon credentials selected:
 * - Leading women's fitness retreats since 2017
 * - BS in Exercise Science
 * - Menopause Fitness Specialist
 * - 3x Ironman World Championship Finisher
 *
 * Melissa credentials selected:
 * - Expert Desert Hiking Guide
 * - Outdoor Adventure Specialist
 * - 2x Ironman Finisher
 * - 3x 100K Run Finisher
 */
const leaders = [
  {
    name: 'Shannon',
    role: 'Founder, THRIVE Women Fitness',
    bio: 'Shannon created THRIVE Women Fitness and has been leading women\'s fitness retreats since 2017. With more than 30 years coaching women, her focus is optimizing health for women 40+ through exercise, nutrition, hormonal health, and mindset. An accomplished hiker—including Grand Canyon Rim-to-Rim, the Enchantments, and Havasupai—she shares the benefits of moving in nature\'s gym and the spiritual reset of getting off the grid.',
    credentials: [
      'Leading women\'s fitness retreats since 2017',
      'BS in Exercise Science',
      'Menopause Fitness Specialist',
      '3x Ironman World Championship Finisher',
    ],
  },
  {
    name: 'Melissa',
    role: 'Retreat Co-Leader',
    bio: 'Melissa brings endurance athletics and desert outdoor expertise to the retreat as co-leader. A two-time Ironman finisher and three-time 100K run finisher, she is also an expert desert hiking guide and outdoor adventure specialist. After a career in tech, she is following her passions for fitness, food, wine, travel, and the meaningful connections that form when people experience adventure together—and looks forward to sharing that with retreat guests.',
    credentials: [
      'Expert Desert Hiking Guide',
      'Outdoor Adventure Specialist',
      '2x Ironman Finisher',
      '3x 100K Run Finisher',
    ],
  },
]

function Leaders() {
  return (
    <section id="leaders" className="leaders" aria-labelledby="leaders-heading">
      <div className="leaders__inner">
        <header className="leaders__header">
          <p className="leaders__label">Your Guides</p>
          <h2 id="leaders-heading" className="leaders__title">
            Meet Your Retreat Leaders
          </h2>
          <div className="leaders__accent" aria-hidden="true" />
        </header>

        <div className="leaders__layout">
          <div className="leaders__media">
            <img
              className="leaders__shared-photo"
              src={SHARED_PHOTO}
              alt="Shannon and Melissa, THRIVE Women Fitness retreat leaders"
            />
          </div>

          <div className="leaders__content">
            {leaders.map((leader, index) => (
              <article
                key={leader.name}
                className={`leaders__person${index > 0 ? ' leaders__person--divided' : ''}`}
              >
                <h3 className="leaders__name">{leader.name}</h3>
                <p className="leaders__role">{leader.role}</p>
                <p className="leaders__bio">{leader.bio}</p>
                <ul className="leaders__credentials">
                  {leader.credentials.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Leaders
