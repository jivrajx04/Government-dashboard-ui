export default function Topbar() {
  return (
    <header className="bg-white border-b px-6 py-4 flex items-center justify-between">
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 bg-gray-100 rounded w-64 text-sm"
      />
      <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:text-gray-900">🔔</button>
        <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
      </div>
    </header>
  );
}
