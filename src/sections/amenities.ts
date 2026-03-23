import { icon } from '../modules/icons.ts'

interface Amenity {
  iconName: Parameters<typeof icon>[0]
  label: string
  delay: string
}

const amenities: Amenity[] = [
  { iconName: 'wifi', label: 'Free WiFi', delay: '0s' },
  { iconName: 'parking', label: 'Free Parking', delay: '0.05s' },
  { iconName: 'creditCard', label: 'Card Payments', delay: '0.1s' },
  { iconName: 'coins', label: 'Coin Changer', delay: '0.15s' },
  { iconName: 'attendant', label: 'Staff On-Site', delay: '0.2s' },
  { iconName: 'restroom', label: 'Clean Restrooms', delay: '0.25s' },
  { iconName: 'vending', label: 'Vending Machines', delay: '0.3s' },
  { iconName: 'wheelchair', label: 'Wheelchair Access', delay: '0.35s' },
]

export function renderAmenities(): string {
  const items = amenities
    .map(
      (a) => `
    <div class="amenities__item" data-animate="fade-up" style="--delay: ${a.delay}">
      <div class="amenities__item-icon" aria-hidden="true">
        ${icon(a.iconName)}
      </div>
      <span class="amenities__item-label">${a.label}</span>
    </div>`,
    )
    .join('')

  return `
<section class="amenities section-pad" id="amenities" aria-labelledby="amenities-heading">
  <div class="container">
    <div class="section-header">
      <h2 id="amenities-heading" class="section-title">Amenities</h2>
      <p class="section-subtitle">We've thought of everything to make laundry day as easy as possible</p>
    </div>
    <div class="amenities__grid">
      ${items}
    </div>
  </div>
</section>
`
}
