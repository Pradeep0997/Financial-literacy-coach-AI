import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { ArrowRight, Wallet, ShieldAlert, Target } from 'lucide-react';

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ name: '', fear: '', goal: '' });
  const { saveUser } = useUser();
  const navigate = useNavigate();

  // Step 1: Name Input (Only typing part)
  // Step 2: Fears (Options)
  // Step 3: Goals (Options)

  const fears = [
    { icon: "📉", text: "Market Crashing" },
    { icon: "🤯", text: "It's too complicated" },
    { icon: "💸", text: "Losing my savings" },
    { icon: "👮", text: "Scams & Fraud" }
  ];

  const goals = [
    { icon: "🏠", text: "Buy a Home" },
    { icon: "🚲", text: "Buy a Vehicle" },
    { icon: "💰", text: "Emergency Fund" },
    { icon: "✈️", text: "Travel" },
    { icon: "📈", text: "Wealth Creation" }
  ];

  const handleNext = (key, value) => {
    const newData = { ...data, [key]: value };
    setData(newData);
    
    if (step === 2) {
      saveUser(newData);
      navigate('/dashboard');
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className="min-h-screen bg-brand-50 flex items-center justify-center p-4">
      <motion.div 
        key={step}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="max-w-2xl w-full"
      >
        {/* Step 0: Name */}
        {step === 0 && (
          <div className="bg-white p-10 rounded-3xl shadow-xl text-center">
            <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Wallet size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-2">Welcome to FinMantra</h2>
            <p className="text-gray-500 mb-8">Your journey to financial confidence starts here.</p>
            <input 
              type="text"
              placeholder="What should we call you?"
              className="w-full text-center text-2xl p-4 border-b-2 border-gray-200 focus:border-brand-500 outline-none mb-8"
              onKeyPress={(e) => e.key === 'Enter' && handleNext('name', e.target.value)}
              onChange={(e) => setData({...data, name: e.target.value})}
            />
            <button 
              onClick={() => data.name && handleNext('name', data.name)}
              className="bg-brand-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-brand-700 transition"
            >
              Let's Go
            </button>
          </div>
        )}

        {/* Step 1: Fear */}
        {step === 1 && (
          <div className="bg-white p-10 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-center">What scares you most?</h2>
            <div className="grid grid-cols-2 gap-4">
              {fears.map((f) => (
                <button
                  key={f.text}
                  onClick={() => handleNext('fear', f.text)}
                  className="p-6 border border-gray-100 rounded-2xl hover:border-brand-500 hover:bg-brand-50 transition text-left group"
                >
                  <span className="text-3xl mb-2 block">{f.icon}</span>
                  <span className="font-semibold text-gray-700 group-hover:text-brand-700">{f.text}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Goal */}
        {step === 2 && (
          <div className="bg-white p-10 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-center">What is your big dream?</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {goals.map((g) => (
                <button
                  key={g.text}
                  onClick={() => handleNext('goal', g.text)}
                  className="p-6 border border-gray-100 rounded-2xl hover:border-brand-500 hover:bg-brand-50 transition text-center group flex flex-col items-center"
                >
                  <span className="text-3xl mb-3 block">{g.icon}</span>
                  <span className="font-semibold text-gray-700 group-hover:text-brand-700">{g.text}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
export default Onboarding;
