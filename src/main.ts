import './style.css'
import { renderNav } from './sections/nav.ts'
import { renderHero } from './sections/hero.ts'
import { renderServices } from './sections/services.ts'
import { renderSpecials } from './sections/specials.ts'
import { renderAmenities } from './sections/amenities.ts'
import { renderAbout } from './sections/about.ts'
import { renderLocation } from './sections/location.ts'
import { renderFooter } from './sections/footer.ts'
import { initNavigation } from './modules/navigation.ts'
import { initAnimations } from './modules/animations.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = [
  renderNav(),
  '<main>',
  renderHero(),
  renderServices(),
  renderSpecials(),
  renderAmenities(),
  renderAbout(),
  renderLocation(),
  '</main>',
  renderFooter(),
].join('')

initNavigation()
initAnimations()
