function KidsBanner({ kidsImage }) {
  return (
    <section className="relative h-[242px] overflow-hidden">
      <img
        src={kidsImage}
        alt="Kids banner"
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0)_58%,rgba(0,0,0,0.24)_100%)]" />
      <button className="absolute bottom-[10px] left-1/2 h-5 min-w-12 -translate-x-1/2 rounded-[3px] bg-[#111111] px-4 text-[10px] text-white shadow-[0_2px_10px_rgba(0,0,0,0.28)]">
        Kids
      </button>
    </section>
  )
}

export default KidsBanner
