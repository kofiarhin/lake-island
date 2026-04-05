import { FiPlus } from 'react-icons/fi'

function FooterAccordion({ footerRows }) {
  return (
    <section className="bg-[#12161b] px-[9px]">
      {footerRows.map((label) => (
        <div
          key={label}
          className="flex min-h-[42px] items-center justify-between border-t border-white/10"
        >
          <span className="text-[10px] tracking-[0.02em] text-white/75">{label}</span>
          <button
            aria-label={`Toggle ${label}`}
            className="flex h-[18px] w-[18px] items-center justify-center bg-black text-[14px] text-white shadow-[0_1px_6px_rgba(0,0,0,0.2)]"
          >
            <FiPlus className="text-[13px]" />
          </button>
        </div>
      ))}
    </section>
  )
}

export default FooterAccordion
