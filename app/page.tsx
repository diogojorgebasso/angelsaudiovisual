/* eslint-disable @next/next/no-img-element */

import Script from 'next/script';
import Link from 'next/link';
import Faq from '@/components/Hero/Faq';
import Feautures from '@/components/Hero/Feautures';
import Testimonials from '@/components/Hero/Testimonials';
import CTA from '@/components/Hero/CTA';
import Newsletter from '@/components/Newsletter/Newsletter';
import FoundersNote from '@/components/Hero/FoundersNote';

export default function Page() {
  return (
    <main>
      <section className="relative h-screen">
        <video controls muted loop className="absolute top-0 left-0 w-full h-full object-cover brightness-50" autoPlay>
          <source type="video/mp4" src="https://storage.googleapis.com/angels-audiovisual.appspot.com/Main_1.mp4" />
          <track src="/captacao_video_DJ_papitos.vtt" kind="captions" />
        </video>
        <div className="place-items-center grid absolute top-0 left-0 w-full h-full">
          <div>
            <Script rel="preconnect" src="https://www.google.com/recaptcha/api.js" />
            <h1 className="text-5xl text-white font-bold tracking-tight md:text-4xl xl:text-7xl text-center">
              Nós cuidamos <br />de sua imagem.
            </h1>
            <p className="text-lg pb-8 text-center text-white">
              Seja Foto, Vídeo ou Drone, seu evento merece o melhor.<br />
              Muito além da entrega rápida e profissional.<br />
            </p>
            <div>
              <Link href="/produtos">
                <button
                  type="button"
                  className="text-black bg-white rounded-full px-4 py-2 shadow-lg hover:bg-gray-100"
                >Faça um orçamento agora. É grátis.
                </button>
              </Link>
            </div>

            <div className="flex py-4">
              <img src="/clientes/gustavo-hermeto.webp" height={32} width={32} alt="Gustavo Hermeto, atual presidente do DA" className="rounded-full my-2" />
              <img src="/clientes/giovanna-leone.webp" height={32} width={32} alt="Giovanna Leone, atual presidente do Albatroz" className="  -mx-2 rounded-full my-2" />
              <img src="/clientes/raquel-beyoha.webp" height={32} width={32} alt="Raquel Beyoha, atual presidente do EPA" className="z-10 -mx-2 rounded-full my-2" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="z-0 -mx-2 w-8 h-8 my-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="mx-2 text-white">+33 clientes satisfeitos</p>
                <div className="flex ml-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <p className="text-white">
                    (5/5 Google)
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div>
            <h2 className="text-center mb-16 text-white text-3xl font-bold">
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

      <Feautures />
      <Testimonials />
      <Faq />
      <CTA />
      <FoundersNote />
      <Newsletter />
    </main>
  );
}
