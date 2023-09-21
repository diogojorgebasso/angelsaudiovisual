'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import signIn, {signInWithFacebook, signInWithGoogle} from '../../firebase/auth/signin';

export default function Page() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const router = useRouter();

  const handleForm = async (event: React.FormEvent) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push('/admin');
  };

    const handleFacebook = async () => {
    const { result, error } = await signInWithFacebook();

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push('/perfil');
  };

    const handleGoogle = async () => {
    const { result, error } = await signInWithGoogle();

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push('/perfil');
  };

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Entrar</h1>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="email">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="examplo@email.com"
            />
          </label>
          <label htmlFor="password">
            <p>Senha</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="****"
            />
          </label>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
