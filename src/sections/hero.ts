export function renderHero(): string {
  const bubbles = [
    { size: 60, left: 10, bottom: 15, duration: 8, delay: 0 },
    { size: 30, left: 25, bottom: 30, duration: 6, delay: 2 },
    { size: 80, left: 70, bottom: 10, duration: 10, delay: 1 },
    { size: 45, left: 85, bottom: 25, duration: 7, delay: 4 },
    { size: 20, left: 50, bottom: 5, duration: 5, delay: 3 },
    { size: 55, left: 40, bottom: 40, duration: 9, delay: 1.5 },
  ]
    .map(
      (b) =>
        `<div class="hero__bubble" style="width:${b.size}px;height:${b.size}px;left:${b.left}%;bottom:${b.bottom}%;animation-duration:${b.duration}s;animation-delay:${b.delay}s" aria-hidden="true"></div>`,
    )
    .join('')

  return `
<section class="hero" id="hero" aria-labelledby="hero-heading">
  <div class="hero__bg-pattern" aria-hidden="true"></div>
  <div class="hero__bubbles" aria-hidden="true">${bubbles}</div>
  <div class="hero__container">
    <div class="hero__content">
      <div class="hero__badge" data-animate="fade-up">
        <span>&#9733;</span> Est. 1965 · American Fork, UT
      </div>
      <h1 id="hero-heading" class="hero__title" data-animate="fade-up" style="--delay: 0.1s">
        Keeping American Fork<br>
        <span class="hero__title-accent">Clean Since 1965</span>
      </h1>
      <p class="hero__subtitle" data-animate="fade-up" style="--delay: 0.2s">
        Utah County's trusted family laundromat for over 60 years.
        Modern machines, friendly staff, and a spotless space — open every day.
      </p>
      <div class="hero__actions" data-animate="fade-up" style="--delay: 0.3s">
        <a href="#services" class="btn btn--primary">See Our Services</a>
        <a href="#location" class="btn btn--outline">Find Us</a>
      </div>
    </div>
    <div class="hero__image-col" data-animate="fade-left" style="--delay: 0.15s">
      <img
        src="/images/exterior.jpg"
        alt="Exterior of Buhler's Laundry on State Street in American Fork, Utah"
        width="600"
        height="450"
        loading="eager"
      />
      <div class="hero__image-overlay" aria-hidden="true"></div>
      <div class="hero__image-tag">
        <span class="hero__image-tag-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        <span class="hero__image-tag-text">4.3 stars · 223 reviews</span>
      </div>
    </div>
  </div>
</section>
`
}
