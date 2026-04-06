import Reveal from './Reveal'

function WornByYou({ galleryImages }) {
  return (
    <section className="bg-[#0d1116] px-[9px] pt-7">
      <Reveal variant="fade-up" duration={500}>
        <h2 className="mb-3 text-[18px] text-white">Worn By You</h2>
        <p className="mb-3 text-[12px] text-white">#imwearingri</p>
      </Reveal>

      <div className="grid grid-cols-4 gap-[2px] overflow-hidden">
        {galleryImages.map((src, index) => (
          <Reveal key={src} variant="fade-up" delay={index * 60} duration={500} threshold={0.08}>
            <div className="aspect-square overflow-hidden bg-white/5">
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default WornByYou
