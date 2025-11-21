import KpiRow from './KpiRow';
import DiseaseLineChart from '../../components/charts/DiseaseLineChart';
import Top5BarChart from '../../components/charts/Top5BarChart';

export default function DashboardShell() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <KpiRow />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <DiseaseLineChart />
        </div>
      </div>
      <Top5BarChart />
    </>
  );
}
