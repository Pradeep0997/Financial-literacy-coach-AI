import { Wallet, LogOut } from 'lucide-react';
import { useUser } from '../../context/UserContext';

const Navbar = () => {
  const { user, logout } = useUser();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center shadow-sm">
      <div className="flex items-center gap-2">
        <div className="bg-brand-100 p-2 rounded-xl">
          <Wallet className="text-brand-600" size={24} />
        </div>
        <h1 className="text-xl font-bold bg-gradient-to-r from-brand-700 to-brand-500 bg-clip-text text-transparent">
          FinMantra
        </h1>
      </div>
      
      {user && (
        <div className="flex items-center gap-4">
          <span className="hidden sm:block text-gray-600 text-sm">
            Namaste, <span className="font-semibold text-gray-900">{user.name}</span>
          </span>
          <button 
            onClick={logout}
            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
            title="Reset Progress"
          >
            <LogOut size={20} />
          </button>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
