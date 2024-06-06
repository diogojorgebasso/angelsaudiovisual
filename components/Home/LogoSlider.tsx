'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function LogoSlider() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    let animation: Animation | null = null;

    const startAnimation = () => {
      const images = container!.children;
      let totalWidth = 0;

      for (let i = 0; i < images.length; i += 1) {
        totalWidth += (images[i] as HTMLElement).offsetWidth;
      }

      animation = container!.animate(
        [
          { transform: 'translateX(0px)' },
          { transform: `translateX(-${totalWidth}px)` }, // Translate by half the total width
        ],
        {
          duration: totalWidth * 8, // Adjust based on the total width
          iterations: Infinity,
          easing: 'linear',
        }
      );
    };

    startAnimation();

    return () => {
      if (animation) {
        animation.cancel();
      }
    };
  }, []);

  return (
    <div className="mt-4 relative overflow-hidden w-full h-12">
      <div ref={containerRef} className="flex w-full h-full">
        <div className="flex-shrink-0 w-2/5  h-full relative">
          <Image
            src="/marcas/fejemg.png"
            alt="Logomarca da FEJEMG - Federação Mineira de Empresas Juniores - negativa"
            fill
            sizes="20vh"
            className="object-contain"
          />
        </div>
        <div className="flex-shrink-0 w-2/5 h-full relative ">
          <Image
            src="/marcas/unifeijr.png"
            alt="Logomarca da UNIFEI Jr. negativa"
            fill
            sizes="20vh"
            className="object-contain"
          />
        </div>
        <div className="flex-shrink-0 w-2/5 h-full relative ">
          <Image
            src="/marcas/mfbd.svg"
            alt="Logomarca do escritório MFBD - Maciel, Fernandes, Basso e Dumas Advogados Associados - negativa"
            fill
            sizes="20vh"
            className="object-contain"
          />
        </div>
        <div className="flex-shrink-0 w-2/5 h-full relative ">
          <Image
            src="/marcas/nucleosul.png"
            alt="Logomarca do Núcleo Sul Mineiro de Empresas Juniores - negativa"
            fill
            sizes="20vh"
            className="object-contain"
          />
        </div>
        <div className="flex-shrink-0 w-2/5 h-full relative ">
          <Image
            src="/marcas/unifei.svg"
            alt="Logomarca da UNIFEI - Universidade Federal de Itajubá - negativa"
            fill
            sizes="20vh"
            className="object-contain"
          />
        </div>
        <div className="flex-shrink-0 w-2/5 h-full relative ">
          <Image
            src="/marcas/kadu.png"
            alt="Logo do Kadu Eventos - 25 anos - negativa"
            fill
            sizes="20vh"
            className="object-contain"
          />
        </div>
        <div className="flex-shrink-0 w-2/5 h-full relative ">
          <Image
            src="/marcas/portalfamosos.svg"
            alt="Logomarca do Portal Famosos Brasil - negativa"
            fill
            sizes="20vh"
            className="object-contain"
          />
        </div>
        {/* Duplicate */}
        <div className="flex-shrink-0 w-2/5 h-full relative">
          <Image
            src="/marcas/fejemg.png"
            alt="Logomarca da FEJEMG - Federação Mineira de Empresas Juniores - negativa"
            fill
            sizes="20vh"
            className="object-contain"
          />
        </div>
        <div className="flex-shrink-0 w-2/5 h-full relative ">
          <Image
            src="/marcas/unifeijr.png"
            alt="Logomarca da UNIFEI Jr. negativa"
            fill
            sizes="20vh"
            className="object-contain"
          />
        </div>
        <div className="flex-shrink-0 w-2/5 h-full relative ">
          <Image
            src="/marcas/mfbd.svg"
            alt="Logo do escritório MFBD - Maciel, Fernandes, Basso e Dumas Advogados Associados - negativa"
            fill
            sizes="20vh"
            className="object-contain"
          />
        </div>
        <div className="flex-shrink-0 w-2/5 h-full relative ">
          <Image
            src="/marcas/nucleosul.png"
            alt="Logo do Núcleo Sul Mineiro de Empresas Juniores - negativa"
            fill
            sizes="20vh"
            className="object-contain"
          />
        </div>
        <div className="flex-shrink-0 w-2/5 h-full relative ">
          <Image
            src="/marcas/unifei.svg"
            alt="Logo da UNIFEI - Universidade Federal de Itajubá - negativa"
            fill
            sizes="20vh"
            className="object-contain"
          />
        </div>
        <div className="flex-shrink-0 w-2/5 h-full relative ">
          <Image
            src="/marcas/kadu.png"
            alt="Logo do Kadu Eventos - 25 anos - negativa"
            fill
            sizes="20vh"
            className="object-contain"
          />
        </div>
        <div className="flex-shrink-0 w-2/5 h-full relative ">
          <Image
            src="/marcas/portalfamosos.svg"
            alt="Logo do Portal Famosos Brasil - negativa"
            fill
            sizes="20vh"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
