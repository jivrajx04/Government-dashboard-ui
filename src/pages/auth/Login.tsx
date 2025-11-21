import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

async function login() {
  return Promise.resolve(true);
}

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (!password) {
      setError('Password is required');
      return;
    }

    setLoading(true);
    try {
      const success = await login();
      if (success) {
        navigate('/dashboard');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-32 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
        </div>

      </div>

      <div className="relative max-w-md w-full z-10">
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-3xl blur-lg opacity-30 group-hover:opacity-40 transition duration-1000"></div>

        <div className="relative bg-slate-800/40 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500"></div>

          <div className="p-8 sm:p-10">
            <div className="mb-8">
              <div className="inline-block mb-5">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/50 transform hover:scale-110 transition-transform duration-300">
                  <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent mb-2">
                HealthVerse
              </h1>
              <p className="text-slate-300 text-sm">Public Health Analytics Dashboard</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-200 mb-2">
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="relative w-full px-4 py-3.5 bg-slate-900/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:bg-slate-900/70 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/40 transition-all duration-300 outline-none"
                    placeholder="admin@healthverse.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-slate-200 mb-2">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="relative w-full px-4 py-3.5 bg-slate-900/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:bg-slate-900/70 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/40 transition-all duration-300 outline-none"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {error && (
                <div className="flex items-center gap-3 text-sm text-red-300 bg-red-900/30 px-4 py-3.5 rounded-xl border border-red-500/30 backdrop-blur-sm">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>{error}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white py-3.5 px-4 rounded-xl font-semibold shadow-lg shadow-blue-500/40 hover:shadow-cyan-500/50 transition-all duration-500 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-blue-500/40 mt-6"
                style={{ backgroundSize: '200% auto' }}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Signing in...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <span>Sign In</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-slate-700/50">
              <p className="text-center text-sm text-slate-400">
                Demo credentials: Use any email and password
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-slate-500 text-xs mt-8">
          © 2025 HealthVerse. All rights reserved.
        </p>
      </div>
    </div>
  );
}
