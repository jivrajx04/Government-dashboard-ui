import Sidebar from '../../components/layout/Sidebar';
import Topbar from '../../components/layout/Topbar';
import KpiRow from './KpiRow';

export default function DashboardShell() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-8">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
          <KpiRow />
        </main>
      </div>
    </div>
  );
}
