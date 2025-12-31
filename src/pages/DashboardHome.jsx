import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useUser } from '../context/UserContext';
import { Link } from 'react-router-dom';
import { TrendingUp, MessageSquare, Zap, ArrowRight, TreeDeciduous, Coins, Sprout } from 'lucide-react';

const DashboardHome = () => {
  const { user } = useUser();
  
  // Compound Lab State
  const [monthlyInv, setMonthlyInv] = useState(5000);
  const [years, setYears] = useState(10);
  const [returnRate, setReturnRate] = useState(12);

  // Wealth Calculation Logic
  const { invested, totalValue, wealthGained } = useMemo(() => {
    const monthlyRate = returnRate / 12 / 100;
    const months = years * 12;
    const totalValue = monthlyInv * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    const invested = monthlyInv * months;
    return {
      invested: Math.round(invested),
      totalValue: Math.round(totalValue),
      wealthGained: Math.round(totalValue - invested)
    };
  }, [monthlyInv, years, returnRate]);

  // Tree Analogy Logic
  const getTreeMessage = () => {
    if (years < 5) return { icon: Sprout, text: "It's just a sapling. You must water it (invest) and wait. No fruit yet!" };
    if (years < 15) return { icon: TreeDeciduous, text: "The tree is growing strong. It gives shade (security), but the real fruit comes later." };
    return { icon: Coins, text: "It's a massive Banyan Tree! The fruit (compound interest) is now bigger than the water you give it." };
  };

  const treeStatus = getTreeMessage();

  return (
    <div className="space-y-8 pb-10">
      
      {/* 1. HERO SECTION: Welcome & Emotional Hook */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-end gap-4"
      >
        <div>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Namaste, {user?.name || 'Investor'} <span className="inline-block animate-wave">👋</span>
          </h1>
          <p className="text-gray-500 mt-2 text-lg max-w-2xl">
            Fear comes from imagination. Clarity comes from action. <br/>
            Your goal is <span className="font-bold text-brand-600">{user?.goal}</span>. Let's build it.
          </p>
        </div>
      </motion.div>

      {/* 2. COMPOUND LAB: The Hero Feature */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
      >
        <div className="bg-brand-600 p-6 text-white flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-xl">
              <TrendingUp size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold">Compound Lab</h2>
              <p className="text-brand-100 text-sm">Simulate your future wealth</p>
            </div>
          </div>
          <div className="hidden sm:flex bg-brand-700 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase">
            Interactive Simulator
          </div>
        </div>

        <div className="p-8 grid lg:grid-cols-2 gap-12">
          
          {/* Controls */}
          <div className="space-y-8">
            <SliderControl 
              label="Monthly Investment (SIP)" 
              value={monthlyInv} 
              setValue={setMonthlyInv} 
              min={500} max={100000} step={500} 
              prefix="₹" 
            />
            <SliderControl 
              label="Time Period (Years)" 
              value={years} 
              setValue={setYears} 
              min={1} max={30} step={1} 
              suffix=" Years" 
            />
            <SliderControl 
              label="Expected Return (CAGR)" 
              value={returnRate} 
              setValue={setReturnRate} 
              min={5} max={20} step={0.5} 
              suffix="%" 
            />
            
            {/* AI Insight Box */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex gap-4 items-center">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                <treeStatus.icon size={24} />
              </div>
              <div>
                <h4 className="font-bold text-blue-800 text-sm mb-1">AI Analogy</h4>
                <p className="text-blue-600 text-sm leading-snug">{treeStatus.text}</p>
              </div>
            </div>
          </div>

          {/* Visualization */}
          <div className="flex flex-col justify-center space-y-6">
             <div className="text-center">
                <p className="text-gray-500 font-medium mb-1">Projected Wealth</p>
                <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
                  ₹{totalValue.toLocaleString('en-IN')}
                </h3>
             </div>

             {/* The Bar Chart */}
             <div className="h-64 flex items-end gap-4 justify-center px-4 relative">
                {/* Invested Bar */}
                <div className="w-1/3 flex flex-col justify-end h-full group">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${(invested / totalValue) * 100}%` }}
                    className="bg-gray-300 w-full rounded-t-2xl relative"
                  >
                     <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        You Paid: ₹{invested.toLocaleString()}
                     </div>
                  </motion.div>
                  <p className="text-center text-xs font-bold text-gray-400 mt-3 uppercase tracking-wider">Invested</p>
                </div>

                {/* Total Value Bar */}
                <div className="w-1/3 flex flex-col justify-end h-full group">
                   <motion.div 
                     initial={{ height: 0 }}
                     animate={{ height: '100%' }}
                     className="bg-gradient-to-t from-brand-600 to-brand-400 w-full rounded-t-2xl relative"
                   >
                     <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-brand-700 bg-brand-100 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Gain: ₹{wealthGained.toLocaleString()}
                     </div>
                   </motion.div>
                   <p className="text-center text-xs font-bold text-brand-600 mt-3 uppercase tracking-wider">Growth</p>
                </div>
             </div>
             
             <p className="text-center text-xs text-gray-400">
               *Values are estimates based on constant return rate.
             </p>
          </div>
        </div>
      </motion.div>

      {/* 3. BENTO GRID: Quick Actions */}
      <h3 className="text-xl font-bold text-gray-800 px-1">Explore FinMantra</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Chat Card */}
        <Link to="/chat" className="group md:col-span-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2 opacity-80">
                <MessageSquare size={18} /> <span>AI Financial Coach</span>
              </div>
              <h3 className="text-2xl font-bold max-w-md">"Hey Coach, is it safe to invest now?"</h3>
            </div>
            <div className="flex items-center gap-2 mt-6 font-semibold group-hover:gap-4 transition-all">
              Chat Now <ArrowRight size={20} />
            </div>
          </div>
          <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-10 translate-y-10 rotate-12">
            <MessageSquare size={200} />
          </div>
        </Link>

        {/* Myth Buster Card */}
        <Link to="/myths" className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:border-brand-200 hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Bust the Myths</h3>
            <p className="text-gray-500 text-sm mt-2">Gambling vs Investing. What's the truth?</p>
          </div>
          <div className="mt-4 flex justify-end text-brand-600">
            <ArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </div>
        </Link>
      </div>
    </div>
  );
};

// Helper for Range Sliders with Framer Motion visual
const SliderControl = ({ label, value, setValue, min, max, step, prefix = '', suffix = '' }) => (
  <div>
    <div className="flex justify-between mb-2">
      <label className="text-sm font-semibold text-gray-700">{label}</label>
      <span className="text-sm font-bold text-brand-600 bg-brand-50 px-2 py-1 rounded-md">
        {prefix}{value.toLocaleString()}{suffix}
      </span>
    </div>
    <input 
      type="range" 
      min={min} max={max} step={step} 
      value={value} 
      onChange={(e) => setValue(Number(e.target.value))}
      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-600 hover:accent-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-200"
    />
  </div>
);

export default DashboardHome;
