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
      const totalWidth = imageWidth * 3; // Adjust based on the number of images

      animation = container!.animate(
        [
          { transform: 'translateX(0px)' },
          { transform: `translateX(-${totalWidth}px)` },
        ],
        {
          duration: animationDuration * 3 * 1000, // Adjust based on the number of images
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
        <div className="flex-shrink-0 w-full h-full relative">
          <Image
            src="/marcas/fejemg.svg"
            alt="Image 1"
            height={50}
            width={150}
          />
        </div>
        <div className="flex-shrink-0 w-full h-full relative">
          <Image
            src="/marcas/nucleosul.png"
            alt="Image 2"
            fill
          />
        </div>
        <div className="flex-shrink-0 w-full h-full relative">
          <Image
            src="/marcas/mfbd.svg"
            alt="Image 3"
            fill
          />
        </div>
        {/* Repeat the images if necessary for a smooth loop */}
        <div className="flex-shrink-0 w-full h-full relative">
          <Image
            src="/marcas/fejemg.svg"
            alt="Image X"
            height={100}
            width={270}
          />
        </div>
        <div className="flex-shrink-0 w-full h-full relative">
          <Image
            src="/image2.jpg"
            alt="Image 2"
            fill
          />
        </div>
        <div className="flex-shrink-0 w-full h-full relative">
          <Image
            src="/image3.jpg"
            alt="Image 3"
            fill
          />
        </div>
      </div>
    </div>
  );
}
