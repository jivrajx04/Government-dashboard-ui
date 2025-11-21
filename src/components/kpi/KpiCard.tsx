type KpiVariant = 'standard' | 'highlighted' | 'minimal' | 'trend';

interface KpiCardProps {
  title: string;
  value: string | number;
  icon?: string;
  delta?: number;
  trend?: 'up' | 'down';
  variant?: KpiVariant;
  color?: 'blue' | 'emerald' | 'cyan' | 'amber';
}

const colorMap = {
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    icon: 'bg-blue-100 text-blue-600',
    accent: 'text-blue-600',
  },
  emerald: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    icon: 'bg-emerald-100 text-emerald-600',
    accent: 'text-emerald-600',
  },
  cyan: {
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    icon: 'bg-cyan-100 text-cyan-600',
    accent: 'text-cyan-600',
  },
  amber: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    icon: 'bg-amber-100 text-amber-600',
    accent: 'text-amber-600',
  },
};

const StandardKpi = ({ title, value, icon, delta, color = 'blue' }: KpiCardProps) => {
  const colors = colorMap[color];
  return (
    <div className={`${colors.bg} border ${colors.border} rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-slate-900">{value}</p>
        </div>
        {icon && (
          <div className={`${colors.icon} w-12 h-12 rounded-xl flex items-center justify-center text-xl`}>
            {icon}
          </div>
        )}
      </div>
      {delta !== undefined && (
        <div className="flex items-center gap-1">
          <span className={`text-sm font-semibold ${delta > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
            {delta > 0 ? '+' : ''}{delta}%
          </span>
          <span className="text-xs text-slate-500">vs last period</span>
        </div>
      )}
    </div>
  );
};

const HighlightedKpi = ({ title, value, icon, delta, color = 'blue' }: KpiCardProps) => {
  return (
    <div className={`bg-gradient-to-br from-${color}-600 to-${color}-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 relative overflow-hidden`}>
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-sm font-medium text-white/80 mb-1">{title}</p>
            <p className="text-3xl font-bold text-white">{value}</p>
          </div>
          {icon && (
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl backdrop-blur-sm">
              {icon}
            </div>
          )}
        </div>
        {delta !== undefined && (
          <div className="flex items-center gap-2">
            <span className={`text-sm font-semibold ${delta > 0 ? 'text-red-200' : 'text-emerald-200'}`}>
              {delta > 0 ? '+' : ''}{delta}%
            </span>
            <span className="text-xs text-white/70">trending up</span>
          </div>
        )}
      </div>
    </div>
  );
};

const MinimalKpi = ({ title, value, icon, delta, color = 'blue' }: KpiCardProps) => {
  const colors = colorMap[color];
  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200 hover:border-slate-300 transition-all duration-200">
      <div className="flex items-center justify-between gap-3 mb-2">
        <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">{title}</p>
        {icon && <span className="text-lg">{icon}</span>}
      </div>
      <div className="flex items-baseline gap-2">
        <p className="text-2xl font-bold text-slate-900">{value}</p>
        {delta !== undefined && (
          <span className={`text-xs font-medium ${delta > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
            {delta > 0 ? '↑' : '↓'} {Math.abs(delta)}%
          </span>
        )}
      </div>
    </div>
  );
};

const TrendKpi = ({ title, value, icon, delta, trend, color = 'blue' }: KpiCardProps) => {
  const colors = colorMap[color];
  const isPositive = trend === 'up';
  const trendColor = isPositive ? 'text-emerald-600' : 'text-red-600';
  const trendBg = isPositive ? 'bg-emerald-50' : 'bg-red-50';

  return (
    <div className={`${colors.bg} border ${colors.border} rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-200`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <p className="text-sm font-medium text-slate-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-slate-900">{value}</p>
        </div>
        {icon && (
          <div className={`${colors.icon} w-12 h-12 rounded-xl flex items-center justify-center text-xl`}>
            {icon}
          </div>
        )}
      </div>
      <div className={`${trendBg} rounded-lg px-3 py-2 flex items-center gap-2 w-fit`}>
        <span className={`text-lg font-bold ${trendColor}`}>
          {isPositive ? '↑' : '↓'}
        </span>
        <span className={`text-sm font-semibold ${trendColor}`}>
          {delta}% {isPositive ? 'increase' : 'decrease'}
        </span>
      </div>
    </div>
  );
};

export default function KpiCard(props: KpiCardProps) {
  const variant = props.variant || 'standard';

  switch (variant) {
    case 'highlighted':
      return <HighlightedKpi {...props} />;
    case 'minimal':
      return <MinimalKpi {...props} />;
    case 'trend':
      return <TrendKpi {...props} />;
    default:
      return <StandardKpi {...props} />;
  }
}
