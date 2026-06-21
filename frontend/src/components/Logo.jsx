export default function Logo({ active }) {
  return (
    <span
      className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-500 ${
        active
          ? 'border-emerald/50 bg-emerald/10 shadow-[0_0_14px_rgba(34,197,94,0.35)]'
          : 'border-white/15 bg-white/[0.03]'
      }`}
    >
      <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
        <path
          d="M8 0.8L15 3.6V8.6C15 12.9 12 16.1 8 17.2C4 16.1 1 12.9 1 8.6V3.6L8 0.8Z"
          stroke={active ? '#22C55E' : 'rgba(255,255,255,0.7)'}
          strokeWidth="1.3"
          strokeLinejoin="round"
          className="transition-colors duration-500"
        />
        <path
          d="M5 8.6L7.2 10.8L11.2 6.4"
          stroke={active ? '#22C55E' : 'rgba(255,255,255,0.55)'}
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-colors duration-500"
        />
      </svg>
    </span>
  )
}
