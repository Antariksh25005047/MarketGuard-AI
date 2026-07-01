// import { Search, Trash2, Bookmark, TrendingUp, TrendingDown } from "lucide-react";

// // ─── Temporary hardcoded data ───────────────────────────────────────────────

// const WATCHLIST = [
//   {
//     id: 1,
//     company: "Apple Inc.",
//     symbol: "AAPL",
//     price: 211.43,
//     change: 2.14,
//   },
//   {
//     id: 2,
//     company: "NVIDIA",
//     symbol: "NVDA",
//     price: 171.92,
//     change: 1.03,
//   },
//   {
//     id: 3,
//     company: "Tesla Inc.",
//     symbol: "TSLA",
//     price: 302.18,
//     change: -1.74,
//   },
//   {
//     id: 4,
//     company: "Reliance Industries",
//     symbol: "RELIANCE.NS",
//     price: 1492.85,
//     change: 0.81,
//   },
// ];

// // ─── Logo color rotation ─────────────────────────────────────────────────────

// const LOGO_COLORS = [
//   { bg: "rgba(34,197,94,0.12)", border: "rgba(34,197,94,0.22)", text: "#22C55E" },
//   { bg: "rgba(96,165,250,0.12)", border: "rgba(96,165,250,0.22)", text: "#60A5FA" },
//   { bg: "rgba(167,139,250,0.12)", border: "rgba(167,139,250,0.22)", text: "#A78BFA" },
//   { bg: "rgba(251,191,36,0.12)", border: "rgba(251,191,36,0.22)", text: "#FBBF24" },
// ];

// function logoColor(id) {
//   return LOGO_COLORS[(id - 1) % LOGO_COLORS.length];
// }

// // ─── Sub-components ───────────────────────────────────────────────────────────

// function ChangeBadge({ change }) {
//   const positive = change >= 0;
//   const Icon = positive ? TrendingUp : TrendingDown;
//   return (
//     <span
//       className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
//         positive
//           ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
//           : "bg-red-500/10 text-red-400 border border-red-500/20"
//       }`}
//     >
//       <Icon size={12} strokeWidth={2.5} />
//       {positive ? "+" : ""}
//       {change.toFixed(2)}%
//     </span>
//   );
// }

// function StockLogo({ company, id }) {
//   const c = logoColor(id);
//   return (
//     <div
//       className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold"
//       style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.text }}
//     >
//       {company.charAt(0)}
//     </div>
//   );
// }

// // ─── Empty State ──────────────────────────────────────────────────────────────

// function EmptyState() {
//   return (
//     <div className="flex flex-col items-center justify-center gap-4 px-6 py-20 text-center">
//       <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
//         <Bookmark size={28} className="text-gray-600" strokeWidth={1.75} />
//       </div>
//       <div className="flex flex-col gap-1.5">
//         <h3 className="text-base font-semibold text-white">No Stocks in Watchlist</h3>
//         <p className="max-w-xs text-sm text-gray-500">
//           Add your favorite stocks to start tracking them.
//         </p>
//       </div>
//       <button
//         type="button"
//         className="mt-2 rounded-xl border border-emerald-500/40 px-5 py-2.5 text-sm font-semibold text-emerald-400
//                    transition-all duration-300 hover:bg-emerald-500/10 hover:border-emerald-500/60"
//       >
//         Browse Stocks
//       </button>
//     </div>
//   );
// }

// // ─── Mobile Card ──────────────────────────────────────────────────────────────

// function StockCard({ stock }) {
//   return (
//     <div
//       className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4
//                  backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/5
//                  hover:border-emerald-500/20 cursor-pointer"
//     >
//       <StockLogo company={stock.company} id={stock.id} />

//       <div className="flex min-w-0 flex-1 flex-col gap-0.5">
//         <span className="truncate text-sm font-semibold text-white">{stock.company}</span>
//         <span className="text-xs font-medium text-gray-500">{stock.symbol}</span>
//       </div>

//       <div className="flex flex-col items-end gap-1.5">
//         <span className="text-sm font-bold text-white">${stock.price.toFixed(2)}</span>
//         <ChangeBadge change={stock.change} />
//       </div>

