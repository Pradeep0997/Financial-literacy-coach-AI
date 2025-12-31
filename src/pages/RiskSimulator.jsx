import { useState } from 'react';
import Simulator from '../components/Education/Simulator'; // Reuse your existing component
import { CheckCircle } from 'lucide-react';

const RiskSimulator = () => {
  const [stage, setStage] = useState('quiz'); // quiz, result
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 1,
      text: "If your investment drops 20% in one month, what do you do?",
      options: [
        { text: "Sell everything immediately", points: 1 },
        { text: "Wait and watch nervously", points: 2 },
        { text: "Buy more because it's cheap", points: 3 }
      ]
    },
    {
      id: 2,
      text: "When do you need this money back?",
      options: [
        { text: "In less than 1 year", points: 1 },
        { text: "In 3-5 years", points: 2 },
        { text: "After 7+ years", points: 3 }
      ]
    },
    {
      id: 3,
      text: "What matters more to you?",
      options: [
        { text: "Guaranteed safety (No loss)", points: 1 },
        { text: "Beating inflation (Moderate growth)", points: 2 },
        { text: "Maximum wealth (High growth)", points: 3 }
      ]
    }
  ];

  const handleAnswer = (qId, points) => {
    const newAnswers = { ...answers, [qId]: points };
    setAnswers(newAnswers);
    
    if (Object.keys(newAnswers).length === questions.length) {
      const total = Object.values(newAnswers).reduce((a, b) => a + b, 0);
      setScore(total);
      setStage('result');
    }
  };

  const getProfile = () => {
    if (score <= 4) return { type: "Conservative Saver", color: "bg-blue-100 text-blue-700", desc: "You prefer safety. FDs and Liquid Funds suit you best." };
    if (score <= 7) return { type: "Balanced Investor", color: "bg-purple-100 text-purple-700", desc: "You want growth but can't handle too much volatility. Index Funds are great for you." };
    return { type: "Aggressive Grower", color: "bg-green-100 text-green-700", desc: "You are playing for the long term. Mid-cap and Small-cap funds are your playground." };
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Risk Simulator</h1>
      <p className="text-gray-500 mb-8">Discover your investor personality before putting in real money.</p>

      {stage === 'quiz' && (
        <div className="space-y-8">
          {questions.map((q) => (
            <div key={q.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">{q.text}</h3>
              <div className="grid md:grid-cols-3 gap-3">
                {q.options.map((opt) => (
                  <button
                    key={opt.text}
                    onClick={() => handleAnswer(q.id, opt.points)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      answers[q.id] === opt.points 
                        ? 'bg-brand-600 text-white border-brand-600 shadow-md' 
                        : 'bg-gray-50 hover:bg-gray-100 border-gray-200'
                    }`}
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {stage === 'result' && (
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 text-center">
            <div className="inline-block p-3 bg-green-100 text-green-600 rounded-full mb-4">
              <CheckCircle size={32} />
            </div>
            <h2 className="text-2xl font-bold mb-2">You are a</h2>
            <div className={`inline-block px-6 py-2 rounded-full font-bold text-xl mb-4 ${getProfile().color}`}>
              {getProfile().type}
            </div>
            <p className="text-gray-600 max-w-lg mx-auto">{getProfile().desc}</p>
            <button 
              onClick={() => { setStage('quiz'); setAnswers({}); }}
              className="mt-6 text-sm text-gray-400 hover:text-brand-600 underline"
            >
              Retake Quiz
            </button>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">See how market crashes affect you</h2>
            <Simulator />
          </div>
        </div>
      )}
    </div>
  );
};
export default RiskSimulator;
