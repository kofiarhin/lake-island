import { FaFacebookF, FaInstagram, FaPinterestP, FaTiktok, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function FooterBottom() {
  return (
    <>
      <section className="bg-[#12161b] px-[9px] pb-0 pt-[18px]">
        <div className="flex items-center gap-2 text-[12px] text-white/85">
          <span>🇬🇧</span>
          <span>United Kingdom</span>
        </div>

        <div className="mt-7 flex items-center justify-around text-[16px] text-white/80">
          <FaFacebookF />
          <FaXTwitter />
          <FaInstagram />
          <FaPinterestP />
          <FaYoutube />
          <FaTiktok />
        </div>

        <p className="mt-5 text-center text-[10px] text-white/60"> 2026 River Island</p>
      </section>

      <div className="h-[300px] bg-[#0d1116]" />
    </>
  )
}

export default FooterBottom
