export default function Watermark() {
  return (
    <div
      className="relative w-full overflow-hidden bg-charcoal px-4 py-10"
      aria-hidden="true"
    >
      <div className="relative mx-auto flex justify-center">
        {/* glow layer behind the text */}
        <p
          className="absolute whitespace-nowrap text-center font-display font-bold leading-none tracking-tight text-emerald blur-3xl"
          style={{
            fontSize: 'clamp(2rem, 9.5vw, 13rem)',
            opacity: 0.35,
          }}
        >
          MARKETGUARD AI
        </p>
        {/* crisp outline-style text on top */}
        <p
          className="relative whitespace-nowrap text-center font-display font-bold leading-none tracking-tight"
          style={{
            fontSize: 'clamp(2rem, 9.5vw, 13rem)',
            color: 'transparent',
            WebkitTextStroke: '1.5px rgba(34,197,94,0.4)',
          }}
        >
          MARKETGUARD AI
        </p>
      </div>
    </div>
  )
}
