import { useState } from 'react';

interface HeatmapCell {
  district: string;
  intensity: number;
  cases: Record<string, number>;
}

const diseases = ['Influenza', 'COVID-19', 'RSV', 'Dengue', 'Malaria'];

const maharashtraDistrictData: HeatmapCell[] = [
  {
    district: 'Pune',
    intensity: 82,
    cases: { Influenza: 82, 'COVID-19': 45, RSV: 65, Dengue: 78, Malaria: 52 },
  },
  {
    district: 'Mumbai',
    intensity: 75,
    cases: { Influenza: 75, 'COVID-19': 68, RSV: 72, Dengue: 88, Malaria: 45 },
  },
  {
    district: 'Nagpur',
    intensity: 77,
    cases: { Influenza: 77, 'COVID-19': 58, RSV: 64, Dengue: 82, Malaria: 71 },
  },
  {
    district: 'Aurangabad',
    intensity: 58,
    cases: { Influenza: 58, 'COVID-19': 42, RSV: 51, Dengue: 62, Malaria: 48 },
  },
  {
    district: 'Nashik',
    intensity: 64,
    cases: { Influenza: 64, 'COVID-19': 35, RSV: 58, Dengue: 72, Malaria: 55 },
  },
  {
    district: 'Kolhapur',
    intensity: 71,
    cases: { Influenza: 71, 'COVID-19': 52, RSV: 68, Dengue: 75, Malaria: 62 },
  },
  {
    district: 'Satara',
    intensity: 52,
    cases: { Influenza: 52, 'COVID-19': 38, RSV: 45, Dengue: 58, Malaria: 41 },
  },
  {
    district: 'Sangli',
    intensity: 48,
    cases: { Influenza: 48, 'COVID-19': 32, RSV: 42, Dengue: 51, Malaria: 38 },
  },
  {
    district: 'Solapur',
    intensity: 67,
    cases: { Influenza: 67, 'COVID-19': 45, RSV: 62, Dengue: 71, Malaria: 58 },
  },
  {
    district: 'Ahmednagar',
    intensity: 62,
    cases: { Influenza: 62, 'COVID-19': 48, RSV: 55, Dengue: 68, Malaria: 52 },
  },
  {
    district: 'Thane',
    intensity: 79,
    cases: { Influenza: 79, 'COVID-19': 65, RSV: 75, Dengue: 82, Malaria: 68 },
  },
  {
    district: 'Raigad',
    intensity: 54,
    cases: { Influenza: 54, 'COVID-19': 40, RSV: 48, Dengue: 62, Malaria: 45 },
  },
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
  const [selectedDisease, setSelectedDisease] = useState<string>(diseases[0]);

  const getIntensityForDisease = (caseCount: number): number => {
    if (caseCount >= 80) return caseCount;
    return caseCount;
  };

  const displayData = maharashtraDistrictData.map(item => ({
    ...item,
    displayIntensity: getIntensityForDisease(item.cases[selectedDisease]),
    displayCases: item.cases[selectedDisease],
  }));

  const criticalCount = displayData.filter(c => c.displayIntensity >= 80).length;
  const highRiskCount = displayData.filter(c => c.displayIntensity >= 60 && c.displayIntensity < 80).length;
  const safeCount = displayData.filter(c => c.displayIntensity < 40).length;

  return (
    <>
      <div className="mb-8">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Maharashtra Districts - Disease Intensity</h1>
          <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
            Real-time visualization of disease intensity across Maharashtra districts. Select a disease to view case counts and intensity levels by district.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="group bg-white border border-red-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-400/10 to-red-600/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>

          <div className="relative z-10 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-2">Critical Zones</p>
                <p className="text-4xl font-bold text-slate-900 mb-1">{criticalCount}</p>
                <p className="text-xs text-slate-600">Regions requiring immediate intervention</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
            <div className="h-1 bg-gradient-to-r from-red-500 to-red-400 rounded-full"></div>
          </div>
        </div>

        <div className="group bg-white border border-amber-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-amber-600/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>

          <div className="relative z-10 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2">High Risk Zones</p>
                <p className="text-4xl font-bold text-slate-900 mb-1">{highRiskCount}</p>
                <p className="text-xs text-slate-600">Regions showing elevated risk levels</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>
            <div className="h-1 bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"></div>
          </div>
        </div>

        <div className="group bg-white border border-emerald-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-emerald-600/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>

          <div className="relative z-10 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2">Safe Zones</p>
                <p className="text-4xl font-bold text-slate-900 mb-1">{safeCount}</p>
                <p className="text-xs text-slate-600">Regions with low transmission rates</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="mb-8 width-20">
        <label className="block text-sm font-semibold text-slate-700 mb-3">Select Disease</label>
        <select
          value={selectedDisease}
          onChange={(e) => setSelectedDisease(e.target.value)}
          className="px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 font-medium hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {diseases.map((disease) => (
            <option key={disease} value={disease}>
              {disease}
            </option>
          ))}
        </select>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-xl font-bold text-slate-900">Heatmap by District - {selectedDisease}</h2>
          <div className="flex items-center gap-6 text-xs flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-emerald-100 rounded-md shadow-sm border border-emerald-300"></div>
              <span className="text-slate-700 font-medium">Low (0-39)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-300 rounded-md shadow-sm border border-yellow-400"></div>
              <span className="text-slate-700 font-medium">Medium (40-59)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-500 rounded-md shadow-sm border border-orange-600"></div>
              <span className="text-slate-700 font-medium">High (60-79)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-600 rounded-md shadow-sm border border-red-700"></div>
              <span className="text-slate-700 font-medium">Critical (80+)</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayData.map((cell) => (
            <div
              key={cell.district}
              onMouseEnter={() => setHoveredCell(cell.district)}
              onMouseLeave={() => setHoveredCell(null)}
              className={`
                ${getColorByIntensity(cell.displayIntensity)}
                rounded-xl p-4 shadow-md
                transition-all duration-300 cursor-pointer relative overflow-hidden
                ${hoveredCell === cell.district ? 'scale-110 shadow-2xl ring-2 ring-blue-400' : 'hover:scale-105 hover:shadow-lg'}
              `}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <p className="text-xs font-bold mb-2 uppercase tracking-wide">{cell.district}</p>
                <p className="text-2xl font-bold mb-1">{cell.displayCases}</p>
                <p className="text-xs font-semibold opacity-90">{getIntensityLabel(cell.displayIntensity)}</p>
              </div>
            </div>
          ))}
        </div>

        {hoveredCell && (
          <div className="mt-6 bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 border border-blue-200 rounded-xl p-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-sm text-slate-700">
                <span className="font-bold text-slate-900">{hoveredCell}</span> has <span className="font-bold text-slate-900">{displayData.find(c => c.district === hoveredCell)?.displayCases}</span> cases of {selectedDisease} with an intensity score of <span className="font-bold text-slate-900">{displayData.find(c => c.district === hoveredCell)?.displayIntensity}</span>.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
