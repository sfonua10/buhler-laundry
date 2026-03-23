function setupStickyNav(): void {
  const nav = document.getElementById('nav')
  if (!nav) return

  let ticking = false
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        nav.classList.toggle('nav--scrolled', window.scrollY > 20)
        ticking = false
      })
      ticking = true
    }
  })
}

function setupSmoothScroll(): void {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href')
      if (!href || href === '#') return
      const target = document.querySelector(href)
      if (!target) return
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth' })
    })
  })
}

function setupActiveSection(): void {
  const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav__links a[href^="#"]')
  if (!navLinks.length) return

  const sections = Array.from(navLinks)
    .map((link) => {
      const href = link.getAttribute('href')
      return href ? document.querySelector<HTMLElement>(href) : null
    })
    .filter((s): s is HTMLElement => s !== null)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id')
          navLinks.forEach((link) => {
            link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`)
          })
        }
      })
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
  )

  sections.forEach((section) => observer.observe(section))
}

function setupMobileMenu(): void {
  const hamburgerEl = document.querySelector<HTMLButtonElement>('.nav__hamburger')
  const mobileMenuEl = document.getElementById('nav-mobile')
  if (!hamburgerEl || !mobileMenuEl) return

  const hamburger: HTMLButtonElement = hamburgerEl
  const mobileMenu: HTMLElement = mobileMenuEl

  function closeMenu(): void {
    hamburger.setAttribute('aria-expanded', 'false')
    hamburger.setAttribute('aria-label', 'Open navigation menu')
    mobileMenu.classList.remove('nav__mobile--open')
    document.body.style.overflow = ''
  }

  function openMenu(): void {
    hamburger.setAttribute('aria-expanded', 'true')
    hamburger.setAttribute('aria-label', 'Close navigation menu')
    mobileMenu.classList.add('nav__mobile--open')
    document.body.style.overflow = 'hidden'
  }

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true'
    isOpen ? closeMenu() : openMenu()
  })

  mobileMenu.querySelectorAll<HTMLAnchorElement>('a').forEach((link) => {
    link.addEventListener('click', closeMenu)
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && hamburger.getAttribute('aria-expanded') === 'true') {
      closeMenu()
      hamburger.focus()
    }
  })
}

export function initNavigation(): void {
  setupStickyNav()
  setupSmoothScroll()
  setupActiveSection()
  setupMobileMenu()
}
