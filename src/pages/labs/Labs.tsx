import { labs } from '../../data/mock/labs';

export default function Labs() {
  const statusColors = {
    'on-time': 'text-green-700 bg-green-100',
    'moderate': 'text-orange-700 bg-orange-100',
    'delayed': 'text-red-700 bg-red-100',
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Laboratory Testing Centers</h1>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Lab Name</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Tests Count</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Avg TAT (hours)</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Delay Status</th>
            </tr>
          </thead>
          <tbody>
            {labs.map((lab, index) => (
              <tr key={lab.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition`}>
                <td className="py-4 px-6 font-medium text-gray-900">{lab.name}</td>
                <td className="py-4 px-6 text-gray-700">{lab.testsCount.toLocaleString()}</td>
                <td className="py-4 px-6 text-gray-700">{lab.avgTATHours}</td>
                <td className="py-4 px-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${statusColors[lab.delayStatus]}`}>
                    {lab.delayStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
