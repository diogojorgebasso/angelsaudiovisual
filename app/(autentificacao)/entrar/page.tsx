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
      email: { value: string },
      nome: { value: string }
    };

    await signIn(target.email.value, target.nome.value);
    return router.push('/perfil');
  };

  return (
    <section className="h-screen">
      <div className="h-full">
        <div
          className="flex h-full flex-wrap items-center justify-center"
        >
          <form>
            <div className="justify-center items-center ">
              <h1 className="mb-0 mr-4 text-4xl">Entrar</h1>
              <button
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                aria-label="Facebook login button"
                onClick={handleFacebook}
                className="mx-1 h-9 w-9 rounded-full bg-blue-500 uppercase shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-3.5 w-3.5"
                  fill="CurrentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                  />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Fazer login com o Google"
                onClick={handleGoogle}
                className="mx-1 h-9 w-9 rounded-full bg-white shadow-md "
              >
                <svg
                  className="mx-auto h-4 w-4"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.75,16A7.7446,7.7446,0,0,1,8.7177,18.6259L4.2849,22.1721A13.244,13.244,0,0,0,29.25,16" fill="#00ac47" />
                  <path d="M23.75,16a7.7387,7.7387,0,0,1-3.2516,6.2987l4.3824,3.5059A13.2042,13.2042,0,0,0,29.25,16" fill="#4285f4" />
                  <path d="M8.25,16a7.698,7.698,0,0,1,.4677-2.6259L4.2849,9.8279a13.177,13.177,0,0,0,0,12.3442l4.4328-3.5462A7.698,7.698,0,0,1,8.25,16Z" fill="#ffba00" />
                  <path d="M16,8.25a7.699,7.699,0,0,1,4.558,1.4958l4.06-3.7893A13.2152,13.2152,0,0,0,4.2849,9.8279l4.4328,3.5462A7.756,7.756,0,0,1,16,8.25Z" fill="#ea4435" />
                  <path d="M29.25,15v1L27,19.5H16.5V14H28.25A1,1,0,0,1,29.25,15Z" fill="#4285f4" />
                </svg>
              </button>
            </div>

            <div
              className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"
            >
              <p
                className="mx-4 mb-0 text-center font-semibold"
              >
                Ou
              </p>
            </div>

            <div className="relative mb-6">
              Endereço de Email
              <input
                type="text"
                className="block w-full rounded border-0 p-3 outline-none text-black"
                id="exampleFormControlInput2"
                placeholder="Endereço de Email"
                autoComplete="email"
              />
            </div>

            <div className="relative mb-6">
              Senha
              <input
                type="text"
                className="block w-full rounded border-0 p-3 outline-none text-black"
                id="password"
                placeholder="Senha"
                name="password"
                autoComplete="off"
              />
            </div>

            {/* Login button */}
            <div className="text-center lg:text-left">
              <button
                type="submit"
                className="inline-block rounded bg-white text-black  px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal"
                onClick={handleForm}
              >
                Login
              </button>

              {/* Register link */}
              <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                Já tem conta?
                <Link
                  href="/entrar"
                  className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                > Quero entrar
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
