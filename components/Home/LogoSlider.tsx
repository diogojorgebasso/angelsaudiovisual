'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function LogoSlider() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    let animation: Animation | null = null;

    const startAnimation = () => {
      const animationDuration = 10; // Duration for one slide
      const imageWidth = container!.offsetWidth;
      const totalWidth = imageWidth * 4; // Adjust based on the number of images

      animation = container!.animate(
        [
          { transform: 'translateX(0px)' },
          { transform: `translateX(-${totalWidth}px)` },
        ],
        {
          duration: animationDuration * 4 * 1000, // Adjust based on the number of images
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
        <div className="flex-shrink-0 w-1/3  h-full relative">
          <Image
            src="/marcas/fejemg.png"
            alt="Logo FEJEMG"
            fill
            objectFit="contain"
          />
        </div>
        <div className="flex-shrink-0 w-1/3 h-full relative ">
          <Image
            src="/marcas/unifeijr.png"
            alt="Image 2"
            fill
            objectFit="contain"
          />
        </div>
        <div className="flex-shrink-0 w-1/3 h-full relative ">
          <Image
            src="/marcas/mfbd.svg"
            alt="Image 3"
            fill
            objectFit="contain"
          />
        </div>
        <div className="flex-shrink-0 w-1/3 h-full relative ">
          <Image
            src="/marcas/nucleosul.png"
            alt="Image 3"
            fill
            objectFit="contain"
          />
        </div>
        <div className="flex-shrink-0 w-14 h-full relative ">
          <Image
            src="/marcas/unifei.svg"
            alt="Image 3"
            fill
            objectFit="contain"
          />
        </div>
        <div className="flex-shrink-0 w-1/3 h-full relative ">
          <Image
            src="/marcas/kadu.png"
            alt="Image 3"
            fill
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}
