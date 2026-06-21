import { useEffect, useRef } from 'react'

// Deterministic pseudo-random so the layout is stable across renders
function seeded(seed) {
  let value = seed
  return () => {
    value = (value * 9301 + 49297) % 233280
    return value / 233280
  }
}

function CandlestickField() {
  const rand = seeded(42)
  const candles = Array.from({ length: 28 }, (_, i) => {
    const up = rand() > 0.45
    const bodyHeight = 18 + rand() * 70
    const wickTop = bodyHeight + 6 + rand() * 26
    const wickBottom = bodyHeight + 6 + rand() * 22
    return {
      id: i,
      x: i * 46,
      bodyHeight,
      wickTop,
      wickBottom,
      up,
      delay: rand() * 6,
      duration: 5 + rand() * 5,
    }
  })

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1300 700"
      preserveAspectRatio="xMidYMid slice"
    >
      <g transform="translate(0, 430)">
        {candles.map((c) => (
          <g
            key={c.id}
            transform={`translate(${c.x}, 0)`}
            className="animate-candle"
            style={{
              animationDelay: `${c.delay}s`,
              animationDuration: `${c.duration}s`,
            }}
          >
            <line
              x1="11"
              x2="11"
              y1={-c.bodyHeight - c.wickTop}
              y2={c.bodyHeight + c.wickBottom}
              stroke={c.up ? '#00FF94' : '#3F4A47'}
              strokeWidth="1.5"
              opacity="0.5"
            />
            <rect
              x="2"
              y={-c.bodyHeight}
              width="18"
              height={c.bodyHeight * 2}
              rx="2"
              fill={c.up ? '#00FF94' : '#2A2F2E'}
              opacity={c.up ? 0.35 : 0.5}
            />
          </g>
        ))}
      </g>
    </svg>
  )
}

function GlowCurves() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1300 700"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <defs>
        <linearGradient id="curveFade1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#00FF94" stopOpacity="0" />
          <stop offset="50%" stopColor="#00FF94" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#00FF94" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="curveFade2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0" />
          <stop offset="50%" stopColor="#2DD4BF" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0" />
        </linearGradient>
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <path
        d="M -50 480 C 200 380, 380 560, 600 400 S 1000 220, 1350 320"
        stroke="url(#curveFade1)"
        strokeWidth="2.5"
        strokeDasharray="10 14"
        filter="url(#softGlow)"
        className="animate-glow-line"
      />
      <path
        d="M -50 250 C 250 150, 420 340, 680 230 S 1050 80, 1350 150"
        stroke="url(#curveFade2)"
        strokeWidth="2"
        strokeDasharray="8 16"
        filter="url(#softGlow)"
        className="animate-glow-line"
        style={{ animationDuration: '9s', animationDirection: 'reverse' }}
      />
    </svg>
  )
}

function WorldMesh() {
  // Simplified low-poly "mesh" dot grid suggesting a world map / network
  const rand = seeded(7)
  const nodes = Array.from({ length: 46 }, (_, i) => ({
    id: i,
    x: rand() * 1300,
    y: 60 + rand() * 560,
  }))

  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.35]"
      viewBox="0 0 1300 700"
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="#2DD4BF" strokeWidth="0.6" opacity="0.4">
        {nodes.map((n, i) => {
          const next = nodes[(i + 5) % nodes.length]
          return (
            <line key={n.id} x1={n.x} y1={n.y} x2={next.x} y2={next.y} />
          )
        })}
      </g>
      <g fill="#00FF94">
        {nodes.map((n) => (
          <circle key={n.id} cx={n.x} cy={n.y} r="1.8" opacity="0.7" />
        ))}
      </g>
      {/* A few emphasized "pulse" hubs */}
      {[
        { x: 230, y: 180 },
        { x: 760, y: 120 },
        { x: 1040, y: 340 },
        { x: 420, y: 460 },
      ].map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r="4"
          fill="#00FF94"
          className="animate-pulse-dot"
          style={{ animationDelay: `${i * 0.6}s` }}
        />
      ))}
    </svg>
  )
}

function Particles() {
  const rand = seeded(101)
  const particles = Array.from({ length: 34 }, (_, i) => ({
    id: i,
    left: rand() * 100,
    top: 40 + rand() * 60,
    size: 1.5 + rand() * 2.5,
    duration: 10 + rand() * 14,
    delay: rand() * 10,
    driftX: (rand() - 0.5) * 60,
    teal: rand() > 0.6,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="animate-particle absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.teal ? '#2DD4BF' : '#00FF94',
            boxShadow: `0 0 6px ${p.teal ? '#2DD4BF' : '#00FF94'}`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            '--drift-x': `${p.driftX}px`,
          }}
        />
      ))}
    </div>
  )
}

function ScanSweep() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="animate-sweep absolute top-0 h-full w-[35%]"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(0,255,148,0.07), transparent)',
        }}
      />
    </div>
  )
}

export default function HeroBackground() {
  const containerRef = useRef(null)
  const layersRef = useRef([])

  useEffect(() => {
    const handleMove = (e) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 2
      const y = (e.clientY / innerHeight - 0.5) * 2
      layersRef.current.forEach((el, i) => {
        if (!el) return
        const depth = (i + 1) * 3.5
        el.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0)`
      })
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden bg-charcoal"
      aria-hidden="true"
    >
      {/* radial depth wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 70% 40%, rgba(10,31,26,0.9) 0%, #0D0D0D 70%)',
        }}
      />

      <div
        ref={(el) => (layersRef.current[0] = el)}
        className="animate-drift-slower absolute inset-0 transition-transform duration-300 ease-out"
      >
        <WorldMesh />
      </div>

      <div
        ref={(el) => (layersRef.current[1] = el)}
        className="animate-drift-slow absolute inset-0 transition-transform duration-300 ease-out"
      >
        <GlowCurves />
      </div>

      <div
        ref={(el) => (layersRef.current[2] = el)}
        className="absolute inset-0 transition-transform duration-300 ease-out"
      >
        <CandlestickField />
      </div>

      <div ref={(el) => (layersRef.current[3] = el)} className="absolute inset-0">
        <Particles />
      </div>

      <ScanSweep />

      {/* vignette so foreground text stays legible */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, #0D0D0D 0%, rgba(13,13,13,0.85) 28%, rgba(13,13,13,0.35) 55%, rgba(13,13,13,0.15) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(13,13,13,0.4) 0%, transparent 18%, transparent 75%, rgba(13,13,13,0.7) 100%)',
        }}
      />
    </div>
  )
}
