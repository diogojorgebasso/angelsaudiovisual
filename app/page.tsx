/* eslint-disable @next/next/no-img-element */

'use client';

//import YouTubeFrame from '@/components/Hero/YouTubeFrame';
import Script from 'next/script';

export default function Page() {
  return (
    <main className="grid justify-items-stretch ">
      <section className="background-radial-gradient">
        <div className="h-full h-screen container mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="mt-12 lg:mt-0">
              <Script src="https://www.google.com/recaptcha/api.js" />
              <h1 className="mb-12 text-5xl font-bold tracking-tight text-[hsl(218,81%,95%)] md:text-6xl xl:text-7xl">
                Nós cuidamos <br /><span className="text-[hsl(218,81%,75%)]">de sua imagem.</span>
              </h1>
              <p className="text-lg text-[hsl(218,81%,95%)]">
                Seja Foto, Vídeo ou Drone, seu evento merece o melhor.<br />
                Muuuito além da entrega rápida e profissional.
              </p>
              <button
                type="button"
                className="rounded-md bg-white"
              >Faça um orçamento agora. É grátis.
              </button>
              <div className="flex relative">
                <img src="/clientes/gustavo-hermeto.jpeg" height={32} width={32} alt="Gustavo Hermeto, atual presidente do DA" className="rounded-full" />
                <img src="/clientes/giovanna-leone.jpeg" height={32} width={32} alt="Giovanna Leone, atual presidente do Albatroz" className="  -mx-2 rounded-full" />
                <img src="/clientes/raquel-beyoha.jpeg" height={32} width={32} alt="Raquel Beyoha, atual presidente do EPA" className="z-10 -mx-2 rounded-full" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="z-0 -mx-2 w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="mx-2">+30 clientes satisfeitos</p>
              </div>
            </div>
          </div>

          <div className="mb-32 text-center">
            <h2 className="mb-16 text-3xl text-white font-bold">
              Mais de 30 projetos entregues em 2023
            </h2>

            <div className="grid items-center gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="mb-12 lg:mb-0">
                <img className="px-6 md:px-12" src="/barcultural.png" alt="Logo do Bar Cultural, maior Da da América Latina" width={170} height={100} />
              </div>

              <div className="mb-12 lg:mb-0">
                <img className="px-6 md:px-12" src="/jyba.png" alt="Logo do Jybá, eleita melhor Pilsen do Brasil" width={170} height={100} />
              </div>

              <div className="mb-12 lg:mb-0">
                <img className="px-6 md:px-12" src="/albatroz.png" alt="Logo do Albatroz, Diretório Acadêmico de Medicina" width={170} height={100} />
              </div>

              <div className="mb-12 lg:mb-0">
                <img
                  className="px-6 md:px-12"
                  src="/mfbd.png"
                  alt="Logo do MFBD, Escritório com mais de 20 anos de atuação"
                  width={180}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Founder's Note */}
      <div className="justify-self-auto  ">
        <h2> Nota do Fundador</h2>
        <p>Somente 8% dos negócios estão presentes no meio digital.</p>
        <p>Enquanto é muito fácil entrar pro digital (obrigado, Wordpress), muitos de vocês têm
          dificuldade em se posicionar.
        </p>
        <p>
          Se você está aqui, você é um dos 8%,  aqui estão algumas de suas maiores dificuldade:
        </p>
        <ol>
          <li>
            O que raios postar?
          </li>
          <li>
            Não tenho tempo pra isso.
          </li>
          <li>
            Não sei como fazer.
          </li>
        </ol>
      </div>
    </main>
  );
}
