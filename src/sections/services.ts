import { icon } from '../modules/icons.ts'

interface ServiceCard {
  iconName: Parameters<typeof icon>[0]
  title: string
  desc: string
  features: string[]
  delay: string
}

const cards: ServiceCard[] = [
  {
    iconName: 'washingMachine',
    title: 'Self-Service Laundry',
    desc: 'High-efficiency commercial washers and dryers that clean better and dry faster than home machines. Coin and card payment accepted.',
    features: [
      'Multiple machine sizes from standard to mega-load',
      'Handles comforters, bedding & sleeping bags',
      'Coin-operated or card payment',
      'Clean, spacious, well-maintained facility',
    ],
    delay: '0s',
  },
  {
    iconName: 'foldedClothes',
    title: 'Wash & Fold',
    desc: 'Drop off your laundry and let us handle it. We wash, dry, and fold your clothes with care — ready when you are.',
    features: [
      'Professional wash and fold service',
      'Careful handling of all fabrics',
      'Pick up fresh, neatly folded laundry',
      'Perfect for busy schedules',
    ],
    delay: '0.1s',
  },
  {
    iconName: 'dropOff',
    title: 'Drop-Off Service',
    desc: "Leave it with us. Our friendly staff take care of your laundry so you don't have to wait around.",
    features: [
      'Convenient drop-off and pick-up',
      'Staff attendants always on site',
      'Flexible for your schedule',
      'No waiting required',
    ],
    delay: '0.2s',
  },
]

export function renderServices(): string {
  const cardHtml = cards
    .map(
      (c) => `
    <article class="services__card" data-animate="fade-up" style="--delay: ${c.delay}">
      <div class="services__card-icon" aria-hidden="true">
        ${icon(c.iconName)}
      </div>
      <h3 class="services__card-title">${c.title}</h3>
      <p class="services__card-desc">${c.desc}</p>
      <ul class="services__card-features" aria-label="${c.title} features">
        ${c.features.map((f) => `<li>${f}</li>`).join('')}
      </ul>
    </article>`,
    )
    .join('')

  return `
<section class="services section-pad" id="services" aria-labelledby="services-heading">
  <div class="container">
    <div class="section-header">
      <h2 id="services-heading" class="section-title">Our Services</h2>
      <p class="section-subtitle">Everything you need to get your laundry done right, under one roof</p>
    </div>
    <div class="services__grid">
      ${cardHtml}
    </div>
  </div>
</section>
`
}
