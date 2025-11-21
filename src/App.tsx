import { Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Alerts from './pages/alerts/Alerts';
import Labs from './pages/labs/Labs';
import Providers from './pages/providers/Providers';

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/alerts" element={<Alerts />} />
      <Route path="/labs" element={<Labs />} />
      <Route path="/providers" element={<Providers />} />
    </Routes>
  );
}
