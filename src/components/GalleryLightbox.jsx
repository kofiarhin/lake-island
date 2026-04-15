import { useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

void motion

function GalleryLightbox({ item, onClose }) {
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (!item) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [item, onClose])

  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          className="li-lightbox"
          onClick={onClose}
          role="presentation"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={reducedMotion ? undefined : { opacity: 1 }}
          exit={reducedMotion ? undefined : { opacity: 0 }}
        >
          <motion.div
            className="li-lightbox-panel"
            role="dialog"
            aria-modal="true"
            aria-label={item.title}
            onClick={(event) => event.stopPropagation()}
            initial={reducedMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              className="li-lightbox-close"
              onClick={onClose}
              aria-label="Close gallery item"
            >
              ×
            </button>

            <div className="li-lightbox-media-wrap">
              {item.type === 'video' ? (
                <video className="li-lightbox-media" controls autoPlay playsInline poster={item.image}>
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <img className="li-lightbox-media" src={item.image} alt={item.alt} />
              )}
            </div>

            <div className="li-lightbox-copy">
              <div className="li-lightbox-meta">
                <span className="li-gallery-badge">{item.category}</span>
                <span>{item.location}</span>
              </div>
              <h2>{item.title}</h2>
              <p>{item.longDescription}</p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default GalleryLightbox
