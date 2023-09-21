'use client';
import React from 'react';
import { useAuthContext, ContextState } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

export default function Page() {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    console.log(user);
    console.log(user?.email || '-');
    if (user == null) router.push('/');
  }, [router, user]);

  return (
    <div>
      <h1>Seu perfil</h1>
      <p>{user?.email}</p>
    </div>
  );
}
