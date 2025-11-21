import KpiCard from '../../components/kpi/KpiCard';
import { kpiData } from '../../data/mock/kpiData';

export default function KpiRow() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      <KpiCard title="Daily Cases" value={kpiData.dailyCases} delta="+2.3%" />
      <KpiCard title="7-Day Spike" value={`${kpiData.sevenDaySpikePercent}%`} delta="+1.2%" />
      <KpiCard title="Active Hotspots" value={kpiData.activeHotspots} />
      <KpiCard title="Top Rising Disease" value={kpiData.topRisingDisease} />
      <KpiCard title="Test Positivity Rate" value={`${kpiData.testPositivityRate}%`} delta="-0.5%" />
      <KpiCard title="Avg Report Delay" value={`${kpiData.avgReportDelayHours}h`} />
    </div>
  );
}
