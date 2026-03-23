import { icon } from '../modules/icons.ts'

export function renderSpecials(): string {
  return `
<section class="specials section-pad" id="specials" aria-labelledby="specials-heading">
  <div class="container">
    <div class="specials__inner" data-animate="fade-up">
      <div class="specials__icon" aria-hidden="true">
        ${icon('dryer')}
      </div>
      <div class="specials__content">
        <span class="specials__label">Weekly Special</span>
        <h2 id="specials-heading" class="specials__title">FREE Dryers!</h2>
        <p class="specials__days">Every Tuesday, Wednesday &amp; Thursday</p>
        <p class="specials__details">
          Wash with us on any of these three days and your dryers are on us.
          Three days a week to save money and get your laundry done!
        </p>
      </div>
      <div class="specials__badge" role="img" aria-label="3 free dryer days per week">
        <span>3 Days<br>a Week!</span>
      </div>
    </div>
  </div>
</section>
`
}
