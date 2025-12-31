import { Shield, Lock, FileCheck, Building2, Gavel, Eye } from 'lucide-react';

const SafetyHub = () => {
  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-10">
      
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center p-3 bg-blue-50 text-blue-600 rounded-2xl mb-4">
          <Shield size={40} />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Is My Money Safe?</h1>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Investing involves market risk, but **Structural Risk** (scams/theft) is minimized by India's powerful regulatory framework.
        </p>
      </div>

      {/* The 3 Guardians Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SafetyCard 
          icon={Eye} 
          title="SEBI" 
          sub="Securities & Exchange Board of India"
          desc="The Watchdog. SEBI creates strict rules for Mutual Funds. They ensure no fund manager can cheat you. They work for YOU, not the banks."
          color="bg-blue-50 text-blue-700"
        />
        <SafetyCard 
          icon={Building2} 
          title="RBI" 
          sub="Reserve Bank of India"
          desc="The Money Keeper. RBI regulates the banking channels used to transfer your money. They ensure your bank transactions are secure and tracked."
          color="bg-green-50 text-green-700"
        />
        <SafetyCard 
          icon={Gavel} 
          title="AMFI" 
          sub="Association of Mutual Funds in India"
          desc="The Standard Setter. They ensure transparency. Every fund must publish its NAV (price) and portfolio daily so you know exactly where your money is."
          color="bg-orange-50 text-orange-700"
        />
      </div>

      {/* How Protection Works - Timeline UI */}
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
          <Lock className="text-brand-600" /> How Regulations Protect You
        </h2>

        <div className="space-y-8 relative before:absolute before:left-4 before:top-2 before:h-full before:w-0.5 before:bg-gray-100">
          
          <TimelineItem 
            step="1" 
            title="Money never touches the App" 
            desc="When you invest via apps (like Groww/Zerodha), money goes directly from Your Bank → Mutual Fund House (e.g., HDFC/SBI MF). The app cannot touch your money."
          />
          <TimelineItem 
            step="2" 
            title="Units are held in your name" 
            desc="The stocks/units you buy are stored in a Central Depository (CDSL/NSDL). Even if the broker app deletes your account or shuts down, your money is safe with CDSL."
          />
          <TimelineItem 
            step="3" 
            title="Transparent Reporting" 
            desc="You get SMS/Email directly from the Fund House. You can verify your investment independently on the CAMS or KFintech websites."
          />
        </div>
      </div>

      {/* Disclaimer Bottom */}
      <div className="bg-gray-50 rounded-xl p-4 flex gap-3 items-start text-xs text-gray-500 border border-gray-200">
        <FileCheck size={16} className="shrink-0 mt-0.5" />
        <p>
          Note: This page explains <strong>Regulatory Safety</strong> (protection from fraud). It does not protect against <strong>Market Volatility</strong> (prices going up and down). Market risk is natural; fraud risk is prevented by SEBI.
        </p>
      </div>

    </div>
  );
};

// Helper Components
const SafetyCard = ({ icon: Icon, title, sub, desc, color }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
    <div className={`w-14 h-14 ${color} rounded-xl flex items-center justify-center mb-4`}>
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{sub}</p>
    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

const TimelineItem = ({ step, title, desc }) => (
  <div className="relative pl-12">
    <div className="absolute left-0 top-0 w-8 h-8 bg-brand-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md z-10">
      {step}
    </div>
    <h4 className="font-bold text-lg text-gray-800 mb-1">{title}</h4>
    <p className="text-gray-600 text-sm">{desc}</p>
  </div>
);

export default SafetyHub;
