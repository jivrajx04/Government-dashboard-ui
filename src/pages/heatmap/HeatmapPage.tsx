import { useState } from 'react';

interface HeatmapCell {
  region: string;
  intensity: number;
}

const heatmapData: HeatmapCell[] = [
  { region: 'Pune', intensity: 82 },
  { region: 'Mumbai', intensity: 45 },
  { region: 'Delhi', intensity: 91 },
  { region: 'Bangalore', intensity: 34 },
  { region: 'Chennai', intensity: 67 },
  { region: 'Hyderabad', intensity: 58 },
  { region: 'Kolkata', intensity: 73 },
  { region: 'Ahmedabad', intensity: 29 },
  { region: 'Jaipur', intensity: 86 },
  { region: 'Lucknow', intensity: 51 },
  { region: 'Chandigarh', intensity: 42 },
  { region: 'Indore', intensity: 64 },
  { region: 'Nagpur', intensity: 77 },
  { region: 'Patna', intensity: 38 },
  { region: 'Surat', intensity: 55 },
  { region: 'Kochi', intensity: 48 },
  { region: 'Bhopal', intensity: 71 },
  { region: 'Vadodara', intensity: 33 },
  { region: 'Ranchi', intensity: 62 },
  { region: 'Guwahati', intensity: 46 },
  { region: 'Coimbatore', intensity: 54 },
  { region: 'Mysore', intensity: 41 },
  { region: 'Vizag', intensity: 69 },
  { region: 'Kanpur', intensity: 79 },
  { region: 'Agra', intensity: 57 },
];

const getColorByIntensity = (intensity: number): string => {
  if (intensity >= 80) return 'bg-red-600 text-white';
  if (intensity >= 70) return 'bg-red-500 text-white';
  if (intensity >= 60) return 'bg-orange-500 text-white';
  if (intensity >= 50) return 'bg-amber-400 text-slate-900';
  if (intensity >= 40) return 'bg-yellow-300 text-slate-900';
  if (intensity >= 30) return 'bg-emerald-200 text-slate-900';
  return 'bg-emerald-100 text-slate-900';
};

const getIntensityLabel = (intensity: number): string => {
  if (intensity >= 80) return 'Critical';
  if (intensity >= 70) return 'Very High';
  if (intensity >= 60) return 'High';
  if (intensity >= 50) return 'Moderate';
  if (intensity >= 40) return 'Medium';
  if (intensity >= 30) return 'Low';
  return 'Very Low';
};

export default function HeatmapPage() {
  const [hoveredCell, setHoveredCell] = useState<string | null>(null);

  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">City/Region Heatmap</h1>
        <p className="text-slate-600 text-sm leading-relaxed">
          Visualizing disease intensity across regions. The intensity metric represents the combined score of active cases,
          case density per 100k population, and transmission rate. Higher values indicate areas requiring immediate attention.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">Regional Disease Intensity</h2>
          <div className="flex items-center gap-6 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-emerald-100 rounded"></div>
              <span className="text-slate-600">Low (0-39)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-300 rounded"></div>
              <span className="text-slate-600">Medium (40-59)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-500 rounded"></div>
              <span className="text-slate-600">High (60-79)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-600 rounded"></div>
              <span className="text-slate-600">Critical (80+)</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {heatmapData.map((cell) => (
            <div
              key={cell.region}
              onMouseEnter={() => setHoveredCell(cell.region)}
              onMouseLeave={() => setHoveredCell(null)}
              className={`
                ${getColorByIntensity(cell.intensity)}
                rounded-xl p-6 shadow-md
                transition-all duration-200 cursor-pointer
                ${hoveredCell === cell.region ? 'scale-105 shadow-xl ring-2 ring-blue-500' : 'hover:scale-102 hover:shadow-lg'}
              `}
            >
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-sm font-bold mb-2 uppercase tracking-wide">{cell.region}</p>
                <p className="text-3xl font-bold mb-1">{cell.intensity}</p>
                <p className="text-xs font-semibold opacity-90">{getIntensityLabel(cell.intensity)}</p>
              </div>
            </div>
          ))}
        </div>

        {hoveredCell && (
          <div className="mt-6 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-4">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm text-slate-700">
                <span className="font-bold text-slate-900">{hoveredCell}</span> - Hover over cells to see detailed information.
                Click to view comprehensive analytics.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-xs font-semibold text-red-700 uppercase tracking-wider mb-1">Critical Zones</p>
              <p className="text-3xl font-bold text-slate-900">
                {heatmapData.filter(c => c.intensity >= 80).length}
              </p>
            </div>
            <div className="w-12 h-12 bg-red-200/50 rounded-xl flex items-center justify-center text-2xl">
              🚨
            </div>
          </div>
          <p className="text-xs text-red-700">Regions requiring immediate intervention</p>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-1">High Risk Zones</p>
              <p className="text-3xl font-bold text-slate-900">
                {heatmapData.filter(c => c.intensity >= 60 && c.intensity < 80).length}
              </p>
            </div>
            <div className="w-12 h-12 bg-amber-200/50 rounded-xl flex items-center justify-center text-2xl">
              ⚠️
            </div>
          </div>
          <p className="text-xs text-amber-700">Regions showing elevated risk levels</p>
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1">Safe Zones</p>
              <p className="text-3xl font-bold text-slate-900">
                {heatmapData.filter(c => c.intensity < 40).length}
              </p>
            </div>
            <div className="w-12 h-12 bg-emerald-200/50 rounded-xl flex items-center justify-center text-2xl">
              ✅
            </div>
          </div>
          <p className="text-xs text-emerald-700">Regions with low transmission rates</p>
        </div>
      </div>
    </>
  );
}
