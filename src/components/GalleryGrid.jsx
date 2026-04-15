function GalleryGrid({ items, onSelect }) {
  return (
    <div className="li-gallery-grid">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`li-gallery-card li-gallery-card--${item.layout}${item.type === 'video' ? ' li-gallery-card--motion' : ''}`}
          onClick={() => onSelect(item)}
          aria-label={`Open ${item.title}`}
        >
          <div className="li-gallery-media-wrap">
            <img className="li-gallery-media" src={item.image} alt={item.alt} loading="lazy" />
            <div className="li-gallery-media-scrim" aria-hidden="true" />
          </div>

          <div className="li-gallery-card-copy">
            <div className="li-gallery-card-topline">
              <span className="li-gallery-badge">{item.category}</span>
              <span className="li-gallery-location">{item.location}</span>
            </div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <span className="li-gallery-open">
              {item.type === 'video' ? 'Play feature' : 'View details'}
            </span>
          </div>
        </button>
      ))}
    </div>
  )
}

export default GalleryGrid
