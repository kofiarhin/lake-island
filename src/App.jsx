import React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import heroPoster from "./assets/hero.png";
import heroVideo from "../brand_assets/hero_bg.mp4";

const MotionDiv = motion.div;
const MotionHeader = motion.header;
const MotionAnchor = motion.a;
const MotionSpan = motion.span;
const MotionHeading = motion.h1;
const MotionParagraph = motion.p;
const MotionArticle = motion.article;
const MotionAside = motion.aside;
const MotionFooter = motion.footer;

const stats = [
  { value: "18+", label: "years crafting bespoke kitchens" },
  { value: "240", label: "tailored projects delivered" },
  { value: "6 weeks", label: "from brief to concept presentation" },
];

const highlights = [
  {
    title: "Architectural Design",
    copy:
      "Clean-lined layouts, refined proportions and confident detailing designed around the way you live.",
  },
  {
    title: "Material Curation",
    copy:
      "Natural stone, warm timbers and tactile metals selected to feel quietly luxurious from every angle.",
  },
  {
    title: "White-Glove Delivery",
    copy:
      "A tightly managed journey from first sketch to final installation, with craftsmanship at the centre.",
  },
];

const collections = [
  {
    name: "The Peninsula",
    tone: "Smoked oak cabinetry, veined stone and seamless integrated storage.",
    accent: "rgba(208, 167, 106, 0.32)",
  },
  {
    name: "The Atelier",
    tone: "Soft matte finishes, sculpted islands and warm metallic detailing.",
    accent: "rgba(132, 172, 187, 0.28)",
  },
  {
    name: "The Residence",
    tone: "Statement entertaining spaces with gallery-like restraint and depth.",
    accent: "rgba(134, 122, 176, 0.26)",
  },
];

const process = [
  {
    step: "01",
    title: "Listen & define",
    copy: "We shape the brief around your architecture, habits and ambition for the space.",
  },
  {
    step: "02",
    title: "Design & refine",
    copy: "Layouts, materials and details are resolved into a concept that feels calm, bold and personal.",
  },
  {
    step: "03",
    title: "Craft & install",
    copy: "Our makers and installers deliver a polished result with meticulous attention to finish.",
  },
];

const EASE = [0.22, 1, 0.36, 1];
const SECTION_VIEWPORT = { once: true, amount: 0.22 };

function createReveal(shouldReduceMotion, options = {}) {
  const { x = 0, y = 28, scale = 1 } = options;

  return {
    hidden: shouldReduceMotion ? { opacity: 1, x: 0, y: 0, scale: 1 } : { opacity: 0, x, y, scale },
    show: (delay = 0) =>
      shouldReduceMotion
        ? { opacity: 1, x: 0, y: 0, scale: 1 }
        : {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.9,
              delay,
              ease: EASE,
            },
          },
  };
}

