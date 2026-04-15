import { Link, NavLink } from 'react-router-dom'

const primaryLinks = [
  { label: 'Home', to: '/' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Collections', to: '/#collections' },
  { label: 'Process', to: '/#process' },
  { label: 'Contact', to: '/#contact' },
]

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
  return (
    <header className="li-header">
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

        <Link className="li-button li-button-ghost" to="/#contact">
          Book Consultation
        </Link>
      </div>
    </header>
  )
}

export default SiteHeader
