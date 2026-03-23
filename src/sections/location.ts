import { icon } from '../modules/icons.ts'

export function renderLocation(): string {
  const hours = [
    ['Monday', '8:00 AM – 9:30 PM'],
    ['Tuesday', '8:00 AM – 9:30 PM'],
    ['Wednesday', '8:00 AM – 9:30 PM'],
    ['Thursday', '8:00 AM – 9:30 PM'],
    ['Friday', '8:00 AM – 9:30 PM'],
    ['Saturday', '8:00 AM – 9:30 PM'],
    ['Sunday', '8:00 AM – 9:30 PM'],
  ]
    .map(([day, time]) => `<tr><td>${day}</td><td>${time}</td></tr>`)
    .join('')

  return `
<section class="location section-pad" id="location" aria-labelledby="location-heading">
  <div class="container">
    <div class="section-header">
      <h2 id="location-heading" class="section-title">Visit Us</h2>
      <p class="section-subtitle">Conveniently located on State Street in American Fork</p>
    </div>
    <div class="location__layout">
      <div class="location__info" data-animate="fade-up">
        <div class="location__block">
          <h3 class="location__block-title">
            ${icon('clock')} Hours of Operation
          </h3>
          <table class="location__hours-table" aria-label="Business hours">
            <tbody>${hours}</tbody>
          </table>
        </div>
        <div class="location__block">
          <h3 class="location__block-title">
            ${icon('mapPin')} Address
          </h3>
          <address class="location__address">
            347 E State St<br>
            American Fork, UT 84003
          </address>
        </div>
        <div class="location__block">
          <h3 class="location__block-title">
            ${icon('phone')} Phone
          </h3>
          <a href="tel:+18017562441" class="location__phone" aria-label="Call us at 801-756-2441">
            (801) 756-2441
          </a>
        </div>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=347+E+State+St+American+Fork+UT+84003"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn--primary"
          aria-label="Get directions to Buhler's Laundry on Google Maps (opens in new tab)"
        >
          ${icon('directions')} Get Directions
        </a>
      </div>
      <div class="location__map" data-animate="fade-up" style="--delay: 0.15s">
        <iframe
          title="Buhler's Laundry location on Google Maps at 347 E State St, American Fork, UT 84003"
          src="https://maps.google.com/maps?q=347+E+State+St,+American+Fork,+UT+84003&output=embed&z=16"
          width="100%"
          height="440"
          style="border:0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</section>
`
}
