import { FiGlobe } from 'react-icons/fi'

function FloatingUtilities() {
  return (
    <>
      <div className="pointer-events-none absolute right-[6px] top-[250px] z-20 flex h-[22px] w-[22px] items-center justify-center rounded-full border border-white/10 bg-black/55 text-[10px] text-white shadow-[0_2px_8px_rgba(0,0,0,0.35)] backdrop-blur-[2px]">
        <div className="flex gap-[2px]">
          <span className="block h-[8px] w-[2px] rounded-full bg-white" />
          <span className="block h-[8px] w-[2px] rounded-full bg-white" />
        </div>
      </div>

      <div className="pointer-events-none absolute right-[6px] top-[282px] z-20 flex h-[22px] w-[22px] items-center justify-center rounded-full border border-white/10 bg-black/55 text-[10px] text-white shadow-[0_2px_8px_rgba(0,0,0,0.35)] backdrop-blur-[2px]">
        <FiGlobe className="text-[11px]" />
      </div>
    </>
  )
}

export default FloatingUtilities
