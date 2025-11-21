import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [notificationCount] = useState(3);
  const location = useLocation();
  const navigate = useNavigate();

  const getPageTitle = () => {
    const titles: Record<string, string> = {
      '/dashboard': 'Dashboard',
      '/alerts': 'Alerts',
      '/heatmap': 'City/Region Heatmap',
      '/labs': 'Laboratory Results',
      '/providers': 'Healthcare Providers',
      '/settings': 'Settings',
    };
    return titles[location.pathname] || 'Dashboard';
  };

  return (
    <header className="fixed left-[260px] right-0 top-0 h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-40 shadow-md">
      <div className="flex-1">
        <h2 className="text-lg font-bold text-slate-900">{getPageTitle()}</h2>
      </div>

      <div className="flex items-center gap-6">

        <button
          onClick={() => navigate('/alerts')}
          className="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          {notificationCount > 0 && (
            <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
              {notificationCount}
            </span>
          )}
        </button>

        <div className="relative">
          <button
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 transition-all duration-200"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              AD
            </div>
            <div className="flex flex-col items-start hidden sm:block">
              <p className="text-sm font-semibold text-slate-900">Admin</p>
              <p className="text-xs text-slate-500">Director</p>
            </div>
            <svg
              className={`w-4 h-4 text-slate-600 transition-transform duration-200 hidden sm:block ${
                isUserMenuOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>

          {isUserMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="px-4 py-3 bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200">
                <p className="text-sm font-semibold text-slate-900">Administrator</p>
                <p className="text-xs text-slate-600 mt-0.5">admin@government.health</p>
              </div>

              <button
                onClick={() => {
                  setIsUserMenuOpen(false);
                  navigate('/login');
                }}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
