import { useState } from 'react';
import { useLocation } from 'react-router-dom';

interface NavItem {
  label: string;
  href: string;
  icon: string;
  section?: string;
}

interface NavSection {
  name: string;
  items: NavItem[];
}

const navigationSections: NavSection[] = [
  {
    name: 'MAIN',
    items: [
      { label: 'Dashboard', href: '/dashboard', icon: '📊', section: 'MAIN' },
      { label: 'Alerts', href: '/alerts', icon: '⚠️', section: 'MAIN' },
      { label: 'Heatmap', href: '/heatmap', icon: '🗺️', section: 'MAIN' },
    ],
  },
  {
    name: 'SYSTEM',
    items: [
      { label: 'Settings', href: '/settings', icon: '⚙️', section: 'SYSTEM' },
    ],
  },
];

export default function Sidebar() {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isActive = (href: string) => location.pathname === href;

  return (
    <aside className="fixed left-0 top-0 w-[260px] h-screen bg-gradient-to-b from-slate-800 to-slate-900 text-white flex flex-col border-r border-slate-700/50 overflow-y-auto z-50">
      {/* Header */}
      <div className="h-16 flex items-center px-4 border-b border-slate-700/50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center font-bold text-sm">
            HV
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm font-bold leading-tight">HealthVerse</h1>
            <p className="text-xs text-slate-400">GOV</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-8">
        {navigationSections.map((section) => (
          <div key={section.name}>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 mb-3">
              {section.name}
            </p>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                        : 'text-slate-300 hover:bg-slate-700/60 hover:text-white'
                    }`}
                  >
                    <span className="text-base">{item.icon}</span>
                    <span className="flex-1">{item.label}</span>
                    {isActive(item.href) && (
                      <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer Profile Block */}
      <div className="p-4 border-t border-slate-700/50">
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center gap-3 p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-all duration-200"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center text-sm font-bold">
              DR
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-semibold">Dr. Admin</p>
              <p className="text-xs text-slate-400">Director</p>
            </div>
            <svg
              className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                isDropdownOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute bottom-full left-0 right-0 mb-2 bg-slate-700 rounded-lg shadow-xl border border-slate-600 overflow-hidden z-50 animate-in fade-in slide-in-from-bottom-2 duration-200">
              <a
                href="/profile"
                className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-slate-600 transition-colors"
              >
                View Profile
              </a>
              <a
                href="/preferences"
                className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-slate-600 transition-colors border-t border-slate-600"
              >
                Preferences
              </a>
              <button
                onClick={() => {
                  setIsDropdownOpen(false);
                }}
                className="w-full text-left px-4 py-2.5 text-sm text-red-400 hover:bg-slate-600 transition-colors border-t border-slate-600"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
