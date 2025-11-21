import { Alert } from '../../data/mock/alerts';

interface AlertCardProps {
  alert: Alert;
}

export default function AlertCard({ alert }: AlertCardProps) {
  const severityColors = {
    high: 'border-red-500 bg-red-50',
    medium: 'border-orange-500 bg-orange-50',
    low: 'border-yellow-500 bg-yellow-50',
  };

  const severityBadgeColors = {
    high: 'bg-red-600 text-white',
    medium: 'bg-orange-600 text-white',
    low: 'bg-yellow-600 text-white',
  };

  return (
    <div className={`rounded-lg border-l-4 ${severityColors[alert.severity]} p-4 shadow-sm hover:shadow-md transition`}>
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-bold text-gray-900">{alert.title}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${severityBadgeColors[alert.severity]}`}>
          {alert.severity}
        </span>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-4 text-sm text-gray-700">
          <span className="font-medium">Region:</span>
          <span>{alert.region}</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-700">
          <span className="font-medium">Cases:</span>
          <span className="font-bold text-gray-900">{alert.cases}</span>
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span>{new Date(alert.timestamp).toLocaleString()}</span>
        </div>
        <p className="text-sm text-gray-600 mt-3 leading-relaxed">{alert.details}</p>
      </div>
    </div>
  );
}
