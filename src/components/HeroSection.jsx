function HeroSection({ heroImage, heroVideo }) {
  return (
    <section className="relative isolate h-[258px] overflow-hidden bg-black">
      {heroVideo ? (
        <video
          className="h-full w-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={heroImage}
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      ) : (
        <img
          src={heroImage}
          alt="Hero banner"
          className="h-full w-full object-cover object-[center_center]"
        />
      )}

      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.16)_42%,rgba(0,0,0,0.58)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent" />

      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute left-[95px] top-[6px] text-[78px] leading-[0.88] font-black uppercase tracking-[-0.05em] text-[#E8F300] drop-shadow-[0_4px_14px_rgba(0,0,0,0.65)]">
          HORI-
        </div>
        <div className="absolute right-[18px] top-[48px] text-[78px] leading-[0.88] font-black uppercase tracking-[-0.05em] text-[#E8F300] drop-shadow-[0_4px_14px_rgba(0,0,0,0.65)]">
          ZON
        </div>
        <div className="absolute bottom-[18px] right-[16px] text-[78px] leading-[0.88] font-black uppercase tracking-[-0.05em] text-[#E8F300] drop-shadow-[0_4px_14px_rgba(0,0,0,0.65)]">
          HEAT
        </div>
      </div>

      <button className="absolute bottom-[18px] left-[145px] z-10 h-5 rounded-[2px] border border-white/10 bg-black/70 px-2 text-[9px] text-white shadow-[0_8px_18px_rgba(0,0,0,0.35)] backdrop-blur-[3px]">
        Womens New Arrivals
      </button>
    </section>
  )
}

export default HeroSection
