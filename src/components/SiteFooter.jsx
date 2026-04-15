import { Link } from 'react-router-dom'

function SiteFooter() {
  return (
    <footer className="li-footer">
      <div className="li-container li-footer-inner">
        <div className="li-footer-brand">
          <span className="li-brand-mark li-brand-mark-sm" aria-hidden="true">
            LI
          </span>
          <span>Lake Island — Bespoke kitchens and interiors with a refined modern point of view.</span>
        </div>
        <Link to="/" className="li-footer-top">
          Back to top ↑
        </Link>
      </div>
    </footer>
  )
}

export default SiteFooter
