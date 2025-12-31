import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useUser } from './context/UserContext';
import Onboarding from './pages/Onboarding';
import DashboardLayout from './components/Layout/DashboardLayout';
import LearnHub from './pages/LearnHub';
import RiskSimulator from './pages/RiskSimulator';
import ChatInterface from './components/AICoach/ChatInterface'; // Import your existing component
import Navbar from './components/Layout/Navbar'; // We might not need this inside dashboard anymore

// Simple Dashboard Home Component
const DashboardHome = () => {
  const { user } = useUser();
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome Back, {user?.name} 👋</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-2">Your Goal: {user?.goal}</h2>
            <p className="text-brand-100">Don't let "{user?.fear}" stop you.</p>
            <a href="/chat" className="inline-block mt-6 bg-white text-brand-700 px-6 py-2 rounded-full font-bold hover:bg-brand-50 transition">
              Ask Coach Now
            </a>
          </div>
          <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-10 translate-y-10">
            <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
          </div>
        </div>
        
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-center items-start">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Continue Learning</h3>
            <p className="text-gray-500 mb-4">Master the basics of mutual funds.</p>
            <a href="/learn" className="text-brand-600 font-semibold hover:underline">Go to Learn Center →</a>
        </div>
      </div>
    </div>
  );
};

function App() {
  const { user } = useUser();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Onboarding />} />
        
        {/* Protected Dashboard Routes */}
        <Route element={user ? <DashboardLayout /> : <Navigate to="/" />}>
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/chat" element={<div className="h-full"><h1 className="text-3xl font-bold mb-6">AI Coach</h1><ChatInterface /></div>} />
          <Route path="/learn" element={<LearnHub />} />
          <Route path="/risk" element={<RiskSimulator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
