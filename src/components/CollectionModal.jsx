import { useEffect, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

void motion

const EASE = [0.22, 1, 0.36, 1]

function CollectionModal({ item, onClose }) {
  const reducedMotion = useReducedMotion()
  const closeButtonRef = useRef(null)
  const lastActiveElementRef = useRef(null)

  useEffect(() => {
    if (!item) return undefined

    lastActiveElementRef.current = document.activeElement

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    requestAnimationFrame(() => {
      closeButtonRef.current?.focus()
    })

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
      if (lastActiveElementRef.current instanceof HTMLElement) {
        lastActiveElementRef.current.focus()
      }
    }
  }, [item, onClose])

  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          className="li-collection-modal"
          onClick={onClose}
          role="presentation"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={reducedMotion ? undefined : { opacity: 1 }}
          exit={reducedMotion ? undefined : { opacity: 0 }}
        >
          <motion.section
            className="li-collection-modal-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`collection-modal-title-${item.id}`}
            onClick={(event) => event.stopPropagation()}
            initial={reducedMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
            animate={reducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: 14, scale: 0.98 }}
            transition={{ duration: 0.24, ease: EASE }}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="li-lightbox-close"
              onClick={onClose}
              aria-label={`Close ${item.name} details`}
            >
              ×
            </button>

            <div className="li-collection-modal-media">
              <img src={item.image} alt={item.name} className="li-lightbox-media" loading="lazy" />
            </div>

            <div className="li-collection-modal-copy">
              {item.tag ? <span className="li-card-tag">{item.tag}</span> : null}
              <h2 id={`collection-modal-title-${item.id}`}>{item.name}</h2>
              {item.longDescription ? <p>{item.longDescription}</p> : null}

              {item.features?.length ? (
                <div className="li-modal-list-block">
                  <h3>Features</h3>
                  <ul>
                    {item.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {item.materials?.length ? (
                <div className="li-modal-list-block">
                  <h3>Materials</h3>
                  <ul>
                    {item.materials.map((material) => (
                      <li key={material}>{material}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {item.idealFor ? (
                <div className="li-modal-ideal-for">
                  <h3>Ideal For</h3>
                  <p>{item.idealFor}</p>
                </div>
              ) : null}

              {item.ctaHref ? (
                <a className="li-button li-button-solid li-modal-cta" href={item.ctaHref} onClick={onClose}>
                  Enquire about this collection
                </a>
              ) : null}
            </div>
          </motion.section>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default CollectionModal