//       <button
//         type="button"
//         aria-label="Remove from watchlist"
//         className="ml-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10
//                    text-gray-500 transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
//       >
//         <Trash2 size={14} strokeWidth={2} />
//       </button>
//     </div>
//   );
// }

// // ─── Main Component ───────────────────────────────────────────────────────────

// export default function WatchlistTable() {
//   const isEmpty = WATCHLIST.length === 0;

//   return (
//     <section className="w-full font-[Inter,sans-serif]">
//       {/* ── Toolbar ── */}
//       <div className="mb-5 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
//         <div>
//           <h2 className="text-lg font-bold tracking-tight text-white">Watchlist Stocks</h2>
//           <p className="mt-1 text-xs text-gray-500">
//             Click any stock to open detailed AI analysis.
//           </p>
//         </div>

//         <div className="relative w-full sm:w-72">
//           <Search
//             size={15}
//             strokeWidth={2}
//             className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500"
//           />
//           <input
//             type="text"
//             placeholder="Search company or symbol..."
//             className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-2.5 pl-10 pr-4 text-sm text-white
//                        placeholder:text-gray-600 backdrop-blur-xl outline-none transition-all duration-300
//                        focus:border-emerald-500/40 focus:bg-white/[0.05]"
//           />
//         </div>
//       </div>

//       {/* ── Empty state ── */}
//       {isEmpty ? (
//         <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
//           <EmptyState />
//         </div>
//       ) : (
//         <>
//           {/* ── Desktop / Tablet table ── */}
//           <div className="hidden overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] md:block">
//             <table className="w-full min-w-[640px] border-collapse">
//               <thead className="sticky top-0 z-10 bg-[#0a0a0a]/90 backdrop-blur-xl">
//                 <tr>
//                   <th className="px-6 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-gray-500">
//                     Logo
//                   </th>
//                   <th className="px-4 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-gray-500">
//                     Company
//                   </th>
//                   <th className="px-4 py-3.5 text-left text-[11px] font-semibold uppercase tracking-wider text-gray-500">
//                     Symbol
//                   </th>
//                   <th className="px-4 py-3.5 text-right text-[11px] font-semibold uppercase tracking-wider text-gray-500">
//                     Price
//                   </th>
//                   <th className="px-4 py-3.5 text-right text-[11px] font-semibold uppercase tracking-wider text-gray-500">
//                     Today's Change
//                   </th>
//                   <th className="px-6 py-3.5 text-right text-[11px] font-semibold uppercase tracking-wider text-gray-500">
//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {WATCHLIST.map((stock) => (
//                   <tr
//                     key={stock.id}
//                     className="cursor-pointer border-t border-white/[0.06] transition-all duration-300
//                                hover:-translate-y-0.5 hover:bg-white/5"
//                   >
//                     <td className="px-6 py-4">
//                       <StockLogo company={stock.company} id={stock.id} />
//                     </td>
//                     <td className="px-4 py-4">
//                       <span className="text-sm font-semibold text-white">{stock.company}</span>
//                     </td>
//                     <td className="px-4 py-4">
//                       <span className="text-xs font-medium text-gray-500">{stock.symbol}</span>
//                     </td>
//                     <td className="px-4 py-4 text-right">
//                       <span className="text-sm font-bold text-white">${stock.price.toFixed(2)}</span>
//                     </td>
//                     <td className="px-4 py-4 text-right">
//                       <ChangeBadge change={stock.change} />
//                     </td>
//                     <td className="px-6 py-4">
//                       <div className="flex justify-end">
//                         <button
//                           type="button"
//                           aria-label="Remove from watchlist"
//                           className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5
//                                      text-xs font-medium text-gray-500 transition-all duration-300
//                                      hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
//                         >
//                           <Trash2 size={13} strokeWidth={2} />
//                           Remove
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* ── Mobile cards ── */}
//           <div className="flex flex-col gap-3 md:hidden">
//             {WATCHLIST.map((stock) => (
//               <StockCard key={stock.id} stock={stock} />
//             ))}
//           </div>
//         </>
//       )}
//     </section>
//   );
// }
