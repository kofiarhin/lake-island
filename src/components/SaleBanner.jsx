function SaleBanner({ saleButtons }) {
  return (
    <section className="relative h-[239px] overflow-hidden bg-[linear-gradient(115deg,#ff0073_0%,#d50018_42%,#180006_100%)] px-4 pt-[84px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,0,90,0.7),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_28%,rgba(255,180,220,0.18),transparent_24%)]" />
      <div className="absolute inset-y-[-10%] right-[68px] w-[54px] rotate-[18deg] bg-black/28" />
      <div className="absolute inset-y-[-12%] right-[18px] w-[128px] rotate-[18deg] bg-black/36" />
      <div className="absolute inset-y-[-20%] left-[-50px] w-[80px] rotate-[18deg] bg-black/18" />
      <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(20,0,8,0.22)_100%)]" />

      <div className="relative z-10 pl-0 text-white">
        <div className="text-[14px] font-bold leading-4 uppercase tracking-[0.02em]">FURTHER REDUCTIONS</div>
        <div className="text-[14px] font-bold leading-4 uppercase tracking-[0.02em]">SALE UP TO</div>
        <div className="mt-1 text-[58px] font-extrabold leading-[56px] uppercase tracking-[-0.04em]">
          50% OFF
        </div>
      </div>

      <div className="absolute bottom-[30px] left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap">
        {saleButtons.map((label) => (
          <button
            key={label}
            className="h-[18px] rounded-[3px] bg-[#111111] px-[10px] text-[9px] text-white shadow-[0_2px_10px_rgba(0,0,0,0.18)]"
          >
            {label}
          </button>
        ))}
      </div>
    </section>
  )
}

export default SaleBanner
