interface SparklineKpiCardProps {
  title: string;
  value: string | number;
  data: number[];
  icon?: string;
  color?: 'blue' | 'emerald' | 'cyan' | 'amber';
}

export default function SparklineKpiCard({ title, value, data, icon, color = 'blue' }: SparklineKpiCardProps) {
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const range = maxValue - minValue;

  const width = 200;
  const height = 60;
  const padding = 2;
  const chartWidth = width - 2 * padding;
  const chartHeight = height - 2 * padding;

  const points = data.map((val, i) => {
    const x = padding + (i / (data.length - 1)) * chartWidth;
    const y = height - padding - ((val - minValue) / range) * chartHeight;
    return { x, y };
  });

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

  const areaPathD = `${pathD} L ${width - padding} ${height - padding} L ${padding} ${height - padding} Z`;

  const colorMap = {
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: 'bg-blue-100 text-blue-600',
      stroke: '#3b82f6',
      fill: 'rgba(59, 130, 246, 0.1)',
    },
    emerald: {
      bg: 'bg-emerald-50',
      border: 'border-emerald-200',
      icon: 'bg-emerald-100 text-emerald-600',
      stroke: '#10b981',
      fill: 'rgba(16, 185, 129, 0.1)',
    },
    cyan: {
      bg: 'bg-cyan-50',
      border: 'border-cyan-200',
      icon: 'bg-cyan-100 text-cyan-600',
      stroke: '#06b6d4',
      fill: 'rgba(6, 182, 212, 0.1)',
    },
    amber: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      icon: 'bg-amber-100 text-amber-600',
      stroke: '#f59e0b',
      fill: 'rgba(245, 158, 11, 0.1)',
    },
  };

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
      <div className="mt-4">
        <svg width={width} height={height} className="w-full">
          <path d={areaPathD} fill={colors.fill} />
          <path d={pathD} stroke={colors.stroke} strokeWidth="2" fill="none" />
          {points.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="2.5" fill={colors.stroke} />
          ))}
        </svg>
      </div>
    </div>
  );
}
