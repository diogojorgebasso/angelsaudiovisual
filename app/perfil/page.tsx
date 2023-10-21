'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '../../context/AuthContext';
import SignOut from '@/firebase/auth/signout';

export default function Page() {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) router.push('/');
  }, [router, user]);

  return (
    <div>
      <h1>Seu perfil</h1>
      <p>{user?.email}</p>
      <button type="button" onClick={() => router.push('/produtos')}>Ver produtos</button>
      <button type="button" onClick={() => SignOut()}>Sair</button>
    </div>
  );
}
