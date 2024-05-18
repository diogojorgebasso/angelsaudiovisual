/* eslint-disable @next/next/no-img-element */

'use client';

import { Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';
import ModalProfile from './ModalProfile';
import LoginSubscribeButton from './LoginSubscribeButton';

import { useAuthContext } from '@/context/AuthContext';

import BellIcon from './BellIcon';

export function HeaderMenu() {
  const { user } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <nav>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image width={40} height={40} src="angels.svg" alt="Logo da Angels Audiovisual" />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline">
                <div className="space-x-4">
                  <Link
                    href="/produtos"
                    className=" rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-400"
                  >
                    Produtos
                  </Link>

                  <Link
                    href="/clientes"
                    className="rounded-md px-3 py-2 text-sm font-medium  hover:bg-gray-700 "
                  >
                    Clientes
                  </Link>

                  <Link
                    href="/sobre"
                    className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 "
                  >
                    Sobre nós
                  </Link>

                  <Link
                    href="/blog"
                    className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 "
                  >
                    Blog
                  </Link>

                  <Link
                    href="/parceiros"
                    className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 "
                  >
                    Parceiros
                  </Link>
                </div>
                <div>
                  {user ? <ModalProfile /> : <LoginSubscribeButton />}
                </div>

              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir o menu principal</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden" id="mobile-menu">
          <div ref={ref} className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700"
            >
              Dashboard
            </Link>

            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 "
            >
              Team
            </Link>

            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 "
            >
              Projects
            </Link>

            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 "
            >
              Calendar
            </Link>

            <Link
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 "
            >
              Reports
            </Link>
          </div>
        </div>
      </Transition>
    </nav>

  );
}
