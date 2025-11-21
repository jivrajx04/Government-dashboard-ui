import { top5BarChartData } from '../../data/mock/chartData';

export default function Top5BarChart() {
  const maxValue = Math.max(...top5BarChartData.map((d) => d.cases));
  const width = 500;
  const height = 300;
  const padding = 40;
  const chartWidth = width - 2 * padding;
  const chartHeight = height - 2 * padding;
  const barWidth = chartWidth / (top5BarChartData.length * 1.5);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
      <h2 className="text-lg font-bold mb-4">Top 5 Diseases</h2>
      <svg width="100%" viewBox={`0 0 ${width} ${height}`} className="max-w-full">
        <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#e5e7eb" strokeWidth="2" />
        <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#e5e7eb" strokeWidth="2" />
        {top5BarChartData.map((d, i) => {
          const barHeight = (d.cases / maxValue) * chartHeight;
          const x = padding + (i + 0.5) * (chartWidth / top5BarChartData.length) - barWidth / 2;
          const y = height - padding - barHeight;
          return (
            <g key={i}>
              <rect x={x} y={y} width={barWidth} height={barHeight} fill="#10b981" />
              <text x={x + barWidth / 2} y={height - padding + 20} textAnchor="middle" fontSize="12" fill="#6b7280">
                {d.disease}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
