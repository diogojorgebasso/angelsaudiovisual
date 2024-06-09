'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import signIn, { signInWithGoogle, signInWithFacebook } from '@/firebase/auth/signin';

export default function Page() {
  const router = useRouter();

  const handleFacebook = async () => {
    await signInWithFacebook();
    return router.push('/perfil');
  };

  const handleGoogle = async () => {
    await signInWithGoogle();
    return router.push('/perfil');
  };

  const handleForm = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
    };
    await signIn(target.email.value);
    return router.push('/perfil');
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center">
        <form onSubmit={handleForm}>
          <h1 className="text-4xl font-bold text-center shadow-lg">Entrar com</h1>
          <button
            type="button"
            onClick={handleFacebook}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={handleGoogle}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
            </svg>
          </button>
          <p>Ou</p>
          <input id="email" type="text" placeholder="Endereço de Email" />
          <button type="submit">Login</button>
          <p>Não tem uma conta? <Link href="/cadastrar">Quero me registrar</Link></p>
        </form>
      </div>
    </section>
  );
}
