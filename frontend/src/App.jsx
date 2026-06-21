// import { motion } from "framer-motion";

// export default function App() {
//   return (
//     <div className="flex h-screen items-center justify-center bg-black">
//       <motion.div
//         initial={{ x: -200, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="rounded-xl bg-green-500 p-10 text-white"
//       >
//         Animation Test
//       </motion.div>
//     </div>
//   );
// }

import Hero from "./components/Hero";
import TrendingStocks from "./components/TrendingStocks";
import MarketOverview from "./components/MarketOverview";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Hero />
      <TrendingStocks />
      <MarketOverview />
      <Footer />
    </>
  );
}

export default App;

// {/* <>
//   <Hero />
//   <TrendingStocks />

//   {/* TESTING ONLY */}
//   <div className="h-[500px]"></div>

//   <MarketOverview />
// </> */}