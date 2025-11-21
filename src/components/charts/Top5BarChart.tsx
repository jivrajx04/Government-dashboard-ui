import { top5DiseasesThisWeek, weeklyCasesPerRegion } from '../../data/mock/chartData';

export default function Top5BarChart() {
  const maxDiseases = Math.max(...top5DiseasesThisWeek.map((d) => d.cases));
  const maxRegions = Math.max(...weeklyCasesPerRegion.map((d) => d.cases));
  const width = 500;
  const height = 300;
  const padding = 40;
  const chartWidth = width - 2 * padding;
  const chartHeight = height - 2 * padding;
  const barWidth = chartWidth / (top5DiseasesThisWeek.length * 1.5);

  const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <h2 className="text-lg font-bold mb-4">Top 5 Diseases This Week</h2>
        <svg width="100%" viewBox={`0 0 ${width} ${height}`} className="max-w-full">
          <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#e5e7eb" strokeWidth="2" />
          <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#e5e7eb" strokeWidth="2" />
          {top5DiseasesThisWeek.map((d, i) => {
            const barHeight = (d.cases / maxDiseases) * chartHeight;
            const x = padding + (i + 0.5) * (chartWidth / top5DiseasesThisWeek.length) - barWidth / 2;
            const y = height - padding - barHeight;
            return (
              <g key={i}>
                <rect x={x} y={y} width={barWidth} height={barHeight} fill={colors[i]} opacity="0.8" rx="4" />
                <text x={x + barWidth / 2} y={height - padding + 20} textAnchor="middle" fontSize="11" fill="#6b7280">
                  {d.disease}
                </text>
                <text x={x + barWidth / 2} y={y - 8} textAnchor="middle" fontSize="11" fontWeight="600" fill="#1f2937">
                  {d.cases}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <h2 className="text-lg font-bold mb-4">Weekly Cases Per Region</h2>
        <svg width="100%" viewBox={`0 0 ${width} ${height}`} className="max-w-full">
          <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#e5e7eb" strokeWidth="2" />
          <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#e5e7eb" strokeWidth="2" />
          {weeklyCasesPerRegion.map((d, i) => {
            const barHeight = (d.cases / maxRegions) * chartHeight;
            const x = padding + (i + 0.5) * (chartWidth / weeklyCasesPerRegion.length) - barWidth / 2;
            const y = height - padding - barHeight;
            return (
              <g key={i}>
                <rect x={x} y={y} width={barWidth} height={barHeight} fill="#06b6d4" opacity="0.8" rx="4" />
                <text x={x + barWidth / 2} y={height - padding + 20} textAnchor="middle" fontSize="11" fill="#6b7280">
                  {d.region}
                </text>
                <text x={x + barWidth / 2} y={y - 8} textAnchor="middle" fontSize="11" fontWeight="600" fill="#1f2937">
                  {d.cases}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
