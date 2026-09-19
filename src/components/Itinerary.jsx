import './Itinerary.css'

/**
 * Tucson itinerary content — replace these placeholders with the final schedule.
 * Edit day titles and activities here; layout updates automatically.
 */
const itineraryIntro =
  'Five days of guided hiking, intentional fitness, restoration, memorable meals, and the kind of connection that only happens when a small group of women share the trail together.'

const itineraryDays = [
  {
    day: '01',
    title: 'Arrive + Connect',
    activities: [
      'Welcome reception and introductions',
      'Settle into luxury accommodations',
      'Light evening movement and orientation',
      'Shared dinner and retreat kickoff',
    ],
  },
  {
    day: '02',
    title: 'Hike + Strength',
    activities: [
      "Morning desert hike with guided coaching\nBlackett's Ridge Trail - 5 miles",
      'Midday strength session designed for women 40+',
      'Nourishing lunch and recovery time',
      'Evening circle and optional stretch',
    ],
  },
  {
    day: '03',
    title: 'Explore + Restore',
    activities: [
      'Scenic trail exploration at a steady pace\nSeven Falls - 7 miles',
      'Restorative practices and recovery focus',
      'Leisurely afternoon and spa-style downtime',
      'Chef-prepared dinner and open conversation',
    ],
  },
  {
    day: '04',
    title: 'Adventure + Celebrate',
    activities: [
      'Signature adventure hike of the week\nBridalveil Falls - 7 miles',
      'Strength + mobility finisher',
      'Celebration dinner with the group',
      'Reflection, wins, and connection',
    ],
  },
  {
    day: '05',
    title: 'Final Morning + Departure',
    activities: [
      'Sunrise movement or short closing hike',
      'Farewell breakfast together',
      'Checkout and departure',
    ],
  },
]

function Itinerary() {
  return (
    <section id="itinerary" className="itinerary" aria-labelledby="itinerary-heading">
      <div className="itinerary__inner">
        <header className="itinerary__header">
          <div className="itinerary__header-copy">
            <p className="itinerary__label">Itinerary</p>
            <h2 id="itinerary-heading" className="itinerary__title">
              Five Days of Adventure
            </h2>
            <div className="itinerary__accent" aria-hidden="true" />
            <p className="itinerary__intro">{itineraryIntro}</p>
          </div>

          <div className="itinerary__media">
            <img
              className="itinerary__image"
              src="/images/hike_explore_tucson.avif"
              alt="Women exploring Tucson desert trails on a THRIVE hike"
              loading="lazy"
              decoding="async"
            />
          </div>
        </header>

        <ol className="itinerary__timeline">
          {itineraryDays.map((item) => {
            const activitySlots = Array.from({ length: 4 }, (_, index) => item.activities[index] ?? null)

            return (
              <li key={item.day} className="itinerary__day">
                <div className="itinerary__day-marker" aria-hidden="true">
                  <span className="itinerary__day-number">{item.day}</span>
                </div>

                <div className="itinerary__day-content">
                  <p className="itinerary__day-label">Day {Number(item.day)}</p>
                  <h3 className="itinerary__day-title">{item.title}</h3>
                  <ul className="itinerary__activities">
                    {activitySlots.map((activity, index) => (
                      <li
                        key={activity ?? `${item.day}-slot-${index}`}
                        className={
                          activity
                            ? undefined
                            : 'itinerary__activities-item--empty'
                        }
                        aria-hidden={activity ? undefined : true}
                      >
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          })}
        </ol>

        <p className="itinerary__note">
          Note: Planned hikes may change due to weather and conditions
        </p>
      </div>
    </section>
  )
}

export default Itinerary
