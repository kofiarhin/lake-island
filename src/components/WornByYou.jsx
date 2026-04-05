function WornByYou({ galleryImages }) {
  return (
    <section className="bg-[#0d1116] px-[9px] pt-7">
      <h2 className="mb-3 text-[18px] text-white">Worn By You</h2>
      <p className="mb-3 text-[12px] text-white">#imwearingri</p>

      <div className="grid grid-cols-4 gap-[2px] overflow-hidden">
        {galleryImages.map((src, index) => (
          <div key={src} className="aspect-square overflow-hidden bg-white/5">
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default WornByYou
