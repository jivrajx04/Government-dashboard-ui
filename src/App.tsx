import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import DashboardShell from './pages/dashboard/DashboardShell';
import Alerts from './pages/alerts/Alerts';
import HeatmapPage from './pages/heatmap/HeatmapPage';
import LayoutShell from './components/layout/LayoutShell';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<LayoutShell><DashboardShell /></LayoutShell>} />
      <Route path="/alerts" element={<LayoutShell><Alerts /></LayoutShell>} />
      <Route path="/heatmap" element={<LayoutShell><HeatmapPage /></LayoutShell>} />
    </Routes>
  );
}
