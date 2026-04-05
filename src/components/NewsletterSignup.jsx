function NewsletterSignup() {
  return (
    <section className="relative bg-[#12161b] px-[9px] pb-[18px] pt-[18px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.03),transparent_35%)]" />
      <div className="pointer-events-none absolute left-0 top-0 text-[56px] leading-none font-medium tracking-[-0.08em] text-white/10">
        RI
      </div>

      <div className="relative z-10">
        <h3 className="max-w-[320px] text-[31px] leading-[34px] tracking-[-0.04em] text-white">
          Want treats exclusively for you?
        </h3>

        <p className="mb-[14px] mt-[10px] text-[11px] leading-4 text-white/70">
          Sign up now and get 10% off your first shop and tailor-made rewards all year round
        </p>

        <div className="flex gap-1">
          <input
            type="email"
            placeholder="Enter your email"
            className="h-8 flex-1 border border-white/8 bg-[#2c2f34] px-[10px] text-[11px] text-white placeholder:text-white/45 focus:outline-none"
          />
          <button className="h-8 w-[70px] bg-[#111111] text-[11px] text-white shadow-[0_2px_10px_rgba(0,0,0,0.18)]">
            Sign Up
          </button>
        </div>

        <p className="mt-[10px] text-[9px] leading-[13px] text-white/45">
          *T&amp;Cs apply. Your personal details are safe with us. For more info, read our Privacy Notice.
        </p>
      </div>
    </section>
  )
}

export default NewsletterSignup
