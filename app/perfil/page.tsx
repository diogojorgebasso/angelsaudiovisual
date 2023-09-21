'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '../../context/AuthContext';

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
    </div>
  );
}
