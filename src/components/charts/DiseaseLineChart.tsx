import { diseaseTrendData } from '../../data/mock/chartData';

export default function DiseaseLineChart() {
  const maxValue = Math.max(...diseaseTrendData.map((d) => d.count));
  const width = 500;
  const height = 300;
  const padding = 40;
  const chartWidth = width - 2 * padding;
  const chartHeight = height - 2 * padding;

  const points = diseaseTrendData.map((d, i) => {
    const x = padding + (i / (diseaseTrendData.length - 1)) * chartWidth;
    const y = height - padding - (d.count / maxValue) * chartHeight;
    return { x, y, ...d };
  });

  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaPathD = `${pathD} L ${width - padding} ${height - padding} L ${padding} ${height - padding} Z`;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <h2 className="text-lg font-bold mb-4">30-Day Disease Trend</h2>
      <svg width="100%" viewBox={`0 0 ${width} ${height}`} className="max-w-full">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#e5e7eb" strokeWidth="2" />
        <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#e5e7eb" strokeWidth="2" />
        {points.map((p, i) => {
          if (i % 2 === 0) {
            return (
              <text key={`label-${i}`} x={p.x} y={height - padding + 20} textAnchor="middle" fontSize="11" fill="#6b7280">
                {p.date}
              </text>
            );
          }
          return null;
        })}
        <path d={areaPathD} fill="url(#lineGradient)" />
        <path d={pathD} stroke="#3b82f6" strokeWidth="2.5" fill="none" />
        {points.map((p, i) => (
          <circle key={`dot-${i}`} cx={p.x} cy={p.y} r="3" fill="#3b82f6" />
        ))}
      </svg>
    </div>
  );
}
