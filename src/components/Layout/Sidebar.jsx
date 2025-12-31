import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, MessageSquare, BookOpen, Activity, LogOut, Wallet } from 'lucide-react';
import { useUser } from '../../context/UserContext';

const Sidebar = () => {
  const { logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: MessageSquare, label: 'AI Coach', path: '/chat' },
    { icon: BookOpen, label: 'Learn Center', path: '/learn' },
    { icon: Activity, label: 'Risk Simulator', path: '/risk' },
  ];

  return (
    <aside className="w-64 bg-white h-screen fixed left-0 top-0 border-r border-gray-100 flex flex-col z-20 shadow-lg">
      <div className="p-6 flex items-center gap-3 border-b border-gray-50">
        <div className="bg-brand-600 p-2 rounded-xl text-white">
          <Wallet size={24} />
        </div>
        <h1 className="text-xl font-bold text-gray-800 tracking-tight">FinMantra</h1>
      </div>

      <nav className="flex-1 p-4 space-y-2 mt-4">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-3 p-3 rounded-xl transition-all duration-300 font-medium
              ${isActive 
                ? 'bg-brand-50 text-brand-700 shadow-sm translate-x-1' 
                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}
            `}
          >
            <item.icon size={20} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-50">
        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 p-3 w-full text-left text-red-500 hover:bg-red-50 rounded-xl transition-colors font-medium"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};
export default Sidebar;
