import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import Dashboard from './pages/dashboard/Dashboard';
import DashboardShell from './pages/dashboard/DashboardShell';
import Alerts from './pages/alerts/Alerts';
import Labs from './pages/labs/Labs';
import Providers from './pages/providers/Providers';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<DashboardShell />} />
      <Route path="/alerts" element={<Alerts />} />
      <Route path="/labs" element={<Labs />} />
      <Route path="/providers" element={<Providers />} />
    </Routes>
  );
}
