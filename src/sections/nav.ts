import { icon } from '../modules/icons.ts'

export function renderNav(): string {
  const logoIcon = `<svg class="nav__logo-icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">
    <circle cx="20" cy="20" r="18" stroke="currentColor" stroke-width="2"/>
    <circle cx="20" cy="20" r="12" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/>
    <circle cx="20" cy="20" r="6" fill="currentColor" opacity="0.15"/>
    <circle cx="20" cy="20" r="2.5" fill="currentColor"/>
    <circle cx="13" cy="12" r="1.5" fill="currentColor"/>
    <circle cx="20" cy="12" r="1.5" fill="currentColor"/>
    <circle cx="27" cy="12" r="1.5" fill="currentColor"/>
  </svg>`

  return `
<header class="nav" id="nav" role="banner">
  <div class="nav__container">
    <a href="#" class="nav__logo" aria-label="Buhler's Laundry – back to top">
      ${logoIcon}
      <span class="nav__logo-text">Buhler's<br>Laundry</span>
    </a>
    <nav class="nav__links" role="navigation" aria-label="Main navigation">
      <ul>
        <li><a href="#services">Services</a></li>
        <li><a href="#specials">Specials</a></li>
        <li><a href="#amenities">Amenities</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#location">Location</a></li>
      </ul>
    </nav>
    <a href="tel:+18017562441" class="btn btn--primary nav__cta" aria-label="Call us at 801-756-2441">
      ${icon('phone')} (801) 756-2441
    </a>
    <button class="nav__hamburger" aria-label="Open navigation menu" aria-expanded="false" aria-controls="nav-mobile">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</header>
<div class="nav__mobile" id="nav-mobile" role="dialog" aria-label="Navigation menu">
  <a href="#services">Services</a>
  <a href="#specials">Specials</a>
  <a href="#amenities">Amenities</a>
  <a href="#about">About</a>
  <a href="#location">Location</a>
  <a href="tel:+18017562441" class="btn btn--primary nav__mobile-cta" aria-label="Call us at 801-756-2441">
    ${icon('phone')} (801) 756-2441
  </a>
</div>
`
}
