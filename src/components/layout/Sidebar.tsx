export default function Sidebar() {
  const links = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Alerts', href: '/alerts' },
    { label: 'Labs', href: '/labs' },
    { label: 'Providers', href: '/providers' },
    { label: 'Heatmap', href: '/heatmap' },
    { label: 'Settings', href: '/settings' },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white p-4 min-h-screen">
      <h2 className="text-xl font-bold mb-8">Health Dashboard</h2>
      <nav className="space-y-2">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="block px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
