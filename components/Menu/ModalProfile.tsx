import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import { useAuthContext } from '@/context/AuthContext';

export default function ModalProfile() {
  const { user } = useAuthContext();
  const [imageUrl, setImageUrl] = useState<string | null>();

  useEffect(() => {
    if (user) {
      setImageUrl(user?.photoURL);
    }
  }, [user]);

  return (
    <div
      className="relative"
      data-te-dropdown-ref
      data-te-dropdown-alignment="end"
    >
      {/* Second dropdown trigger */}
      <a
        className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
        href="#"
        id="dropdownMenuButton2"
        role="button"
        data-te-dropdown-toggle-ref
        aria-expanded="false"
      >
        {/* User avatar */}
        <Image
          src={imageUrl}
          className="rounded-full"
          height={25}
          width={25}
          alt="Imagem de perfil, usuário logado"
          loading="lazy"
        />
      </a>
      {/* Second dropdown menu */}
      <ul
        className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
        aria-labelledby="dropdownMenuButton2"
        data-te-dropdown-menu-ref
      >
        {/* Second dropdown menu items */}
        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
            href="#"
            data-te-dropdown-item-ref
          >Propostas curtidas
          </a>
        </li>
        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
            href="#"
            data-te-dropdown-item-ref
          >Configurações de conta
          </a>
        </li>
        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
            href="/perfil"
            data-te-dropdown-item-ref
          >Conta
          </a>
        </li>
      </ul>
    </div>
  );
}
