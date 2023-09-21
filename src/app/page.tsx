import Image from 'next/image'
   import { Picture } from "@astrojs/image/components";
import AngelsLogo from "/angels.png";
import HeroImage from "~/components/hero-image.astro";
import Starfield from "~/components/starfield.astro";

const sizes = "(min-width: 640px) 42vw, 67vw";

export default function Home() {
  return (
<main className="relative h-full bg-black">
  <Starfield />
  <div id="splash-bg-fallback" className="absolute inset-0 hidden opacity-40">
    <HeroImage />
  </div>
  <div className="relative grid h-full place-items-center sm:grid-cols-2">
    <h2
      className="flex flex-col gap-2 self-end sm:gap-4 sm:self-auto sm:justify-self-end"
    >
      <Icon name="logomark" className="h-24 text-white md:h-32" />
      <div
        className="gradient-text text-center font-extrabold tracking-tighter text-8xl"
      >
        Build fast
        <br /> websites,
        <br /> faster.
      </div>
    </h2>
    <div
      id="angel"
      className="w-2/3 max-w-3xl self-start sm:w-10/12 sm:self-auto sm:justify-self-start"
    >
      <Image
        className="h-full w-full object-cover"
        src={AngelsLogo}
        width={450}
        height={800}
        loading="eager"
        alt="A logo da Angels mexendo de cima para baixo"
      />
    </div>
  </div>
</main>
  )
}
