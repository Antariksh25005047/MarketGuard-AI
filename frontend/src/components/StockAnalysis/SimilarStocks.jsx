// import { TrendingUp, TrendingDown, Minus, Apple, Monitor, Cpu, ShoppingCart, MessageSquare } from "lucide-react";

// // ─── Data ─────────────────────────────────────────────────────────────────────

// const STOCKS = [
//   {
//     id: "aapl",
//     name: "Apple",
//     symbol: "AAPL",
//     price: "$195.24",
//     change: "+1.24%",
//     positive: true,
//     aiRating: 91,
//     trend: "Bullish",
//     icon: Apple,
//     iconColor: "#e5e7eb",
//     iconBg: "rgba(229,231,235,0.08)",
//     iconBorder: "rgba(229,231,235,0.12)",
//     accentColor: "#22C55E",
//   },
//   {
//     id: "msft",
//     name: "Microsoft",
//     symbol: "MSFT",
//     price: "$421.52",
//     change: "+0.91%",
//     positive: true,
//     aiRating: 89,
//     trend: "Bullish",
//     icon: Monitor,
//     iconColor: "#60A5FA",
//     iconBg: "rgba(96,165,250,0.08)",
//     iconBorder: "rgba(96,165,250,0.14)",
//     accentColor: "#60A5FA",
//   },
//   {
//     id: "nvda",
//     name: "NVIDIA",
//     symbol: "NVDA",
//     price: "$892.14",
//     change: "+3.12%",
//     positive: true,
//     aiRating: 95,
//     trend: "Strong Bullish",
//     icon: Cpu,
//     iconColor: "#4ADE80",
//     iconBg: "rgba(74,222,128,0.08)",
//     iconBorder: "rgba(74,222,128,0.14)",
//     accentColor: "#22C55E",
//   },
//   {
//     id: "amzn",
//     name: "Amazon",
//     symbol: "AMZN",
//     price: "$186.45",
//     change: "-0.42%",
//     positive: false,
//     aiRating: 84,
//     trend: "Neutral",
//     icon: ShoppingCart,
//     iconColor: "#FBBF24",
//     iconBg: "rgba(251,191,36,0.08)",
//     iconBorder: "rgba(251,191,36,0.14)",
//     accentColor: "#FBBF24",
//   },
//   {
//     id: "meta",
//     name: "Meta",
//     symbol: "META",
//     price: "$510.32",
//     change: "+2.08%",
//     positive: true,
//     aiRating: 90,
//     trend: "Bullish",
//     icon: MessageSquare,
//     iconColor: "#818CF8",
//     iconBg: "rgba(129,140,248,0.08)",
//     iconBorder: "rgba(129,140,248,0.14)",
//     accentColor: "#818CF8",
//   },
// ];

// // ─── Trend config ─────────────────────────────────────────────────────────────

// function trendConfig(trend) {
//   if (trend === "Strong Bullish")
//     return { icon: TrendingUp, color: "#22C55E", bg: "rgba(34,197,94,0.10)", border: "rgba(34,197,94,0.20)", label: "Strong Bullish" };
//   if (trend === "Bullish")
//     return { icon: TrendingUp, color: "#4ADE80", bg: "rgba(74,222,128,0.09)", border: "rgba(74,222,128,0.18)", label: "Bullish" };
//   if (trend === "Bearish")
//     return { icon: TrendingDown, color: "#F87171", bg: "rgba(248,113,113,0.09)", border: "rgba(248,113,113,0.18)", label: "Bearish" };
//   return { icon: Minus, color: "#9CA3AF", bg: "rgba(156,163,175,0.09)", border: "rgba(156,163,175,0.18)", label: "Neutral" };
// }

// // ─── AI Rating bar color ───────────────────────────────────────────────────────

// function ratingColor(score) {
//   if (score >= 90) return "#22C55E";
//   if (score >= 80) return "#4ADE80";
//   if (score >= 70) return "#FBBF24";
//   return "#F87171";
// }

// // ─── Single Card ──────────────────────────────────────────────────────────────

// function StockCard({ stock }) {
//   const { name, symbol, price, change, positive, aiRating, trend, icon: Icon, iconColor, iconBg, iconBorder } = stock;
//   const tc = trendConfig(trend);
//   const TrendIcon = tc.icon;
//   const rc = ratingColor(aiRating);

//   return (
//     <div className="ss-card">
//       {/* Top row: logo + name/symbol */}
//       <div className="ss-top">
//         <div className="ss-logo" style={{ background: iconBg, border: `1px solid ${iconBorder}` }}>
//           <Icon size={15} color={iconColor} strokeWidth={2} />
//         </div>
//         <div className="ss-identity">
//           <span className="ss-name">{name}</span>
//           <span className="ss-symbol">{symbol}</span>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="ss-divider" />

//       {/* Price row */}
//       <div className="ss-price-row">
//         <span className="ss-price">{price}</span>
//         <span
//           className="ss-change"
//           style={{ color: positive ? "#22C55E" : "#F87171", background: positive ? "rgba(34,197,94,0.08)" : "rgba(248,113,113,0.08)", border: `1px solid ${positive ? "rgba(34,197,94,0.16)" : "rgba(248,113,113,0.16)"}` }}
//         >
//           {positive ? "▲" : "▼"} {change.replace(/[+-]/, "")}
//         </span>
//       </div>

