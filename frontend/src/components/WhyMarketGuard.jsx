import { useState, useEffect, useRef } from 'react'

function AIInsightsIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 4.5a3 3 0 0 0-3 3v.2A3 3 0 0 0 4.5 10v1a3 3 0 0 0 1.2 2.4A3 3 0 0 0 7.5 19h1.2M15 4.5a3 3 0 0 1 3 3v.2a3 3 0 0 1 1.5 2.8v1a3 3 0 0 1-1.2 2.4 3 3 0 0 1-1.8 5.6h-1.2M9 4.5h6M9 19.5h6M12 4.5v15"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SmartAnalysisIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 19V10M10 19V5M16 19v-7M20 19H4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function NewsSentimentIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path
        d="M4.5 5.5h11a1 1 0 0 1 1 1V17l-3.5-2H5.5a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M19.5 9.5a1 1 0 0 1 1 1V18l-2.5-1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function WatchlistIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path
        d="M6.5 4.5h11a1 1 0 0 1 1 1V20l-6.5-3.8L5.5 20V5.5a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function RealTimeTrackingIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 7.5V12l3.2 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const FEATURES = [
  {
    id: '01',
    title: 'AI Insights',
    description:
      'Get AI-powered stock recommendations based on market trends and sentiment.',
    icon: AIInsightsIcon,
  },
  {
    id: '02',
    title: 'Smart Analysis',
    description:
      'Understand stock performance with powerful charts and analytics.',
    icon: SmartAnalysisIcon,
  },
  {
    id: '03',
    title: 'News Sentiment',
    description:
      'Track real-time news and sentiment trends to predict market movements ahead of others.',
    icon: NewsSentimentIcon,
  },
  {
    id: '04',
    title: 'Watchlist',
    description: 'Save and monitor your favorite stocks in one place.',
    icon: WatchlistIcon,
  },
  {
    id: '05',
    title: 'Real-Time Tracking',
    description: 'Stay updated with live stock data and market movements.',
    icon: RealTimeTrackingIcon,
  },
]

