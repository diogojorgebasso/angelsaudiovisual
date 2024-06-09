'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuthContext } from '@/context/AuthContext';
import Sidebar from './components/Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push('/entrar');
  }, [router, user]);

  return (
    <section className="flex">
      <Sidebar />
      {children}
    </section>
  );
}
