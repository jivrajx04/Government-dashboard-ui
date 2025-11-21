import KpiRow from './KpiRow';
import DiseaseLineChart from '../../components/charts/DiseaseLineChart';
import Top5BarChart from '../../components/charts/Top5BarChart';

export default function DashboardShell() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p>All KPI metrics and analytics are calculated based on real-time system data and historical trends</p>
        </div>
      </div>
      <KpiRow />
      <Top5BarChart />
      <div className="mt-6">
        <DiseaseLineChart />
      </div>
    </>
  );
}
