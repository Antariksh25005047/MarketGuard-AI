function GrainOverlay() {
  // Fine procedural noise via feTurbulence, kept at very low opacity so it
  // reads as subtle film grain rather than visible static.
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]"
      aria-hidden="true"
    >
      <filter id="grainFilter">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.85"
          numOctaves="2"
          stitchTiles="stitch"
          result="noise"
        />
        <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.9 0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grainFilter)" />
    </svg>
  )
}

export default function CTAFooterSection() {
  return (
    <section className="relative w-full overflow-hidden bg-charcoal">
      {/* thin emerald divider at the very top */}
      <div
        className="h-px w-full bg-gradient-to-r from-transparent via-emerald/35 to-transparent"
        aria-hidden="true"
      />

      {/* subtle grain texture over the whole section */}
      <GrainOverlay />

      {/* ===== CTA block, with watermark layered directly behind it ===== */}
      <div className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-32 md:px-10">
        {/* soft emerald radial glow behind the content */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[26rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald/[0.08] blur-[120px]"
          aria-hidden="true"
        />

        {/* giant watermark — filled only, no stroke/border/neon, sits behind
            the headline in the same stacking context (z-0, headline is z-10) */}
        <p
          className="pointer-events-none absolute inset-0 z-0 flex select-none items-center justify-center whitespace-nowrap text-center font-display font-bold leading-none blur-[2px]"
          style={{
            fontSize: 'clamp(2rem, 10vw, 10rem)',
            opacity: 0.1,
            color: '#0e4f26',
            letterSpacing: '-0.02em',
          }}
          aria-hidden="true"
        >
          MARKETGUARD AI
        </p>

        {/* headline + supporting text, on top of the watermark and glow */}
        <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ready to Invest Smarter?
          </h2>
          <p className="mt-5 max-w-lg font-body text-base leading-relaxed text-white/55 sm:text-lg">
            Get AI-powered stock insights, market sentiment analysis, and
            real-time market intelligence.
          </p>
        </div>
      </div>

      {/* ===== Footer ===== */}
      <div className="relative z-10 border-t border-white/[0.06] px-6 py-10 text-center md:px-10">
        <h3 className="font-display text-base font-semibold tracking-tight text-white">
          MarketGuard <span className="text-emerald">AI</span>
        </h3>
        <p className="mt-1.5 font-body text-sm text-white/45">
          Built for Smarter Investors
        </p>
        <p className="mt-4 font-body text-xs text-white/30">
          © 2026 MarketGuard AI. All rights reserved.
        </p>
      </div>
    </section>
  )
}