// Reveals children with a fade-up animation once the section scrolls
// into view, rather than animating immediately on mount.
function ScrollReveal({ children, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${visible ? 'animate-scroll-reveal' : 'opacity-0'} ${className}`}
    >
      {children}
    </div>
  )
}

function FeatureCard({ feature, isActive, onHover, onLeave }) {
  const { id, title, description, icon: Icon } = feature

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
      tabIndex={0}
      role="button"
      aria-pressed={isActive}
      aria-label={`Feature: ${title}`}
      // Width is the only thing that changes between states — height is
      // fixed via the parent row's `h-*` class and never touched here,
      // per the "height should remain unchanged" requirement.
      //
      // Sizing strategy: percentage-based flex-basis rather than fixed
      // px. At a ~1280px+ container this naturally lands the active card
      // around 500-550px and inactive cards around 190-220px (matching
      // the requested ranges), while still resolving to *some* sane
      // width on narrower desktop/tablet viewports without ever
      // overflowing or requiring horizontal scroll — 5 cards at fixed
      // px minimums (500px active + 4x180px inactive + gaps) only
      // mathematically fit starting around 1366px-wide screens, so pure
      // fixed px would force scrolling below that. Below `lg`, the row
      // switches to a vertical stack instead (see the wrapper below).
      className={`group relative flex h-[300px] shrink-0 cursor-pointer flex-col overflow-hidden rounded-[1.75rem] border p-7 text-left transition-all ease-in-out sm:h-[320px] ${
        isActive ? 'shadow-[0_30px_80px_rgba(34,197,94,0.28),0_30px_80px_rgba(0,0,0,0.5)]' : 'shadow-[0_15px_40px_rgba(0,0,0,0.4)]'
      }`}
      style={{
        flexBasis: isActive ? '38%' : '15.5%',
        flexGrow: 0,
        flexShrink: 0,
        minWidth: isActive ? '450px' : '220px',
        maxWidth: isActive ? '550px' : '250px',
        transitionDuration: '600ms',
        transitionProperty:
          'flex-basis, min-width, max-width, border-color, background-color, box-shadow',
        borderColor: isActive ? 'rgba(34,197,94,0.5)' : 'rgba(255,255,255,0.08)',
        background: isActive ? 'rgba(34,197,94,0.06)' : 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(20px)',
        opacity: isActive ? 1 : 0.7,
      }}
    >
      {/* huge faded number, top-right corner */}
      <span
        className={`pointer-events-none absolute right-6 top-6 font-display text-6xl font-bold leading-none transition-colors duration-500 sm:text-7xl ${
          isActive ? 'text-emerald/15' : 'text-white/10'
        }`}
        aria-hidden="true"
      >
        {id}
      </span>

      {/* icon */}
      <span
        className={`relative flex h-12 w-12 items-center justify-center rounded-xl border transition-colors duration-500 ${
          isActive
            ? 'border-emerald/40 bg-emerald/10 text-emerald'
            : 'border-white/10 bg-white/[0.04] text-white/50'
        }`}
      >
        <Icon />
      </span>

      {/* title */}
      <h3
        className={`relative mt-5 max-w-[220px] font-display text-lg font-semibold uppercase tracking-tight text-white transition-all duration-500 sm:text-xl witespace-normal ${
          isActive ? 'whitespace-normal' : 'whitespace-nowrap'
        }`}
      >
        {title}
      </h3>

      {/* accent line */}
      <span
        className={`relative mt-4 h-[3px] w-10 rounded-full transition-colors duration-500 ${
          isActive ? 'bg-emerald' : 'bg-white/20'
        }`}
        aria-hidden="true"
      />

      {/* description — fully visible when active, faded out otherwise */}
      <p
        className={`relative mt-4 max-w-[300px] overflow-hidden font-body text-sm leading-relaxed text-white/60 transition-all duration-500 ${
        isActive
        ? 'max-h-40 opacity-100'
        : 'max-h-0 opacity-0'
}`}
        style={{
          transitionDelay: isActive ? '150ms' : '0ms',
        }}
      >
        {description}
      </p>
    </div>
  )
}

export default function WhyMarketGuard() {
  const [activeIndex, setActiveIndex] = useState(-1)

  return (
    <section className="relative w-full overflow-hidden bg-charcoal px-6 py-28 md:px-10">
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[34rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald/[0.07] blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Header */}
        <ScrollReveal className="flex flex-col items-center text-center">
          <span className="font-body text-xs font-medium uppercase tracking-[0.2em] text-emerald/70">
            Why MarketGuard AI
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
            Built for <span className="text-emerald">Smart Investors</span>
          </h2>
          <p className="mt-5 max-w-xl font-body text-base text-white/55 sm:text-lg">
            AI-powered insights, real-time data, and intelligent analysis to
            help users invest smarter.
          </p>
        </ScrollReveal>

        {/* Fixed-position row — cards never move, only their width changes.
            Below `lg`, five side-by-side cards (even shrunk) can't fit
            without horizontal scrolling, which is explicitly disallowed,
            so the row becomes a vertical stack on smaller screens instead. */}
        <ScrollReveal className="mt-16">
          <div className="hidden w-full justify-center gap-4 lg:flex">
            {FEATURES.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                isActive={index === activeIndex}
                onHover={() => setActiveIndex(index)}
                onLeave={() => setActiveIndex(-1)}
              />
            ))}
          </div>

          {/* Mobile/tablet fallback: vertical stack, tap-to-expand instead
              of hover-to-expand (no hover on touch devices). */}
          <div className="flex flex-col gap-4 lg:hidden">
            {FEATURES.map((feature, index) => {
              const isActive = index === activeIndex
              return (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                  aria-expanded={isActive}
                  className="relative flex flex-col overflow-hidden rounded-2xl border p-6 text-left transition-all duration-500"
                  style={{
                    borderColor: isActive
                      ? 'rgba(34,197,94,0.5)'
                      : 'rgba(255,255,255,0.08)',
                    background: isActive
                      ? 'rgba(34,197,94,0.06)'
                      : 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  <span
                    className="pointer-events-none absolute right-5 top-5 font-display text-5xl font-bold leading-none text-white/10"
                    aria-hidden="true"
                  >
                    {feature.id}
                  </span>
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
                      isActive
                        ? 'border-emerald/40 bg-emerald/10 text-emerald'
                        : 'border-white/10 bg-white/[0.04] text-white/50'
                    }`}
                  >
                    <feature.icon />
                  </span>
                  <h3 className="relative mt-4 font-display text-lg font-semibold uppercase tracking-tight text-white">
                    {feature.title}
                  </h3>
                  <span
                    className={`relative mt-3 h-[3px] w-10 rounded-full ${
                      isActive ? 'bg-emerald' : 'bg-white/20'
                    }`}
                  />
                  <p
                    className={`relative mt-3 max-w-[320px] overflow-hidden font-body text-sm leading-relaxed text-white/60 transition-all duration-500 ${
                      isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {feature.description}
                  </p>
                </button>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
