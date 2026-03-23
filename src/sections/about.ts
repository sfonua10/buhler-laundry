export function renderAbout(): string {
  return `
<section class="about section-pad" id="about" aria-labelledby="about-heading">
  <div class="container">
    <div class="about__layout">
      <div class="about__badge-col" data-animate="fade-right">
        <div class="about__est-badge" role="img" aria-label="Established 1965">
          <div class="about__est-inner">
            <span class="about__est-label">Established</span>
            <span class="about__est-year">1965</span>
            <span class="about__est-sub">American Fork, UT</span>
          </div>
        </div>
      </div>
      <div class="about__content" data-animate="fade-left">
        <h2 id="about-heading" class="section-title" style="text-align:left;margin-bottom:0">
          A Family Tradition<br>of Clean
        </h2>
        <p class="about__text">
          Buhler's Laundry has been a cornerstone of the American Fork community
          since 1965. Founded by the Buhler family, our laundromat has served
          generations of local families, students, and neighbors — always with
          the same commitment to cleanliness, affordability, and friendly service.
        </p>
        <p class="about__text">
          From our original coin machines to today's modern commercial washers and
          dryers, we've always believed in giving you a spotless space, well-maintained
          equipment, and the help of attentive staff whenever you need it.
          We're proud to still be serving the community after six decades.
        </p>
        <div class="about__photos" aria-hidden="true">
          <img
            src="${import.meta.env.BASE_URL}images/machines.jpg"
            alt="Modern Dexter commercial washing machines at Buhler's Laundry"
            width="400"
            height="300"
            loading="lazy"
          />
          <img
            src="${import.meta.env.BASE_URL}images/interior.jpg"
            alt="Spacious interior of Buhler's Laundry with rows of washers and large windows"
            width="400"
            height="300"
            loading="lazy"
          />
        </div>
        <div class="about__stats" aria-label="Business highlights">
          <div class="about__stat">
            <span class="about__stat-number">60+</span>
            <span class="about__stat-label">Years Serving AF</span>
          </div>
          <div class="about__stat">
            <span class="about__stat-number">4.3</span>
            <span class="about__stat-label">Star Rating</span>
          </div>
          <div class="about__stat">
            <span class="about__stat-number">223</span>
            <span class="about__stat-label">Happy Reviews</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`
}
