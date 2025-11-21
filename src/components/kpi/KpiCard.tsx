interface KpiCardProps {
  title: string;
  value: string | number;
  delta?: string;
}

export default function KpiCard({ title, value, delta }: KpiCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-gray-600 text-sm font-medium mb-2">{title}</h3>
      <div className="flex items-end justify-between">
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        {delta && <span className="text-sm text-green-600">{delta}</span>}
      </div>
    </div>
  );
}
