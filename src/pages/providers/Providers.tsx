import KpiCard from '../../components/kpi/KpiCard';
import { providers, providerKpis } from '../../data/mock/providers';

export default function Providers() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Healthcare Providers</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <KpiCard title="Total Appointments Today" value={providerKpis.totalAppointmentsToday} />
        <KpiCard title="Avg Doctor Load" value={providerKpis.avgDoctorLoad} />
        <KpiCard title="Hospital Footfall" value={providerKpis.hospitalFootfall} />
        <KpiCard title="Top Specialty" value={providerKpis.topSpecialty} />
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Provider Name</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Specialization</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Appointments Today</th>
            </tr>
          </thead>
          <tbody>
            {providers.map((provider, index) => (
              <tr key={provider.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition`}>
                <td className="py-4 px-6 font-medium text-gray-900">{provider.name}</td>
                <td className="py-4 px-6 text-gray-700">{provider.specialization}</td>
                <td className="py-4 px-6 text-gray-700 font-semibold">{provider.appointmentsToday}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
