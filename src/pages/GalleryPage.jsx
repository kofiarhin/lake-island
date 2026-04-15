import { useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import GalleryFilterBar from '../components/GalleryFilterBar'
import GalleryGrid from '../components/GalleryGrid'
import GalleryLightbox from '../components/GalleryLightbox'
import { galleryFilters, galleryItems, galleryMetrics } from '../data/galleryContent'

void motion

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M4.25 10h11.5M10.75 4.75 16 10l-5.25 5.25"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function GalleryPage() {
  const reducedMotion = useReducedMotion()
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedItem, setSelectedItem] = useState(null)

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') return galleryItems
    return galleryItems.filter((item) => item.category === activeFilter)
  }, [activeFilter])

  const featuredItem = galleryItems[0]

  return (
    <main className="li-gallery-page">
      <section className="li-section li-gallery-hero">
        <div className="li-container li-gallery-hero-grid">
          <motion.div
            className="li-gallery-hero-copy"
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="li-eyebrow">Project gallery</span>
            <h1>Spaces shaped with calm, light and architectural detail.</h1>
            <p>
              Browse a curated edit of kitchens, islands and material moments designed to feel
              effortless in use and quietly luxurious in finish.
            </p>

            <div className="li-gallery-intro-actions">
              <a className="li-button li-button-solid" href="#gallery-grid">
                Explore the collection
                <ArrowIcon />
              </a>
              <Link className="li-button li-button-ghost-light" to="/#contact">
                Start your brief
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="li-gallery-hero-feature"
            initial={reducedMotion ? false : { opacity: 0, scale: 0.98 }}
            animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.82, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={featuredItem.image} alt={featuredItem.alt} className="li-gallery-hero-image" />
            <div className="li-gallery-hero-panel">
              <span className="li-gallery-badge">Featured space</span>
              <strong>{featuredItem.title}</strong>
              <p>{featuredItem.description}</p>
            </div>
          </motion.div>
        </div>

        <div className="li-container li-gallery-metrics">
          {galleryMetrics.map((metric) => (
            <div key={metric.label} className="li-gallery-metric">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="li-section li-section-border">
        <div className="li-container">
          <div className="li-gallery-section-head">
            <span className="li-eyebrow">Curated view</span>
            <h2>From sculpted islands to tactile material studies.</h2>
            <p>
              Filter the collection to focus on the spatial mood, functional centerpiece or crafted
              finish that best matches your brief.
            </p>
          </div>

          <GalleryFilterBar
            filters={galleryFilters}
            activeFilter={activeFilter}
            onChange={setActiveFilter}
          />

          <div id="gallery-grid">
            <GalleryGrid items={filteredItems} onSelect={setSelectedItem} />
          </div>
        </div>
      </section>

      <section className="li-section">
        <div className="li-container li-gallery-editorial">
          <div className="li-gallery-film-frame">
            <video
              className="li-gallery-film"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster={galleryItems[5].image}
            >
              <source src={galleryItems[5].src} type="video/mp4" />
            </video>
          </div>

          <div className="li-gallery-editorial-copy">
            <span className="li-eyebrow">Beyond the stills</span>
            <h2>See how texture, shadow and reflection animate the room.</h2>
            <p>
              The best spaces reveal themselves gradually. Our gallery pairs still imagery with
              motion studies so you can read each room as a lived-in environment, not just a styled
              snapshot.
            </p>
            <Link className="li-button li-button-solid" to="/#contact">
              Book a consultation
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <GalleryLightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
    </main>
  )
}

export default GalleryPage
