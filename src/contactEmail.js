/**
 * Retreat contact email used by Reserve and Contact links.
 */
export const CONTACT_EMAIL = 'melissa@thunder-gulch.com'

export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`

export const RESERVE_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  'Thrive Women Retreat - Room Reservation',
)}`

export const ASK_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  'Hiking Retreat Question',
)}`