//       {/* AI Rating */}
//       <div className="ss-rating-row">
//         <span className="ss-rating-label">AI Score</span>
//         <div className="ss-rating-track">
//           <div className="ss-rating-fill" style={{ width: `${aiRating}%`, background: `linear-gradient(90deg, ${rc}99, ${rc})` }} />
//         </div>
//         <span className="ss-rating-value" style={{ color: rc }}>{aiRating}%</span>
//       </div>

//       {/* Trend badge */}
//       <div className="ss-trend" style={{ background: tc.bg, border: `1px solid ${tc.border}`, color: tc.color }}>
//         <TrendIcon size={11} strokeWidth={2.5} />
//         {tc.label}
//       </div>
//     </div>
//   );
// }

// // ─── Main Component ───────────────────────────────────────────────────────────

// export default function SimilarStocks() {
//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

//         .ss-section { width: 100%; padding: 32px 0; font-family: 'Inter', sans-serif; }

//         .ss-header { margin-bottom: 20px; }
//         .ss-title  { font-size: 20px; font-weight: 700; color: #fff; letter-spacing: -0.3px; margin: 0 0 5px; }
//         .ss-subtitle { font-size: 13px; color: #6b7280; margin: 0; font-weight: 400; }

//         /* Scroll container */
//         .ss-scroll {
//           display: grid;
//           grid-template-columns: repeat(5, 1fr);
//           gap: 12px;
//         }
//         @media (max-width: 1100px) {
//           .ss-scroll { grid-template-columns: repeat(3, 1fr); }
//         }
//         @media (max-width: 640px) {
//           .ss-scroll {
//             display: flex;
//             overflow-x: auto;
//             scroll-snap-type: x mandatory;
//             -webkit-overflow-scrolling: touch;
//             gap: 10px;
//             padding-bottom: 8px;
//             scrollbar-width: none;
//           }
//           .ss-scroll::-webkit-scrollbar { display: none; }
//         }

//         /* Card */
//         .ss-card {
//           display: flex;
//           flex-direction: column;
//           gap: 11px;
//           padding: 16px;
//           border-radius: 16px;
//           background: rgba(255,255,255,0.03);
//           border: 1px solid rgba(255,255,255,0.07);
//           backdrop-filter: blur(16px);
//           -webkit-backdrop-filter: blur(16px);
//           cursor: pointer;
//           transition: transform 250ms ease, border-color 250ms ease,
//                       background 250ms ease, box-shadow 250ms ease;
//           min-width: 0;
//           flex-shrink: 0;
//         }
//         @media (max-width: 640px) {
//           .ss-card { min-width: 196px; scroll-snap-align: start; }
//         }
//         .ss-card:hover {
//           transform: translateY(-3px);
//           border-color: rgba(34,197,94,0.28);
//           background: rgba(255,255,255,0.05);
//           box-shadow: 0 8px 28px rgba(0,0,0,0.36);
//         }

//         /* Top */
//         .ss-top { display: flex; align-items: center; gap: 10px; }
//         .ss-logo {
//           width: 34px; height: 34px; border-radius: 50%;
//           display: flex; align-items: center; justify-content: center; flex-shrink: 0;
//         }
//         .ss-identity { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
//         .ss-name   { font-size: 13px; font-weight: 600; color: #e5e7eb; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
//         .ss-symbol { font-size: 10.5px; font-weight: 600; color: #4b5563; letter-spacing: 0.3px; }

//         .ss-divider { height: 1px; background: rgba(255,255,255,0.05); }

//         /* Price */
//         .ss-price-row { display: flex; align-items: center; justify-content: space-between; gap: 6px; }
//         .ss-price     { font-size: 16px; font-weight: 700; color: #f9fafb; letter-spacing: -0.3px; }
//         .ss-change    { font-size: 10.5px; font-weight: 600; padding: 2px 7px; border-radius: 999px; white-space: nowrap; }

//         /* Rating */
//         .ss-rating-row   { display: flex; align-items: center; gap: 7px; }
//         .ss-rating-label { font-size: 10px; font-weight: 600; color: #4b5563; text-transform: uppercase; letter-spacing: 0.3px; white-space: nowrap; }
//         .ss-rating-track {
//           flex: 1; height: 3px; border-radius: 999px;
//           background: rgba(255,255,255,0.07); overflow: hidden;
//         }
//         .ss-rating-fill  { height: 100%; border-radius: 999px; transition: width 600ms ease; }
//         .ss-rating-value { font-size: 10.5px; font-weight: 700; white-space: nowrap; }

//         /* Trend badge */
//         .ss-trend {
//           display: inline-flex; align-items: center; gap: 5px;
//           font-size: 10.5px; font-weight: 600;
//           padding: 4px 10px; border-radius: 999px;
//           width: fit-content; letter-spacing: 0.1px;
//         }
//       `}</style>

//       <section className="ss-section">
//         <div className="ss-header">
//           <h2 className="ss-title">Similar Stocks</h2>
//           <p className="ss-subtitle">Discover companies with similar market trends and industry exposure.</p>
//         </div>

//         <div className="ss-scroll">
//           {STOCKS.map((stock) => (
//             <StockCard key={stock.id} stock={stock} />
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }
