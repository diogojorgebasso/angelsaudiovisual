'use client';

import Image from 'next/image';
import YouTubeFrame from '@/components/Hero/YouTubeFrame';

export default function Page() {
  return (
    <main className="mx-auto ">
      <section className="background-radial-gradient">
        <div className="px-6 py-12 text-center md:px-12 lg:text-left">
          <div className="container mx-auto">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="mt-12 lg:mt-0">
                <h1 className="mb-12 text-5xl font-bold tracking-tight text-[hsl(218,81%,95%)] md:text-6xl xl:text-7xl">
                  Nós cuidamos <br /><span className="text-[hsl(218,81%,75%)]">de sua imagem.</span>
                </h1>
                <p className="text-lg text-[hsl(218,81%,95%)]">
                  Seja Foto, Vídeo ou Drone, seu evento merece o melhor.<br />
                  Muuuito além da entrega rápida e profissional.
                  quos.
                </p>
                <button
                  type="button"
                  className="rounded-full "
                >Faça um orçamento agora. É grátis.
                </button>
                <Image src="/clientes/gustavo-hermeto.jpg" height={32} width={32} alt="Gustavo Hermeto, atual presidente do DA" className="w-32 rounded-full" />
                <Image src="/clientes/giovanna-leone.jpg" height={32} width={32} alt="Giovanna Leone, atual presidente do Albatroz" className="w-32 rounded-full" />
                <Image src="/clientes/raquel-beyoha.jpg" height={32} width={32} alt="Raquel Beyoha, atual presidente do EPA" className="w-32 rounded-full" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>+30
              </div>
              <div className="mb-12 lg:mb-0">
                <div className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg">
                  <iframe
                    title="Video de apresentação da Angels"
                    className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full"
                    src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
                    data-gtm-yt-inspected-2340190_699="true"
                    id="240632615"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-32 text-center">
          <h2 className="mb-16 text-3xl text-white font-bold">
            Mais de 30 projetos entregues
          </h2>

          <div className="grid items-center gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="mb-12 lg:mb-0">
              <Image className="px-6 md:px-12" src="/barcultural.png" alt="Logo do Bar Cultural, maior Da da América Latina" width={170} height={100} />
            </div>

            <div className="mb-12 lg:mb-0">
              <Image className="px-6 md:px-12" src="/jyba.png" alt="Logo do Jybá, eleita melhor Pilsen do Brasil" width={170} height={100} />
            </div>

            <div className="mb-12 lg:mb-0">
              <Image className="px-6 md:px-12" src="/albatroz.png" alt="Logo do Albatroz, Diretório Acadêmico de Medicina" width={170} height={100} />
            </div>

            <div className="mb-12 lg:mb-0">
              <Image
                className="px-6 md:px-12"
                src="/mfbd.png"
                alt="Logo do MFBD, Escritório com mais de 20 anos de atuação"
                width={180}
                height={100}
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
