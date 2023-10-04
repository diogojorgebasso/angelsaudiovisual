'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Illustration } from '@/components/Error/Illustration';

export default function Error() {
  return (
    <div className="container">
      <Illustration />
      <Image
        src="/backgroundErrorImage.webp"
        alt="Imagem de fundo desfocada"
        height={500}
        width={500}
        className="absolute top-0 left-0 z-[-1]"
      />
      <div className="center">
        <h1>
          Eita! Você achou um lugar secreto
        </h1>
        <p>
          Uma foto de má qualidade pode arruinar seu evento, assim como essa página.
        </p>
        <div>
          <button
            type="button"
          >Quero ver o que vocês podem oferecer pra mim :)
          </button>
        </div>
        I
      </div>
    </div>
  );
}
