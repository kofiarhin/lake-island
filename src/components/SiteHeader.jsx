import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import SideNav, { PANEL_ID } from './SideNav'
import { primaryLinks } from '../data/navigationLinks'

function renderLink(link) {
  if (link.to === '/' || link.to === '/gallery') {
    return (
      <NavLink
        key={link.label}
        to={link.to}
        className={({ isActive }) => (isActive ? 'active' : undefined)}
        end={link.to === '/'}
      >
        {link.label}
      </NavLink>
    )
  }

  return (
    <Link key={link.label} to={link.to}>
      {link.label}
    </Link>
  )
}

function SiteHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const triggerRef = useRef(null)

  const openNav = () => setIsNavOpen(true)
  const closeNav = () => setIsNavOpen(false)

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.matchMedia('(min-width: 1025px)').matches) {
        closeNav()
      }
    }

    closeOnDesktop()
    window.addEventListener('resize', closeOnDesktop)

    return () => {
      window.removeEventListener('resize', closeOnDesktop)
    }
  }, [])

  return (
    <header className="li-header" data-ui-header="true">
      <div className="li-container li-header-inner">
        <Link className="li-brand" to="/" aria-label="Lake Island home">
          <span className="li-brand-mark">LI</span>
          <span className="li-brand-name">
            <strong>Lake Island</strong>
            <small>Bespoke Kitchens &amp; Interiors</small>
          </span>
        </Link>

        <nav className="li-nav" aria-label="Primary navigation">
          {primaryLinks.map(renderLink)}
        </nav>

        <Link className="li-button li-button-ghost li-header-cta" to="/#contact">
          Book Consultation
        </Link>

        <button
          ref={triggerRef}
          type="button"
          className="li-nav-toggle"
          onClick={openNav}
          aria-expanded={isNavOpen}
          aria-controls={PANEL_ID}
          aria-label="Open navigation menu"
        >
          <span />
          <span />
          <span />
        </button>

        <SideNav isOpen={isNavOpen} onClose={closeNav} links={primaryLinks} returnFocusRef={triggerRef} />
      </div>
    </header>
  )
}

export default SiteHeader
