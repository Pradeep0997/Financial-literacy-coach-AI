import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnalogyCard from '../components/Education/AnalogyCard';
import { ShoppingBasket, Activity, TrendingUp, ShieldCheck, Clock, Anchor, X, Lightbulb } from 'lucide-react';

const LearnHub = () => {
  const [selectedAnalogy, setSelectedAnalogy] = useState(null);

  const analogies = [
    { 
      icon: ShoppingBasket, 
      title: "Mutual Funds", 
      analogy: "A Fruit Basket", 
      desc: "Don't buy just one apple. Buy a basket.",
      details: "Imagine buying 20 fruits separately—it's expensive and tiring. A Fruit Basket (Mutual Fund) gives you a mix instantly. If the apples (one company) are sour, the sweet mangoes (other companies) save the day! You get variety with low risk."
    },
    { 
      icon: Activity, 
      title: "SIP", 
      analogy: "Gym Membership", 
      desc: "Small weights everyday builds muscle.",
      details: "Going to the gym once for 10 hours hurts you. Going for 30 mins daily changes your life. SIP is that daily 30 mins for your wallet. You invest a small amount consistently, ignoring market 'weather', and build massive wealth (muscle) over time."
    },
    { 
      icon: TrendingUp, 
      title: "Compounding", 
      analogy: "Rolling Snowball", 
      desc: "Small snowball becomes an avalanche.",
      details: "You push a small snowball down a hill. At first, it's tiny. But as it rolls, it sticks to more snow. After 10 years, the 'interest on interest' makes your money grow faster than you can imagine. The earlier you start pushing, the bigger the avalanche!"
    },
    { 
      icon: ShieldCheck, 
      title: "Insurance", 
      analogy: "An Umbrella", 
      desc: "Keeps you dry when the storm hits.",
      details: "An umbrella costs money, and on sunny days, it feels useless. But when a storm (hospital bill or accident) hits, you stay dry while others get soaked in debt. It doesn't stop the rain, but it protects your financial health."
    },
    { 
      icon: Clock, 
      title: "Long Term", 
      analogy: "Planting a Tree", 
      desc: "Wait for the fruit.",
      details: "If you dig up a seed every day to check if it's growing, it dies. You water it and wait. The stock market is the same. In the short term, it looks like nothing is happening (or it's messy). Give it 5 years, and you have shade and fruit forever."
    },
    { 
      icon: Anchor, 
      title: "Fixed Deposit", 
      analogy: "Parking Lot", 
      desc: "Safe, but doesn't go far.",
      details: "A parking lot is safe; your car won't crash there. But it won't get you from Delhi to Mumbai. FDs keep money safe, but inflation (traffic) usually moves faster than FD interest, so you actually lose purchasing power over time."
    },
  ];

  return (
    <div className="space-y-6 relative">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Learn by Analogy</h1>
        <p className="text-gray-500 mt-2">Click on any card to see the real-world magic behind the math.</p>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {analogies.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedAnalogy(item)}
            className="cursor-pointer"
          >
            {/* We assume AnalogyCard renders the basic info. 
                The onClick on this wrapper handles the opening. */}
            <AnalogyCard {...item} />
          </motion.div>
        ))}
      </div>

      {/* MODAL POPUP - The Interactive Part */}
      <AnimatePresence>
        {selectedAnalogy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Dark Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAnalogy(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* The Modal Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
            >
              {/* Header Color Bar */}
              <div className="h-32 bg-brand-600 flex items-center justify-center relative">
                <button 
                  onClick={() => setSelectedAnalogy(null)}
                  className="absolute top-4 right-4 bg-black/20 text-white p-2 rounded-full hover:bg-black/40 transition"
                >
                  <X size={20} />
                </button>
                <div className="bg-white p-4 rounded-full shadow-lg mt-10">
                  <selectedAnalogy.icon size={40} className="text-brand-600" />
                </div>
              </div>

              {/* Content */}
              <div className="px-8 pt-12 pb-8 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-1">{selectedAnalogy.title}</h2>
                <div className="text-accent-500 font-medium mb-6 uppercase tracking-wider text-sm flex items-center justify-center gap-2">
                   is like {selectedAnalogy.analogy}
                </div>

                <div className="bg-brand-50 rounded-2xl p-6 text-left border border-brand-100">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="text-brand-600 shrink-0 mt-1" size={24} />
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {selectedAnalogy.details}
                    </p>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedAnalogy(null)}
                  className="mt-6 text-gray-400 hover:text-gray-800 text-sm font-medium transition"
                >
                  Close Example
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default LearnHub;