function createStagger(shouldReduceMotion, delayChildren = 0.08, staggerChildren = 0.12) {
  return {
    hidden: {},
    show: {
      transition: shouldReduceMotion
        ? { delayChildren: 0, staggerChildren: 0 }
        : { delayChildren, staggerChildren },
    },
  };
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="li-button-icon"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 12H19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M13 6L19 12L13 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

import { useEffect } from 'react'
import './header-overrides.css'

export default function App() {
  useEffect(() => {
    const header = document.querySelector(
      "header, nav, [class*='header'], [class*='Header'], [class*='navbar'], [class*='Navbar']"
    )

    if (!header) {
      return undefined
    }

    header.setAttribute('data-ui-header', 'true')

    const syncHeaderState = () => {
      if (window.scrollY > 12) {
        header.setAttribute('data-scrolled', 'true')
      } else {
        header.removeAttribute('data-scrolled')
      }
    }

    syncHeaderState()
    window.addEventListener('scroll', syncHeaderState, { passive: true })

    return () => {
      window.removeEventListener('scroll', syncHeaderState)
      header.removeAttribute('data-ui-header')
      header.removeAttribute('data-scrolled')
    }
  }, [])

  const shouldReduceMotion = useReducedMotion();
  const heroRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroMediaY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 96]);
  const heroMediaScale = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [1, 1] : [1.02, 1.1],
  );
  const heroCopyY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, -24]);
  const heroVisualY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, -42],
  );

  const heroStagger = React.useMemo(() => createStagger(shouldReduceMotion, 0.18, 0.12), [shouldReduceMotion]);
  const listStagger = React.useMemo(() => createStagger(shouldReduceMotion), [shouldReduceMotion]);
  const fadeUp = React.useMemo(() => createReveal(shouldReduceMotion), [shouldReduceMotion]);
  const fadeUpSoft = React.useMemo(
    () => createReveal(shouldReduceMotion, { y: 20, scale: 0.985 }),
    [shouldReduceMotion],
  );
  const fadeLeft = React.useMemo(
    () => createReveal(shouldReduceMotion, { x: -30, y: 0, scale: 0.985 }),
    [shouldReduceMotion],
  );
  const fadeRight = React.useMemo(
    () => createReveal(shouldReduceMotion, { x: 30, y: 0, scale: 0.985 }),
    [shouldReduceMotion],
  );

  const buttonHover = shouldReduceMotion
    ? undefined
    : {
        y: -3,
        scale: 1.01,
        transition: { duration: 0.28, ease: EASE },
      };

  const cardHover = shouldReduceMotion
    ? undefined
    : {
        y: -10,
        scale: 1.012,
        transition: { duration: 0.32, ease: EASE },
      };

  return (
    <div className="li-page-shell">
      <MotionDiv
        className="li-page-glow li-page-glow-one"
        initial={shouldReduceMotion ? false : { opacity: 0, x: -40, y: -24 }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                opacity: [0.36, 0.52, 0.4],
                x: [-18, 14, -18],
                y: [-10, 20, -10],
              }
        }
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <MotionDiv
        className="li-page-glow li-page-glow-two"
        initial={shouldReduceMotion ? false : { opacity: 0, x: 32, y: 28 }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                opacity: [0.28, 0.46, 0.32],
                x: [12, -16, 12],
                y: [18, -12, 18],
              }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <MotionHeader
        className="li-topbar"
        initial={shouldReduceMotion ? false : { opacity: 0, y: -18 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <div className="li-container li-topbar-inner">
          <MotionAnchor
            className="li-brand"
            href="#home"
            aria-label="Lake Island home"
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            <span className="li-brand-mark">LI</span>
            <span className="li-brand-text">
              <strong>Lake Island</strong>
              <small>Bespoke Kitchens & Interiors</small>
            </span>
          </MotionAnchor>

          <nav className="li-nav" aria-label="Primary navigation">
            {[
              ["Collections", "#collections"],
              ["Process", "#process"],
              ["Studio", "#journal"],
              ["Contact", "#contact"],
            ].map(([label, href], index) => (
              <MotionAnchor
                key={label}
                href={href}
                initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 * index, ease: EASE }}
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
              >
                {label}
              </MotionAnchor>
            ))}
          </nav>

          <MotionAnchor
            className="li-button li-button-ghost"
            href="#contact"
            whileHover={buttonHover}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
          >
            Book Consultation
          </MotionAnchor>
        </div>
      </MotionHeader>

      <main>
        <section className="li-hero" id="home" ref={heroRef}>
          <MotionDiv className="li-hero-media" aria-hidden="true" style={{ y: heroMediaY, scale: heroMediaScale }}>
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
            <div className="li-hero-overlay" />
          </MotionDiv>

          <div className="li-container li-hero-grid">
            <MotionDiv
              className="li-hero-copy"
              style={{ y: heroCopyY }}
              variants={heroStagger}
              initial="hidden"
              animate="show"
            >
              <MotionSpan className="li-eyebrow" variants={fadeUp} custom={0.08}>
                Luxury kitchen design, distilled
              </MotionSpan>
              <MotionHeading variants={fadeUp} custom={0.18}>
                Create a home that feels architectural, effortless and unmistakably yours.
              </MotionHeading>
              <MotionParagraph className="li-hero-text" variants={fadeUpSoft} custom={0.3}>
                Lake Island designs premium kitchens and living spaces with a modern, gallery-like
                calm — tailored around materials, light and beautifully considered function.
              </MotionParagraph>

              <MotionDiv className="li-hero-actions" variants={fadeUpSoft} custom={0.42}>
                <MotionAnchor
                  className="li-button li-button-solid"
                  href="#collections"
                  whileHover={buttonHover}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
                >
                  Explore Signature Spaces
                  <ArrowIcon />
                </MotionAnchor>
                <MotionAnchor
                  className="li-button li-button-secondary"
                  href="#process"
                  whileHover={buttonHover}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
                >
                  View Our Process
                </MotionAnchor>
              </MotionDiv>

              <MotionDiv className="li-stat-grid" variants={listStagger} custom={0.54}>
                {stats.map((item, index) => (
                  <MotionArticle
                    className="li-stat-card"
                    key={item.label}
                    variants={fadeUpSoft}
                    custom={0.52 + index * 0.08}
                    whileHover={cardHover}
                  >
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </MotionArticle>
                ))}
              </MotionDiv>
            </MotionDiv>

            <MotionDiv
              className="li-hero-visual"
              aria-hidden="true"
              style={{ y: heroVisualY }}
              variants={fadeRight}
              initial="hidden"
              animate="show"
              custom={0.22}
            >
              <MotionDiv
                className="li-showcase-frame"
                animate={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: [0, -10, 0],
                        rotateZ: [0, -0.35, 0],
                      }
                }
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              >
                <MotionDiv
                  className="li-showcase-panel li-showcase-panel-main"
                  variants={fadeUpSoft}
                  initial="hidden"
                  animate="show"
                  custom={0.5}
                >
                  <span>Featured Space</span>
                  <strong>Minimalist Entertaining Kitchen</strong>
                  <p>Bronze accents, monolithic stone and hidden prep zones.</p>
                </MotionDiv>
                <MotionDiv
                  className="li-showcase-panel li-showcase-panel-floating"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 16, x: 18 }}
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          opacity: 1,
                          y: [0, -12, 0],
                          x: 0,
                        }
                  }
                  transition={{
                    opacity: { duration: 0.8, delay: 0.62, ease: EASE },
                    y: { duration: 7.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
                    x: { duration: 0.8, delay: 0.62, ease: EASE },
                  }}
                >
                  <small>Now booking</small>
                  <strong>Autumn consultations</strong>
                </MotionDiv>
                <MotionDiv
                  className="li-showcase-orb li-showcase-orb-one"
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: [1, 1.14, 1],
                          opacity: [0.8, 1, 0.84],
                        }
                  }
                  transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <MotionDiv
                  className="li-showcase-orb li-showcase-orb-two"
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          scale: [1, 1.08, 1],
                          opacity: [0.76, 0.98, 0.8],
                        }
                  }
                  transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                />
              </MotionDiv>
            </MotionDiv>
          </div>
        </section>

        <section className="li-section">
          <div className="li-container">
            <MotionDiv
              className="li-section-heading"
              variants={listStagger}
              initial="hidden"
              whileInView="show"
              viewport={SECTION_VIEWPORT}
            >
              <MotionSpan className="li-eyebrow" variants={fadeUp}>
                Why Lake Island
              </MotionSpan>
              <motion.h2 variants={fadeUpSoft}>Quiet luxury, built into every detail.</motion.h2>
              <MotionParagraph variants={fadeUpSoft}>
                Our approach balances strong architectural thinking with the warmth and ease of a
                truly lived-in home.
              </MotionParagraph>
            </MotionDiv>

            <MotionDiv
              className="li-card-grid li-card-grid-three"
              variants={listStagger}
              initial="hidden"
              whileInView="show"
              viewport={SECTION_VIEWPORT}
            >
              {highlights.map((item, index) => (
                <MotionArticle
                  className="li-feature-card"
                  key={item.title}
                  variants={fadeUpSoft}
                  custom={index * 0.08}
                  whileHover={cardHover}
                >
                  <span className="li-card-kicker">Premium Service</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </MotionArticle>
              ))}
            </MotionDiv>
          </div>
        </section>

        <section className="li-section li-section-contrast" id="collections">
          <div className="li-container">
            <MotionDiv
              className="li-section-heading li-section-heading-wide"
              variants={listStagger}
              initial="hidden"
              whileInView="show"
              viewport={SECTION_VIEWPORT}
            >
              <MotionSpan className="li-eyebrow" variants={fadeUp}>
                Signature Collections
              </MotionSpan>
              <motion.h2 variants={fadeUpSoft}>Three expressions of modern luxury.</motion.h2>
              <MotionParagraph variants={fadeUpSoft}>
                Each concept is fully bespoke, but these curated directions show how we blend form,
                craftsmanship and atmosphere.
              </MotionParagraph>
            </MotionDiv>

            <MotionDiv
              className="li-card-grid li-card-grid-three"
              variants={listStagger}
              initial="hidden"
              whileInView="show"
              viewport={SECTION_VIEWPORT}
            >
              {collections.map((item, index) => (
                <MotionArticle
                  className="li-collection-card"
                  key={item.name}
                  style={{ "--li-card-accent": item.accent }}
                  variants={fadeUpSoft}
                  custom={index * 0.1}
                  whileHover={cardHover}
                >
                  <MotionDiv
                    className="li-collection-media"
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : {
                            scale: [1, 1.035, 1],
                      }
                    }
                    transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                  />
                  <div className="li-collection-content">
                    <span className="li-card-kicker">Curated concept</span>
                    <h3>{item.name}</h3>
                    <p>{item.tone}</p>
                  </div>
                </MotionArticle>
              ))}
            </MotionDiv>
          </div>
        </section>

        <section className="li-section" id="process">
          <div className="li-container li-process-layout">
            <MotionDiv
              className="li-section-heading li-process-heading"
              variants={listStagger}
              initial="hidden"
              whileInView="show"
              viewport={SECTION_VIEWPORT}
            >
              <MotionSpan className="li-eyebrow" variants={fadeUp}>
                Design Journey
              </MotionSpan>
              <motion.h2 variants={fadeLeft}>From first conversation to final reveal.</motion.h2>
              <MotionParagraph variants={fadeLeft}>
                We keep the experience polished and personal, so every decision feels informed,
                elegant and easy.
              </MotionParagraph>
            </MotionDiv>

            <MotionDiv
              className="li-process-list"
              variants={listStagger}
              initial="hidden"
              whileInView="show"
              viewport={SECTION_VIEWPORT}
            >
              {process.map((item, index) => (
                <MotionArticle
                  className="li-process-card"
                  key={item.step}
                  variants={index % 2 === 0 ? fadeRight : fadeLeft}
                  custom={index * 0.08}
                  whileHover={cardHover}
                >
                  <span className="li-process-step">{item.step}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </MotionArticle>
              ))}
            </MotionDiv>
          </div>
        </section>

        <section className="li-section li-section-contrast" id="journal">
          <div className="li-container li-story-grid">
            <MotionArticle
              className="li-story-card li-story-card-large"
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={SECTION_VIEWPORT}
              whileHover={cardHover}
            >
              <span className="li-card-kicker">Studio Note</span>
              <h2>Modern spaces should feel softer, not colder.</h2>
              <p>
                Our palette leans into timber warmth, natural stone movement and restrained metal
                accents to create rooms that feel elevated without feeling untouchable.
              </p>
            </MotionArticle>

            <MotionAside
              className="li-story-card li-quote-card"
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={SECTION_VIEWPORT}
              whileHover={cardHover}
            >
              <span className="li-card-kicker">Client Perspective</span>
              <blockquote>
                “Every line felt considered. The result is effortlessly functional and looks like a
                private members’ club in the best possible way.”
              </blockquote>
              <p>Private Client — Cheshire</p>
            </MotionAside>
          </div>
        </section>

        <section className="li-section li-cta-section" id="contact">
          <div className="li-container">
            <MotionDiv
              className="li-cta-panel"
              variants={listStagger}
              initial="hidden"
              whileInView="show"
              viewport={SECTION_VIEWPORT}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -6,
                      transition: { duration: 0.35, ease: EASE },
                    }
              }
            >
              <MotionDiv variants={fadeLeft}>
                <span className="li-eyebrow">Start your project</span>
                <h2>Ready for a kitchen that feels exceptional every day?</h2>
                <p>
                  Share your plans and we’ll shape a tailored concept around your home, timeline and
                  design ambition.
                </p>
              </MotionDiv>

              <MotionDiv className="li-cta-actions" variants={fadeRight}>
                <MotionAnchor
                  className="li-button li-button-solid"
                  href="mailto:hello@lakeisland.co.uk"
                  whileHover={buttonHover}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
                >
                  hello@lakeisland.co.uk
                  <ArrowIcon />
                </MotionAnchor>
                <MotionAnchor
                  className="li-button li-button-secondary"
                  href="tel:+440000000000"
                  whileHover={buttonHover}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
                >
                  Call the Studio
                </MotionAnchor>
              </MotionDiv>
            </MotionDiv>
          </div>
        </section>
      </main>

      <MotionFooter
        className="li-footer"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        <div className="li-container li-footer-inner">
          <p>Lake Island — Bespoke kitchens and interiors with a refined modern point of view.</p>
          <MotionAnchor href="#home" whileHover={shouldReduceMotion ? undefined : { y: -2 }}>
            Back to top
          </MotionAnchor>
        </div>
      </MotionFooter>
    </div>
  );
}
