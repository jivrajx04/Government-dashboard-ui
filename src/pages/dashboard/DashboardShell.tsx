import Sidebar from '../../components/layout/Sidebar';
import Topbar from '../../components/layout/Topbar';

export default function DashboardShell() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </main>
      </div>
    </div>
  );
}
