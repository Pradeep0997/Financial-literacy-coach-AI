import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, CheckCircle, Zap, Brain, TrendingUp } from 'lucide-react';

const MythBuster = () => {
  const [activeTab, setActiveTab] = useState('myths');

  const myths = [
    {
      id: 1,
      myth: "The Stock Market is just Gambling 🎲",
      truth: "Gambling depends on luck. Investing depends on business growth. When you buy a share, you own a part of a real company like Tata or Reliance. Over 10+ years, the market has consistently beaten inflation, while gambling always favors the house.",
      color: "from-red-500 to-orange-500"
    },
    {
      id: 2,
      myth: "I need Lakhs to start investing 💰",
      truth: "You can start with just ₹500! A Systematic Investment Plan (SIP) allows you to invest small amounts monthly. It's not about how much you have, it's about how early you start.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 3,
      myth: "If the market falls, I lose everything 📉",
      truth: "You only lose if you sell! A market fall is like a 'Discount Sale'. If you stay invested, history shows the market recovers and goes higher. The Nifty 50 has recovered from every single crash in history.",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      myth: "Mutual Funds are a Scam 🚫",
      truth: "Mutual Funds are strictly regulated by SEBI (Govt of India). Your money is not held by the app, but by independent Trust companies. Even if an app shuts down, your units are safe in your name.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-yellow-500/20 rounded-lg text-yellow-400">
              <Zap size={24} />
            </div>
            <h1 className="text-3xl font-bold">Myth Buster Hub</h1>
          </div>
          <p className="text-gray-300 max-w-xl text-lg">
            Fear comes from the unknown. We use logic and data to break the most common lies that stop Indians from becoming wealthy.
          </p>
        </div>
        {/* Background Decoration */}
        <div className="absolute right-0 top-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
          <Brain size={300} />
        </div>
      </div>

      {/* Grid of Myths */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {myths.map((item) => (
          <MythCard key={item.id} item={item} />
        ))}
      </div>

      {/* Mini Temperament Check Section */}
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="text-brand-600" />
            <h3 className="font-bold text-gray-800 text-xl">Know Yourself</h3>
          </div>
          <p className="text-gray-600">
            Your "Financial Temperament" decides 80% of your success. Are you a panic-seller or a patient builder?
          </p>
        </div>
        <a 
          href="/risk" 
          className="bg-brand-50 text-brand-700 px-6 py-3 rounded-xl font-bold hover:bg-brand-100 transition flex items-center gap-2"
        >
          Take the Quiz Again <Brain size={18} />
        </a>
      </div>
    </div>
  );
};

// Interactive Card Component
const MythCard = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="h-[280px] perspective-1000 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div 
        className="relative w-full h-full transition-all duration-500 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* FRONT SIDE (MYTH) */}
        <div className={`absolute w-full h-full backface-hidden rounded-2xl p-8 flex flex-col justify-center items-center text-center shadow-lg bg-gradient-to-br ${item.color} text-white`}>
          <div className="bg-white/20 p-4 rounded-full mb-4 backdrop-blur-sm">
            <AlertTriangle size={32} />
          </div>
          <h3 className="text-2xl font-bold">"{item.myth}"</h3>
          <p className="mt-4 text-white/80 text-sm font-semibold uppercase tracking-wider animate-pulse">
            Tap to reveal truth
          </p>
        </div>

        {/* BACK SIDE (TRUTH) */}
        <div className="absolute w-full h-full backface-hidden rounded-2xl p-8 bg-white border-2 border-brand-100 shadow-xl flex flex-col justify-center rotate-y-180">
          <div className="flex items-center gap-2 mb-4 text-green-600">
            <CheckCircle size={24} />
            <span className="font-bold uppercase tracking-widest text-sm">The Reality</span>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">
            {item.truth}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default MythBuster;
