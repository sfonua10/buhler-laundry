import { icon } from '../modules/icons.ts'

export function renderFooter(): string {
  return `
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer__top">
      <div>
        <span class="footer__logo">Buhler's Laundry</span>
        <p class="footer__tagline">
          Keeping American Fork clean since 1965.<br>
          Open 7 days a week, 8:00 AM – 9:30 PM.
        </p>
        <div class="footer__social" aria-label="Social media links">
          <a
            href="https://www.facebook.com/p/Buhlers-Laundry-100092407711661/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Buhler's Laundry on Facebook (opens in new tab)"
          >
            ${icon('facebook')}
          </a>
        </div>
      </div>
      <div>
        <p class="footer__col-title">Quick Links</p>
        <nav class="footer__links" aria-label="Footer navigation">
          <a href="#services">Services</a>
          <a href="#specials">Weekly Specials</a>
          <a href="#amenities">Amenities</a>
          <a href="#about">About Us</a>
          <a href="#location">Location &amp; Hours</a>
        </nav>
      </div>
      <div>
        <p class="footer__col-title">Contact</p>
        <address>
          <p class="footer__contact-item">
            347 E State St<br>
            American Fork, UT 84003
          </p>
          <p class="footer__contact-item">
            <a href="tel:+18017562441" aria-label="Call us at 801-756-2441">(801) 756-2441</a>
          </p>
          <p class="footer__contact-item">
            Open daily 8:00 AM – 9:30 PM
          </p>
        </address>
      </div>
    </div>
    <div class="footer__bottom">
      <p>&copy; 2026 Buhler's Laundry. All rights reserved.</p>
    </div>
  </div>
</footer>
`
}
