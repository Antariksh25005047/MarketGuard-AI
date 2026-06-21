import Logo from './Logo'

const NAV_GROUPS = [
  {
    title: 'Product',
    links: ['Home', 'Markets', 'Dashboard'],
  },
  {
    title: 'Company',
    links: ['About', 'Contact'],
  },
  {
    title: 'Resources',
    links: ['Privacy Policy', 'Terms of Service', 'Documentation'],
  },
]

function FooterLink({ children }) {
  return (
    <a
      href="#"
      className="group relative inline-flex w-fit font-body text-sm text-white/55 transition-colors duration-200 hover:text-white"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-px w-0 bg-emerald transition-all duration-300 group-hover:w-full" />
    </a>
  )
}

function SocialIcon({ label, path, viewBox = '0 0 24 24' }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.03] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald/40 hover:bg-emerald/10 hover:shadow-[0_0_24px_rgba(34,197,94,0.35)]"
    >
      <svg
        width="17"
        height="17"
        viewBox={viewBox}
        fill="currentColor"
        className="text-white/60 transition-colors duration-300 group-hover:text-emerald"
      >
        <path d={path} />
      </svg>
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-charcoal">
      {/* faint top-edge seam into the rest of the page */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald/25 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 md:px-10">
        {/* ===== Brand hero moment ===== */}
        <div className="relative flex flex-col items-center text-center">
          {/* glow behind the wordmark */}
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 h-[22rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald/[0.12] blur-[100px]"
            aria-hidden="true"
          />

          <div className="relative inline-flex items-center gap-2.5 rounded-full border border-emerald/25 bg-emerald/[0.06] px-4 py-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald" />
            </span>
            <span className="font-body text-xs uppercase tracking-widest text-emerald/90">
              AI-Powered Stock Intelligence
            </span>
          </div>

          <h2 className="relative mt-7 font-display text-[3.2rem] font-bold leading-[1.02] tracking-tight text-white sm:text-[4.5rem] md:text-[6rem] lg:text-[7rem]">
            MarketGuard <span className="text-emerald">AI</span>
          </h2>

          <p className="relative mt-6 max-w-lg font-body text-base leading-relaxed text-white/50">
            AI-powered stock intelligence platform delivering real-time insights,
            market analysis, and predictive signals for smarter investing.
          </p>
        </div>

        {/* ===== Navigation columns ===== */}
        <div className="relative mt-20 grid grid-cols-1 gap-12 border-t border-white/[0.08] pt-14 sm:grid-cols-3">
          {NAV_GROUPS.map((group) => (
            <div key={group.title} className="flex flex-col items-center sm:items-start">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/80">
                {group.title}
              </h3>
              <ul className="mt-5 flex flex-col items-center gap-3.5 sm:items-start">
                {group.links.map((link) => (
                  <li key={link}>
                    <FooterLink>{link}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ===== Social section ===== */}
        <div className="relative mt-14 flex flex-col items-center gap-5 border-t border-white/[0.08] pt-12">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/80">
            Connect
          </h3>
          <div className="flex items-center gap-4">
            <SocialIcon
              label="GitHub"
              path="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.7.41.36.78 1.06.78 2.14 0 1.55-.02 2.79-.02 3.17 0 .31.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"
            />
            <SocialIcon
              label="LinkedIn"
              path="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"
            />
            <SocialIcon
              label="X (Twitter)"
              path="M18.9 1.5h3.68l-8.04 9.19L24 22.5h-7.4l-5.8-7.59-6.64 7.59H.47l8.6-9.83L0 1.5h7.59l5.24 6.93 6.07-6.93Zm-1.29 18.9h2.04L6.5 3.48H4.3l13.31 16.92Z"
              viewBox="0 0 24 24"
            />
          </div>
        </div>

        {/* ===== Bottom bar ===== */}
        <div className="relative mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/[0.08] py-7 sm:flex-row">
          <p className="font-body text-xs text-white/40">
            © 2026 MarketGuard AI.
          </p>

          <div className="flex items-center gap-2 rounded-full border border-emerald/25 bg-emerald/[0.06] px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald shadow-[0_0_8px_#22C55E]" />
            <span className="font-body text-[11px] font-medium uppercase tracking-wider text-emerald/90">
              Built with AI
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
