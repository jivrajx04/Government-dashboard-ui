import KpiRow from './KpiRow';
import DiseaseLineChart from '../../components/charts/DiseaseLineChart';
import Top5BarChart from '../../components/charts/Top5BarChart';

export default function DashboardShell() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <KpiRow />
      <Top5BarChart />
      <div className="mt-6">
        <DiseaseLineChart />
      </div>
    </>
  );
}
