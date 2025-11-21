import { Alert } from '../../data/mock/alerts';

interface AlertCardProps {
  alert: Alert;
  variant?: 'high' | 'increasing' | 'cluster';
}

const HighSeverityAlert = ({ alert }: { alert: Alert }) => {
  return (
    <div className="group bg-white border border-red-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400/10 to-red-600/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-300/10 to-transparent rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500"></div>

      <div className="relative z-10 p-6">
        <div className="flex items-start justify-between mb-5">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/20">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-red-700">Critical Alert</span>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{alert.title}</h3>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-gradient-to-br from-red-50 to-red-100/50 border border-red-200 rounded-xl p-4 hover:shadow-md transition-shadow">
            <p className="text-xs font-semibold text-red-600 mb-1.5 uppercase tracking-wide">Location</p>
            <p className="text-base font-bold text-slate-900">{alert.region}</p>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-red-100/50 border border-red-200 rounded-xl p-4 hover:shadow-md transition-shadow">
            <p className="text-xs font-semibold text-red-600 mb-1.5 uppercase tracking-wide">Cases</p>
            <p className="text-3xl font-bold text-slate-900">{alert.cases}</p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-xl p-4 mb-4">
          <p className="text-sm text-slate-700 leading-relaxed">{alert.details}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {new Date(alert.timestamp).toLocaleString()}
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-xs font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

const IncreasingTrendAlert = ({ alert }: { alert: Alert }) => {
  return (
    <div className="group bg-white border border-amber-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-amber-600/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-300/10 to-transparent rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500"></div>

      <div className="relative z-10 p-6">
        <div className="flex items-start justify-between mb-5">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">Increasing Trend</span>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center gap-1 bg-amber-100 px-2 py-0.5 rounded-md">
                    <svg className="w-3 h-3 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs font-bold text-amber-700">+12.3%</span>
                  </div>
                  <span className="text-xs text-slate-500">week-over-week</span>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{alert.title}</h3>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200 rounded-xl p-4 hover:shadow-md transition-shadow">
            <p className="text-xs font-semibold text-amber-600 mb-1.5 uppercase tracking-wide">Location</p>
            <p className="text-base font-bold text-slate-900">{alert.region}</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 border border-amber-200 rounded-xl p-4 hover:shadow-md transition-shadow">
            <p className="text-xs font-semibold text-amber-600 mb-1.5 uppercase tracking-wide">Cases</p>
            <p className="text-3xl font-bold text-slate-900">{alert.cases}</p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-xl p-4 mb-4">
          <p className="text-sm text-slate-700 leading-relaxed">{alert.details}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {new Date(alert.timestamp).toLocaleString()}
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white text-xs font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

const ClusterAlert = ({ alert }: { alert: Alert }) => {
  const progressPercentage = Math.min((alert.cases / 100) * 100, 100);

  return (
    <div className="group bg-white border border-yellow-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-300/10 to-transparent rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500"></div>

      <div className="relative z-10 p-6">
        <div className="flex items-start justify-between mb-5">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg shadow-yellow-500/20">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-yellow-700">Cluster Detected</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{alert.title}</h3>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 border border-yellow-200 rounded-xl p-4 hover:shadow-md transition-shadow">
            <p className="text-xs font-semibold text-yellow-600 mb-1.5 uppercase tracking-wide">Location</p>
            <p className="text-base font-bold text-slate-900">{alert.region}</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 border border-yellow-200 rounded-xl p-4 hover:shadow-md transition-shadow">
            <p className="text-xs font-semibold text-yellow-600 mb-1.5 uppercase tracking-wide">Cases</p>
            <p className="text-3xl font-bold text-slate-900">{alert.cases}</p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Cluster Spread</span>
            <span className="text-xs font-bold text-yellow-700">{progressPercentage.toFixed(0)}%</span>
          </div>
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-xl p-4 mb-4">
          <p className="text-sm text-slate-700 leading-relaxed">{alert.details}</p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {new Date(alert.timestamp).toLocaleString()}
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white text-xs font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default function AlertCard({ alert, variant = 'high' }: AlertCardProps) {
  if (alert.severity === 'high') {
    return <HighSeverityAlert alert={alert} />;
  }

  if (alert.severity === 'medium') {
    return <IncreasingTrendAlert alert={alert} />;
  }

  return <ClusterAlert alert={alert} />;
}
