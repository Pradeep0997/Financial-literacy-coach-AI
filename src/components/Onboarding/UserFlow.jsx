import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const UserFlow = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ name: '', fear: '', goal: '' });

  const questions = [
    { key: 'name', title: "Let's start!", subtitle: "What should we call you?", placeholder: "e.g. Rahul, Priya" },
    { key: 'fear', title: "Honest talk.", subtitle: "What scares you about money?", placeholder: "e.g. Losing it all, Math, Complexity" },
    { key: 'goal', title: "Dream big.", subtitle: "What is your first financial goal?", placeholder: "e.g. Buying a bike, Emergency Fund" },
  ];

  const handleNext = () => {
    if (!formData[questions[step].key]) return; // Prevent empty skip
    if (step < 2) setStep(step + 1);
    else onComplete(formData);
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-gray-100 p-8 relative overflow-hidden"
        >
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 h-1 bg-brand-100 w-full">
            <div 
              className="h-full bg-brand-500 transition-all duration-500" 
              style={{ width: `${((step + 1) / 3) * 100}%` }} 
            />
          </div>

          <div className="mt-4 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{questions[step].title}</h2>
            <p className="text-gray-500 text-lg">{questions[step].subtitle}</p>
          </div>

          <input
            autoFocus
            type="text"
            className="w-full p-4 text-xl border-b-2 border-gray-200 focus:border-brand-500 focus:outline-none bg-transparent transition-colors placeholder:text-gray-300"
            placeholder={questions[step].placeholder}
            value={formData[questions[step].key]}
            onChange={(e) => setFormData({ ...formData, [questions[step].key]: e.target.value })}
            onKeyDown={(e) => e.key === 'Enter' && handleNext()}
          />

          <button
            onClick={handleNext}
            className="mt-10 w-full bg-brand-600 hover:bg-brand-700 text-white py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand-200 group"
          >
            {step === 2 ? "Build My Plan" : "Next"}
            {step === 2 ? <CheckCircle size={20} /> : <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export default UserFlow;
