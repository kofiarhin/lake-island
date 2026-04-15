function GalleryFilterBar({ filters, activeFilter, onChange }) {
  return (
    <div className="li-gallery-filter-bar" role="toolbar" aria-label="Filter gallery items">
      {filters.map((filter) => {
        const active = filter === activeFilter

        return (
          <button
            key={filter}
            type="button"
            className={`li-gallery-filter${active ? ' is-active' : ''}`}
            onClick={() => onChange(filter)}
            aria-pressed={active}
          >
            {filter}
          </button>
        )
      })}
    </div>
  )
}

export default GalleryFilterBar
