import AlertCard from '../../components/alerts/AlertCard';
import { alerts } from '../../data/mock/alerts';

export default function Alerts() {
  const highAlerts = alerts.filter((a) => a.severity === 'high');
  const mediumAlerts = alerts.filter((a) => a.severity === 'medium');
  const lowAlerts = alerts.filter((a) => a.severity === 'low');

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Health Alerts</h1>

      {highAlerts.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-red-700 mb-4">High Severity</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {highAlerts.map((alert) => (
              <AlertCard key={alert.id} alert={alert} />
            ))}
          </div>
        </section>
      )}

      {mediumAlerts.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-orange-700 mb-4">Medium Severity</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {mediumAlerts.map((alert) => (
              <AlertCard key={alert.id} alert={alert} />
            ))}
          </div>
        </section>
      )}

      {lowAlerts.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-bold text-yellow-700 mb-4">Low Severity</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {lowAlerts.map((alert) => (
              <AlertCard key={alert.id} alert={alert} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
