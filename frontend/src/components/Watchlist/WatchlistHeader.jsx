// import { Bookmark, TrendingUp, TrendingDown, Plus } from "lucide-react";

// // ─── Data ─────────────────────────────────────────────────────────────────────

// const STATS = [
//   {
//     id: "total",
//     label: "Total Stocks",
//     value: "12",
//     icon: Bookmark,
//     color: "emerald",
//   },
//   {
//     id: "gainers",
//     label: "Today's Gainers",
//     value: "7",
//     icon: TrendingUp,
//     color: "green",
//   },
//   {
//     id: "losers",
//     label: "Today's Losers",
//     value: "5",
//     icon: TrendingDown,
//     color: "red",
//   },
// ];

// const COLOR_MAP = {
//   emerald: {
//     icon: "#22C55E",
//     iconBg: "rgba(34,197,94,0.10)",
//     iconBorder: "rgba(34,197,94,0.18)",
//     value: "#22C55E",
//   },
//   green: {
//     icon: "#4ADE80",
//     iconBg: "rgba(74,222,128,0.09)",
//     iconBorder: "rgba(74,222,128,0.17)",
//     value: "#4ADE80",
//   },
//   red: {
//     icon: "#F87171",
//     iconBg: "rgba(248,113,113,0.09)",
//     iconBorder: "rgba(248,113,113,0.17)",
//     value: "#F87171",
//   },
// };

// // ─── Stat Card ────────────────────────────────────────────────────────────────

// function StatCard({ stat }) {
//   const { label, value, icon: Icon, color } = stat;
//   const c = COLOR_MAP[color];

//   return (
//     <div
//       className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl px-6 py-5
//                  transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-white/[0.05]
//                  hover:shadow-[0_8px_28px_rgba(0,0,0,0.35)] cursor-default flex-1 min-w-[180px]"
//     >
//       <div
//         className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
//         style={{ background: c.iconBg, border: `1px solid ${c.iconBorder}` }}
//       >
//         <Icon size={18} color={c.icon} strokeWidth={2} />
//       </div>
//       <div className="flex flex-col gap-0.5">
//         <span className="text-2xl font-bold leading-none tracking-tight" style={{ color: c.value }}>
//           {value}
//         </span>
//         <span className="text-xs font-medium text-gray-500">{label}</span>
//       </div>
//     </div>
//   );
// }

// // ─── Main Component ───────────────────────────────────────────────────────────

// export default function WatchlistHeader() {
//   return (
//     <section className="w-full font-[Inter,sans-serif]">
//       {/* Top row: heading + add button */}
//       <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
//         {/* Left: heading */}
//         <div className="flex flex-col gap-2">
//           <h1 className="flex items-center gap-2.5 text-[28px] sm:text-[32px] font-bold tracking-tight text-white">
//             <span className="text-emerald-400">⭐</span>
//             My Watchlist
//           </h1>
//           <p className="max-w-md text-sm leading-relaxed text-gray-500">
//             Track your favorite stocks and monitor their market performance in real time.
//           </p>
//         </div>

//         {/* Right: add stock button */}
//         <button
//           type="button"
//           className="group inline-flex shrink-0 items-center gap-2 rounded-[14px] bg-gradient-to-br from-emerald-600 to-emerald-500
//                      px-5 py-3 text-sm font-semibold text-white
//                      transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_22px_rgba(34,197,94,0.45)]
//                      active:scale-[0.98]"
//         >
//           <Plus size={16} strokeWidth={2.75} className="text-white" />
//           Add Stock
//         </button>
//       </div>

//       {/* Bottom row: stat cards */}
//       <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
//         {STATS.map((stat) => (
//           <StatCard key={stat.id} stat={stat} />
//         ))}
//       </div>
//     </section>
//   );
// }
