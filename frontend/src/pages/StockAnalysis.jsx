// import Sidebar from "../components/StockAnalysis/1_sidebar";
// import Navbar from "../components/StockAnalysis/1_Navbar";
// import StockHeader from "../components/StockAnalysis/1_StockHeader";

// export default function StockAnalysis() {
//   return (
//     <div className="min-h-screen bg-[#050505] flex">
//       <Sidebar />

//       <div className="flex-1">
//         <Navbar />

//         <main className="p-8">
//           <StockHeader />
//         </main>
//       </div>
//     </div>
//   );
// }



import Navbar_1 from "../components/stockAnalysis/Navbar_1";
import StockHeader from "../components/stockAnalysis/StockHeader";
import StockChart from "../components/stockAnalysis/StockChart";
import AiAnaysisCard from "../components/stockAnalysis/AiAnalysisCard";
import Technical from "../components/StockAnalysis/Technical";
import FinancialMetrics from "../components/StockAnalysis/MetricsIndicator";
// import SimilarStocks from "../components/StockAnalysis/SimilarStocks";
// import AiPrediction from "../components/StockAnalysis/AiPrediction";
import News from "../components/StockAnalysis/News";

export default function StockAnalysis() {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-8">
      <Navbar_1 />
      <StockHeader />
      <StockChart />
      <AiAnaysisCard />
      <Technical />
      <FinancialMetrics />
      {/* <SimilarStocks /> */}
      {/* <AiPrediction /> */}
      <News />
    </div>
  );
}