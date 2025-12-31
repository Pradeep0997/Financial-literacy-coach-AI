// src/App.jsx

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useUser } from './context/UserContext';
import Onboarding from './pages/Onboarding';
import DashboardLayout from './components/Layout/DashboardLayout';
import LearnHub from './pages/LearnHub';
import RiskSimulator from './pages/RiskSimulator';
import MythBuster from './pages/MythBuster';
import SafetyHub from './pages/SafetyHub';
import ChatInterface from './components/AICoach/ChatInterface';
import DashboardHome from './pages/DashboardHome'; // 👈 IMPORT THE NEW PAGE

function App() {
  const { user } = useUser();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Onboarding />} />
        
        {/* Protected Dashboard Routes */}
        <Route element={user ? <DashboardLayout /> : <Navigate to="/" />}>
          <Route path="/dashboard" element={<DashboardHome />} /> {/* 👈 USE IT HERE */}
          <Route path="/chat" element={<div className="h-full"><h1 className="text-3xl font-bold mb-6">AI Coach</h1><ChatInterface /></div>} />
          <Route path="/learn" element={<LearnHub />} />
          <Route path="/risk" element={<RiskSimulator />} />
          <Route path="/myths" element={<MythBuster />} />
          <Route path="/safety" element={<SafetyHub />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
