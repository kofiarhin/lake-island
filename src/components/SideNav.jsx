import { useEffect, useRef } from 'react'
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'

const PANEL_ID = 'li-side-nav-panel'

function renderLink(link, onClose) {
  const sharedProps = {
    onClick: onClose,
    className: ({ isActive }) => (isActive ? 'li-side-nav-link active' : 'li-side-nav-link'),
  }

  if (link.to === '/' || link.to === '/gallery') {
    return (
      <NavLink key={link.label} to={link.to} end={link.to === '/'} {...sharedProps}>
        {link.label}
      </NavLink>
    )
  }

  return (
    <Link key={link.label} to={link.to} onClick={onClose} className="li-side-nav-link">
      {link.label}
    </Link>
  )
}

function SideNav({ isOpen, onClose, links, returnFocusRef }) {
  const panelRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return undefined

    const activeElement = document.activeElement
    const returnNode = returnFocusRef?.current
    const focusTarget = panelRef.current?.querySelector('button, a, [tabindex]:not([tabindex="-1"])')
    focusTarget?.focus()

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
      if (returnNode) {
        returnNode.focus()
      } else if (activeElement && typeof activeElement.focus === 'function') {
        activeElement.focus()
      }
    }
  }, [isOpen, returnFocusRef])

  useEffect(() => {
    if (!isOpen) return undefined

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen ? (
        <div className="li-side-nav" aria-hidden={!isOpen}>
          <motion.button
            type="button"
            className="li-side-nav-backdrop"
            aria-label="Close navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            onClick={onClose}
          />

          <motion.aside
            ref={panelRef}
            id={PANEL_ID}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="li-side-nav-panel"
            initial={{ x: '100%', opacity: 0.9 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0.9 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="li-side-nav-header">
              <Link className="li-brand" to="/" onClick={onClose} aria-label="Lake Island home">
                <span className="li-brand-mark li-brand-mark-sm">LI</span>
                <span className="li-brand-name">
                  <strong>Lake Island</strong>
                  <small>Bespoke Kitchens &amp; Interiors</small>
                </span>
              </Link>

              <button type="button" className="li-side-nav-close" onClick={onClose} aria-label="Close menu">
                <span aria-hidden="true">✕</span>
              </button>
            </div>

            <nav className="li-side-nav-links" aria-label="Drawer navigation">
              {links.map((link) => renderLink(link, onClose))}
            </nav>

            <Link className="li-button li-button-solid li-side-nav-cta" to="/#contact" onClick={onClose}>
              Book Consultation
            </Link>
          </motion.aside>
        </div>
      ) : null}
    </AnimatePresence>
  )
}

export default SideNav
export { PANEL_ID }
