import { Alert } from '../../data/mock/alerts';

interface AlertCardProps {
  alert: Alert;
  variant?: 'high' | 'increasing' | 'cluster';
}

const HighSeverityAlert = ({ alert }: { alert: Alert }) => {
  return (
    <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-red-200/30 rounded-full -mr-12 -mt-12"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-red-200/20 rounded-full -ml-10 -mb-10"></div>

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-red-700">High Severity</span>
            </div>
            <h3 className="text-lg font-bold text-red-900">{alert.title}</h3>
          </div>
          <button className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-lg transition-colors">
            View Details
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3">
            <p className="text-xs font-medium text-red-700 mb-1">Region</p>
            <p className="text-sm font-bold text-slate-900">{alert.region}</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3">
            <p className="text-xs font-medium text-red-700 mb-1">Case Count</p>
            <p className="text-2xl font-bold text-slate-900">{alert.cases}</p>
          </div>
        </div>

        <p className="text-xs text-red-700/80 mb-2">{new Date(alert.timestamp).toLocaleString()}</p>
        <p className="text-sm text-slate-700 leading-relaxed">{alert.details}</p>
      </div>
    </div>
  );
};

const IncreasingTrendAlert = ({ alert }: { alert: Alert }) => {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-300 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-200 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/20 rounded-full -mr-16 -mt-16"></div>

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">📈</span>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">Increasing Trend</span>
            </div>
            <h3 className="text-lg font-bold text-amber-900">{alert.title}</h3>
          </div>
          <button className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-lg transition-colors">
            View Details
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-xs font-medium text-amber-800 mb-1">Region</p>
            <p className="text-sm font-bold text-slate-900">{alert.region}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-amber-800 mb-1">Cases</p>
            <p className="text-2xl font-bold text-slate-900">{alert.cases}</p>
          </div>
        </div>

        <div className="bg-white/50 backdrop-blur-sm rounded-lg px-3 py-2 mb-3 inline-flex items-center gap-2">
          <span className="text-lg">↑</span>
          <span className="text-sm font-semibold text-amber-700">+12.3% week-over-week</span>
        </div>

        <p className="text-xs text-amber-700/80 mb-2">{new Date(alert.timestamp).toLocaleString()}</p>
        <p className="text-sm text-slate-700 leading-relaxed">{alert.details}</p>
      </div>
    </div>
  );
};

const ClusterAlert = ({ alert }: { alert: Alert }) => {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-l-4 border-orange-500 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">🔗</span>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-800">Cluster Alert</span>
          </div>
          <h3 className="text-lg font-bold text-orange-900">{alert.title}</h3>
        </div>
        <button className="px-3 py-1.5 bg-orange-600 hover:bg-orange-700 text-white text-xs font-semibold rounded-lg transition-colors">
          View Details
        </button>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-orange-900">Region:</span>
          <span className="text-sm font-bold text-slate-900">{alert.region}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-orange-900">Cases Detected:</span>
          <span className="text-lg font-bold text-slate-900">{alert.cases}</span>
        </div>
        <div className="h-1 bg-orange-300 rounded-full w-full">
          <div className="h-full bg-orange-600 rounded-full w-2/3"></div>
        </div>
      </div>

      <p className="text-xs text-orange-700/80 mb-2">{new Date(alert.timestamp).toLocaleString()}</p>
      <p className="text-sm text-slate-700 leading-relaxed">{alert.details}</p>
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
