import Navbar from './Navbar'
import HeroBackground from './HeroBackground'

function StatChip({ label, value, trend }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-white/[0.07] bg-white/[0.02] px-4 py-3 backdrop-blur-sm">
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          trend === 'up' ? 'bg-signal' : 'bg-mute'
        } animate-pulse-dot`}
      />
      <div>
        <p className="font-mono text-[11px] uppercase tracking-wider text-white/40">
          {label}
        </p>
        <p className="font-mono text-sm text-white">{value}</p>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-charcoal">
      <HeroBackground />
      <Navbar />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-10">
        <div className="max-w-2xl pt-16">
          {/* Badge */}
          <div className="animate-fade-up mb-7 inline-flex items-center gap-2 rounded-full border border-signal/25 bg-signal/[0.06] px-4 py-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            <span className="font-mono text-xs uppercase tracking-widest text-signal/90">
              AI-Powered Stock Intelligence
            </span>
          </div>

          {/* Title */}
          <h1
            className="animate-fade-up font-display text-[3.4rem] font-semibold leading-[1.03] tracking-tight text-white sm:text-[4.2rem] md:text-[5rem]"
            style={{ animationDelay: '0.08s' }}
          >
            MarketGuard
            <br />
            <span className="text-signal">AI</span>
          </h1>

          {/* Subtitle */}
          <p
            className="animate-fade-up mt-6 font-display text-xl text-white/85 sm:text-2xl"
            style={{ animationDelay: '0.16s' }}
          >
            Analyze smarter. Invest better.
          </p>

          {/* Description */}
          <p
            className="animate-fade-up mt-4 max-w-md font-body text-base leading-relaxed text-white/55"
            style={{ animationDelay: '0.24s' }}
          >
            Real-time market surveillance powered by predictive AI. MarketGuard
            reads price action, sentiment, and risk signals across global
            exchanges so you can act before the crowd does.
          </p>

          {/* CTA */}
          <div
            className="animate-fade-up mt-9 flex flex-wrap items-center gap-4"
            style={{ animationDelay: '0.32s' }}
          >
            <a
              href="#get-started"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-signal px-7 py-3.5 font-body text-sm font-semibold text-charcoal shadow-[0_0_30px_rgba(0,255,148,0.25)] transition-transform duration-200 hover:scale-[1.03]"
            >
              Get Started
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#demo"
              className="font-body text-sm text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Watch demo &rarr;
            </a>
          </div>

          {/* Live data readout — fills compositional weight, reinforces "guard/surveillance" theme */}
          <div
            className="animate-fade-up mt-12 grid max-w-md grid-cols-3 gap-3"
            style={{ animationDelay: '0.4s' }}
          >
            <StatChip label="Markets Watched" value="48" trend="up" />
            <StatChip label="Signals / day" value="12.4K" trend="up" />
            <StatChip label="Accuracy" value="94.2%" trend="up" />
          </div>
        </div>
      </div>

      {/* bottom fade so next section transitions cleanly */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-28 w-full bg-gradient-to-t from-charcoal to-transparent" />

      {/* scroll cue */}
      <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 md:left-10 md:translate-x-0">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-white/35">
          <span className="h-px w-8 bg-white/25" />
          Scroll
        </div>
      </div>
    </section>
  )
}
