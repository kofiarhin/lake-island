import React, { useEffect, useMemo, useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import heroPoster from './assets/hero.png'
import heroVideo from '../brand_assets/hero_bg.mp4'
import './header-overrides.css'

const stats = [
  { value: '18+', label: 'years crafting bespoke kitchens' },
  { value: '240', label: 'tailored projects delivered' },
  { value: '6 weeks', label: 'from brief to concept presentation' },
]

const highlights = [
  {
    num: '01',
    title: 'Architectural Design',
    copy: 'Clean-lined layouts, refined proportions and confident detailing designed around the way you live.',
  },
  {
    num: '02',
    title: 'Material Curation',
    copy: 'Natural stone, warm timbers and tactile metals selected to feel quietly luxurious from every angle.',
  },
  {
    num: '03',
    title: 'White-Glove Delivery',
    copy: 'A tightly managed journey from first sketch to final installation, with craftsmanship at the centre.',
  },
]

const collections = [
  {
    name: 'The Peninsula',
    tone: 'Smoked oak cabinetry, veined stone and seamless integrated storage.',
    accent: 'rgba(208, 167, 106, 0.36)',
    tag: 'Signature',
  },
  {
    name: 'The Atelier',
    tone: 'Soft matte finishes, sculpted islands and warm metallic detailing.',
    accent: 'rgba(132, 172, 187, 0.3)',
    tag: 'Modern',
  },
  {
    name: 'The Residence',
    tone: 'Statement entertaining spaces with gallery-like restraint and depth.',
    accent: 'rgba(134, 122, 176, 0.28)',
    tag: 'Bespoke',
  },
]

const process = [
  {
    step: '01',
    title: 'Listen & define',
    copy: 'We shape the brief around your architecture, habits and ambition for the space.',
  },
  {
    step: '02',
    title: 'Design & refine',
    copy: 'Layouts, materials and details are resolved into a concept that feels calm, bold and personal.',
  },
  {
    step: '03',
    title: 'Craft & install',
    copy: 'Our makers and installers deliver a polished result with meticulous attention to finish.',
  },
]

const EASE = [0.22, 1, 0.36, 1]
const VIEWPORT = { once: true, amount: 0.18 }

function useReveal(rm, options = {}) {
  const { x = 0, y = 30 } = options
  return useMemo(
    () => ({
      hidden: { opacity: 1, x: 0, y: 0 },
      show: (delay = 0) =>
        rm
          ? { opacity: 1 }
          : {
              opacity: 1,
              x: 0,
              y: 0,
              transition: { duration: 0.92, delay, ease: EASE },
            },
    }),
    [rm, x, y],
  )
}

function useStagger(rm, delayChildren = 0.06, staggerChildren = 0.1) {
  return useMemo(
    () => ({
      hidden: {},
      show: {
        transition: rm
          ? { delayChildren: 0, staggerChildren: 0 }
          : { delayChildren, staggerChildren },
      },
    }),
    [rm, delayChildren, staggerChildren],
  )
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="li-icon" fill="none">
      <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default function App() {
  useEffect(() => {
    const header = document.querySelector(
      "header, nav, [class*='header'], [class*='Header'], [class*='navbar'], [class*='Navbar']",
    )
    if (!header) return undefined
    header.setAttribute('data-ui-header', 'true')
    const sync = () => {
      if (window.scrollY > 12) header.setAttribute('data-scrolled', 'true')
      else header.removeAttribute('data-scrolled')
    }
    sync()
    window.addEventListener('scroll', sync, { passive: true })
    return () => {
      window.removeEventListener('scroll', sync)
      header.removeAttribute('data-ui-header')
      header.removeAttribute('data-scrolled')
    }
  }, [])

  const rm = useReducedMotion()
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })

  const videoY = useTransform(scrollYProgress, [0, 1], rm ? [0, 0] : [0, 80])
  const videoScale = useTransform(scrollYProgress, [0, 1], rm ? [1, 1] : [1.04, 1.12])
  const copyY = useTransform(scrollYProgress, [0, 1], rm ? [0, 0] : [0, -28])

  const stagger = useStagger(rm, 0.2, 0.1)
  const staggerFast = useStagger(rm, 0.06, 0.08)
  const fadeUp = useReveal(rm)
  const fadeUpSoft = useReveal(rm, { y: 20 })

  const btnHover = rm ? undefined : { y: -3, scale: 1.01, transition: { duration: 0.26, ease: EASE } }
  const cardHover = rm ? undefined : { y: -7, transition: { duration: 0.3, ease: EASE } }

  return (
    <div className="li-shell">
      <div className="li-glow li-glow-gold" aria-hidden="true" />
      <div className="li-glow li-glow-blue" aria-hidden="true" />

      {/* ── Header ── */}
      <motion.header
        className="li-header"
      >
        <div className="li-container li-header-inner">
          <a className="li-brand" href="#home" aria-label="Lake Island home">
            <span className="li-brand-mark">LI</span>
            <span className="li-brand-name">
              <strong>Lake Island</strong>
              <small>Bespoke Kitchens &amp; Interiors</small>
            </span>
          </a>

          <nav className="li-nav" aria-label="Primary navigation">
            {[
              ['Collections', '#collections'],
              ['Process', '#process'],
              ['Studio', '#journal'],
              ['Contact', '#contact'],
            ].map(([label, href]) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </nav>

          <motion.a
            className="li-button li-button-ghost"
            href="#contact"
            whileHover={btnHover}
            whileTap={rm ? undefined : { scale: 0.99 }}
          >
            Book Consultation
          </motion.a>
        </div>
      </motion.header>

      <main>
        {/* ── Hero ── */}
        <section className="li-hero" id="home" ref={heroRef}>
          <motion.div className="li-hero-bg" aria-hidden="true" style={{ y: videoY, scale: videoScale }}>
            <video
              className="li-hero-video"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster={heroPoster}
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
            <div className="li-hero-scrim" />
          </motion.div>

          <motion.div className="li-container li-hero-content" style={{ y: copyY }}>
            <motion.div variants={stagger} initial="hidden" animate="show">
              <motion.span className="li-eyebrow" variants={fadeUp} custom={0.1}>
                Luxury kitchen design, distilled
              </motion.span>
              <motion.h1 variants={fadeUp} custom={0.22}>
                Create a home that feels architectural, effortless and unmistakably yours.
              </motion.h1>
              <motion.p className="li-hero-lead" variants={fadeUpSoft} custom={0.36}>
                Lake Island designs premium kitchens and living spaces with a modern, gallery-like
                calm — tailored around materials, light and beautifully considered function.
              </motion.p>
              <motion.div className="li-hero-actions" variants={fadeUpSoft} custom={0.48}>
                <motion.a
                  className="li-button li-button-solid"
                  href="#collections"
                  whileHover={btnHover}
                  whileTap={rm ? undefined : { scale: 0.99 }}
                >
                  Explore Signature Spaces
                  <ArrowIcon />
                </motion.a>
                <motion.a
                  className="li-button li-button-ghost-light"
                  href="#process"
                  whileHover={btnHover}
                  whileTap={rm ? undefined : { scale: 0.99 }}
                >
                  View Our Process
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Stats strip */}
          <motion.div className="li-hero-stats">
            <div className="li-container li-stats-inner">
              {stats.map((s, i) => (
                <React.Fragment key={s.label}>
                  <div className="li-stat">
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                  {i < stats.length - 1 && <div className="li-stat-rule" aria-hidden="true" />}
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Why Lake Island ── */}
        <section className="li-section">
          <div className="li-container">
            <div className="li-highlights-grid">
              <motion.div
                className="li-highlights-intro"
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT}
              >
                <motion.span className="li-eyebrow" variants={fadeUp}>
                  Why Lake Island
                </motion.span>
                <motion.h2 variants={fadeUpSoft}>
                  Quiet luxury, built into every detail.
                </motion.h2>
                <motion.p variants={fadeUpSoft}>
                  Our approach balances strong architectural thinking with the warmth and ease of a
                  truly lived-in home.
                </motion.p>
              </motion.div>

              <motion.ol
                className="li-highlights-list"
                variants={staggerFast}
                initial="hidden"
                whileInView="show"
                viewport={VIEWPORT}
              >
                {highlights.map((h) => (
                  <motion.li key={h.title} className="li-highlight-item" variants={fadeUpSoft}>
                    <span className="li-hl-num" aria-hidden="true">
                      {h.num}
                    </span>
                    <div className="li-hl-body">
                      <h3>{h.title}</h3>
                      <p>{h.copy}</p>
                    </div>
                  </motion.li>
                ))}
              </motion.ol>
            </div>
          </div>
        </section>

        {/* ── Collections ── */}
        <section className="li-section li-section-border" id="collections">
          <div className="li-container">
            <motion.div
              className="li-section-head"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
            >
              <motion.span className="li-eyebrow" variants={fadeUp}>
                Signature Collections
              </motion.span>
              <motion.h2 variants={fadeUpSoft}>Three expressions of modern luxury.</motion.h2>
              <motion.p variants={fadeUpSoft}>
                Each concept is fully bespoke, but these curated directions show how we blend form,
                craftsmanship and atmosphere.
              </motion.p>
            </motion.div>

            <motion.div
              className="li-collections-grid"
              variants={staggerFast}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
            >
              {collections.map((c, i) => (
                <motion.article
                  key={c.name}
                  className="li-collection-card"
                  style={{ '--accent': c.accent }}
                  variants={fadeUpSoft}
                  custom={i * 0.08}
                  whileHover={cardHover}
                >
                  <div className="li-collection-art" />
                  <div className="li-collection-body">
                    <span className="li-card-tag">{c.tag}</span>
                    <h3>{c.name}</h3>
                    <p>{c.tone}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="li-section" id="process">
          <div className="li-container">
            <motion.div
              className="li-section-head"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
            >
              <motion.span className="li-eyebrow" variants={fadeUp}>
                Design Journey
              </motion.span>
              <motion.h2 variants={fadeUpSoft}>From first conversation to final reveal.</motion.h2>
              <motion.p variants={fadeUpSoft}>
                We keep the experience polished and personal, so every decision feels informed,
                elegant and easy.
              </motion.p>
            </motion.div>

            <motion.div
              className="li-process-grid"
              variants={staggerFast}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
            >
              {process.map((p) => (
                <motion.article key={p.step} className="li-process-item" variants={fadeUpSoft}>
                  <span className="li-process-num" aria-hidden="true">
                    {p.step}
                  </span>
                  <div className="li-process-body">
                    <h3>{p.title}</h3>
                    <p>{p.copy}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Studio / Testimonial ── */}
        <section className="li-section li-section-border" id="journal">
          <div className="li-container">
            <motion.div
              className="li-studio-grid"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
            >
              <motion.article className="li-studio-note" variants={fadeUpSoft} whileHover={cardHover}>
                <span className="li-eyebrow">Studio Note</span>
                <h2>Modern spaces should feel softer, not colder.</h2>
                <p>
                  Our palette leans into timber warmth, natural stone movement and restrained metal
                  accents to create rooms that feel elevated without feeling untouchable.
                </p>
              </motion.article>

              <motion.aside className="li-testimonial-card" variants={fadeUpSoft} whileHover={cardHover}>
                <span className="li-eyebrow">Client Perspective</span>
                <span className="li-quote-mark" aria-hidden="true">"</span>
                <blockquote>
                  Every line felt considered. The result is effortlessly functional and looks like a
                  private members' club in the best possible way.
                </blockquote>
                <p className="li-quote-cite">Private Client — Cheshire</p>
              </motion.aside>
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="li-section li-cta-section" id="contact">
          <div className="li-container">
            <motion.div
              className="li-cta"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
            >
              <motion.span className="li-eyebrow li-eyebrow-center" variants={fadeUp}>
                Start your project
              </motion.span>
              <motion.h2 variants={fadeUpSoft}>
                Ready for a kitchen that feels exceptional every day?
              </motion.h2>
              <motion.p variants={fadeUpSoft}>
                Share your plans and we'll shape a tailored concept around your home, timeline and
                design ambition.
              </motion.p>
              <motion.div className="li-cta-actions" variants={fadeUpSoft}>
                <motion.a
                  className="li-button li-button-solid"
                  href="mailto:hello@lakeisland.co.uk"
                  whileHover={btnHover}
                  whileTap={rm ? undefined : { scale: 0.99 }}
                >
                  hello@lakeisland.co.uk
                  <ArrowIcon />
                </motion.a>
                <motion.a
                  className="li-button li-button-ghost-light"
                  href="tel:+440000000000"
                  whileHover={btnHover}
                  whileTap={rm ? undefined : { scale: 0.99 }}
                >
                  Call the Studio
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <motion.footer className="li-footer">
        <div className="li-container li-footer-inner">
          <div className="li-footer-brand">
            <span className="li-brand-mark li-brand-mark-sm" aria-hidden="true">
              LI
            </span>
            <span>Lake Island — Bespoke kitchens and interiors with a refined modern point of view.</span>
          </div>
          <a href="#home" className="li-footer-top">
            Back to top ↑
          </a>
        </div>
      </motion.footer>
    </div>
  )
}
/* __CODEX_PROBE_SRC_APP__ */
