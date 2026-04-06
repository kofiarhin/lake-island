import { useScrollReveal } from '../hooks/useScrollReveal'

function GreenDivider() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.5 })

  return (
    <div className="mx-[9px] mt-5 overflow-hidden">
      <div
        ref={ref}
        className="h-6 bg-[#007a63] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
        style={{
          transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left center',
          transition: 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
    </div>
  )
}

export default GreenDivider
