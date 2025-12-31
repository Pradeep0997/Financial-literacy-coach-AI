import { useState } from 'react';
import { TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';

const Simulator = () => {
  const [marketState, setMarketState] = useState('neutral'); // neutral, up, crash

  const scenarios = {
    neutral: {
      text: "Normal Market",
      desc: "Your SIP continues buying units at average price.",
      color: "bg-gray-100 text-gray-600"
    },
    up: {
      text: "Market Boom (High)",
      desc: "Value goes up! But your SIP buys FEWER units (expensive).",
      color: "bg-green-100 text-green-700"
    },
    crash: {
      text: "Market Crash (-20%)",
      desc: "Panic? No! Your SIP buys MORE units (cheap). This is a sale!",
      color: "bg-red-100 text-red-700"
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
      <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
        <AlertCircle size={20} className="text-accent-500" />
        Panic Simulator
      </h3>
      
      <div className="flex gap-2 mb-6">
        <button onClick={() => setMarketState('up')} className="flex-1 py-2 text-sm font-medium rounded-lg bg-green-50 text-green-600 hover:bg-green-100 border border-green-200">
          Market Up 🚀
        </button>
        <button onClick={() => setMarketState('crash')} className="flex-1 py-2 text-sm font-medium rounded-lg bg-red-50 text-red-600 hover:bg-red-100 border border-red-200">
          Market Crash 📉
        </button>
      </div>

      <div className={`p-4 rounded-xl border transition-all duration-500 ${scenarios[marketState].color} border-current`}>
        <div className="font-bold text-lg mb-1">{scenarios[marketState].text}</div>
        <p className="text-sm opacity-90">{scenarios[marketState].desc}</p>
      </div>
    </div>
  );
};
export default Simulator;
