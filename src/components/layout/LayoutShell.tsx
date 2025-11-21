import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

interface LayoutShellProps {
  children: ReactNode;
}

export default function LayoutShell({ children }: LayoutShellProps) {
  return (
    <>
      <Sidebar />
      <Navbar />
      <main className="ml-[260px] mt-16 h-[calc(100vh-64px)] overflow-y-auto bg-slate-50">
        <div className="p-8">
          {children}
        </div>
      </main>
    </>
  );
}
