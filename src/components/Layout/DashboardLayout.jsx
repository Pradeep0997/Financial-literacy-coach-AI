import Sidebar from './Sidebar';
import Disclaimer from './Disclaimer';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <main className="flex-1 ml-64 flex flex-col">
        <div className="flex-1 p-8 overflow-y-auto">
          <Outlet />
        </div>
        <Disclaimer />
      </main>
    </div>
  );
};
export default DashboardLayout;
