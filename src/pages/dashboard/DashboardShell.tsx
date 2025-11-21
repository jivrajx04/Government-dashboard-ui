import Sidebar from '../../components/layout/Sidebar';
import Topbar from '../../components/layout/Topbar';
import KpiRow from './KpiRow';
import DiseaseLineChart from '../../components/charts/DiseaseLineChart';
import Top5BarChart from '../../components/charts/Top5BarChart';

export default function DashboardShell() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-8">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
          <KpiRow />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DiseaseLineChart />
            <Top5BarChart />
          </div>
        </main>
      </div>
    </div>
  );
}
