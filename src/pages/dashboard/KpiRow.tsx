import KpiCard from '../../components/kpi/KpiCard';
import SparklineKpiCard from '../../components/kpi/SparklineKpiCard';
import { kpiData } from '../../data/mock/kpiData';

export default function KpiRow() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      <KpiCard
        title="Daily New Cases"
        value={kpiData.dailyNewCases}
        icon="📈"
        delta={15.8}
        trend="up"
        variant="highlighted"
        color="blue"
      />
      <KpiCard
        title="7-Day Growth Rate"
        value={`${kpiData.sevenDayGrowthRate}%`}
        icon="📊"
        delta={kpiData.sevenDayGrowthRate}
        trend="up"
        variant="trend"
        color="amber"
      />
      <KpiCard
        title="Top Rising Diseases"
        value={kpiData.topRisingDiseases[0]}
        icon="🦠"
        variant="standard"
        color="emerald"
      />
      <KpiCard
        title="Region Hotspot Count"
        value={kpiData.regionHotspotCount}
        icon="🗺️"
        variant="standard"
        color="cyan"
      />
      <KpiCard
        title="Public Health Risk Index"
        value={kpiData.publicHealthRiskIndex}
        icon="⚕️"
        variant="standard"
        color="blue"
      />
      <SparklineKpiCard
        title="Disease Trend (7 Days)"
        value={kpiData.dailyNewCases}
        data={kpiData.diseaseTrendData}
        icon="📉"
      />
    </div>
  );
}
