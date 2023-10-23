/* eslint-disable @next/next/no-img-element */

'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';

import ModalProfile from './ModalProfile';
import LoginSubscribeButton from './LoginSubscribeButton';

import { useAuthContext } from '@/context/AuthContext';

import BellIcon from './BellIcon';

export function HeaderMenu() {
  const { user } = useAuthContext();
  const { theme, setTheme } = useTheme();

  const ThemeIcon = () => {
    if (theme === 'dark') {
      return (
        <button id="LightTheme" aria-label="Tema claro" type="button" onClick={() => setTheme('light')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
          </svg>
        </button>
      );
    }
    return (
      <button id="darkTheme" aria-label="Tema escuro" type="button" onClick={() => setTheme('dark')}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16">
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
        </svg>
      </button>
    );
  };

  return (
    <>
      <header className="p-4 flex justify-between items-center">
        {/*Mobile */}
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <button
            className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContentX"
            aria-controls="navbarSupportedContentX"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-7">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          {/*End Mobile */}

          <div className="relative flex items-center">
            <Link href="/">
              <img src="angels.png" width={40} height={56} alt="Logo" />
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative group">
              <a href="/produtos" type="button" className=" flex">Produtos
                <span className="w-2 mt-2 ">
                  <svg
                    className="px-1"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="caret-down"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                    />
                  </svg>
                </span>
              </a>

              <div data-te-dropdown-menu-ref className="z-10 grid grid-cols-2 lg:grid-cols-4 gap-4 absolute hidden space-y-2 bg-white text-black mt-2 py-2 px-4 group-hover:block">
                <ul>
                  <li>
                    <a aria-label="link para página dos nossos serviços de Fotografia e Vídeo, pacote completo" href="/produtos/foto-video" data-te-dropdown-item-ref className="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600">Foto e Vídeo</a>
                  </li>
                  <li>
                    <a aria-label="link para página dos nossos serviços de Edição Fotografia" href="/produtos/edicao-fotografia" data-te-dropdown-item-ref className="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600">Edição de Fotografia</a>
                  </li>
                  <li>
                    <a aria-label="link para página dos nossos serviços de Edição de Vídeo" href="/produtos/edicao-video" data-te-dropdown-item-ref className="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600">Edição de Vídeo</a>
                  </li>
                  <li>
                    <a aria-label="link para página dos nossos serviços aéreos" href="/produtos/servicos-aereos" data-te-dropdown-item-ref className="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600">Drone</a>
                  </li>
                  <li>
                    <a aria-label="link para página dos nossos serviços de Pílulas para Redes Sociais" href="/produtos/pilulas-redes-sociais" data-te-dropdown-item-ref className="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600">Pílulas para redes sociais</a>
                  </li>
                  <li>
                    <a aria-label="Saiba mais sobre todos os nossos produtos" href="/produtos" data-te-dropdown-item-ref className="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600">Mais opções</a>
                  </li>
                </ul>
              </div>
            </div>
            <a aria-label="link para página dos clientes que já atendemeos" href="/clientes">Clientes</a>
            <a aria-label="link para página sobre nós: equipe, missão, visão e valores" href="/sobre">Sobre nós</a>

          </div>
          <div className="flex">
            {/* Bell Icon */}
            <ThemeIcon />
            <BellIcon />
            {user ? <ModalProfile /> : <LoginSubscribeButton />}
          </div>
        </div>
      </header>
    </>
  );
}
