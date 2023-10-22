/* eslint-disable @next/next/no-img-element */

//import YouTubeFrame from '@/components/Hero/YouTubeFrame';
import Script from 'next/script';
import Link from 'next/link';
import Faq from '@/components/Hero/Faq';

export default function Page() {
  return (
    <main className="grid justify-items-stretch ">
      <section className="background-radial-gradient">
        <div className="h-full grid h-screen place-items-center">
          <div className="grid place-items-center gap-12 lg:grid-cols-2">
            <div className="mt-20">
              <Script src="https://www.google.com/recaptcha/api.js" />
              <h1 className="mb-12 text-5xl font-bold tracking-tight  md:text-6xl xl:text-7xl">
                Nós cuidamos <br /><span className="tracking-tight">de sua imagem.</span>
              </h1>
              <p className="text-lg pb-8">
                Seja Foto, Vídeo ou Drone, seu evento merece o melhor.<br />
                Muito além da entrega rápida e profissional.
              </p>
              <Link href="/produtos">
                <button
                  type="button"
                  className="text-black bg-white rounded-full px-4 py-2 shadow-lg hover:bg-gray-100"
                >Faça um orçamento agora. É grátis.
                </button>
              </Link>
              <div className="flex py-4">
                <img src="/clientes/gustavo-hermeto.jpeg" height={16} width={32} alt="Gustavo Hermeto, atual presidente do DA" className="rounded-full my-2" />
                <img src="/clientes/giovanna-leone.jpeg" height={16} width={32} alt="Giovanna Leone, atual presidente do Albatroz" className="  -mx-2 rounded-full my-2" />
                <img src="/clientes/raquel-beyoha.jpeg" height={16} width={32} alt="Raquel Beyoha, atual presidente do EPA" className="z-10 -mx-2 rounded-full my-2" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="z-0 -mx-2 w-8 h-8 my-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="mx-2">+33 clientes satisfeitos</p>
                  <div className="flex ml-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <p>
                      (5/5 Google)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-32 text-center">
            <h2 className="mb-16 text-3xl font-bold">
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

      <Faq />

      {/* Founder's Note */}
      <section className="mb-32">
        <div
          className="block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        >
          <div className="flex flex-wrap items-center">
            <div className="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
              <img
                src="/equipe/diogo-basso.jpg"
                alt="Imagem do Diogo Basso com uma câmera"
                className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
              />
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
              <div className="px-6 py-12 md:px-12">
                <h2 className="mb-4 text-2xl font-bold">
                  Nota do Fundador
                </h2>
                <p className="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z" />
                  </svg>
                  posicionamento
                </p>
                <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                  <a rel="noopener noreferrer" target="blank" href="https://portal.fgv.br/noticias/pesquisa-mostra-66-micro-e-pequenas-empresa-estao-niveis-iniciais-maturidade-digital">66% das empresas estão em estágios iniciais de maturidade digital. </a>
                  Sabe, então, o que diferencia a sua empresa de outras? A maneira como
                  você se posiciona
                  diante do mercado. E posicionamento hoje em dia se dá no digital e no audiovisual.
                  Bem posicionado, você consegue atrair mais clientes e
                  <u>aumentar o faturamento </u>.
                </p>
                <p className="text-neutral-500 dark:text-neutral-300">
                  <b>Por isso criamos a Angels. Para te ajudar a se posicionar melhor.</b>
                </p>
                <p className="mb-6 text-neutral-500 dark:text-neutral-300">Neste ano levantamos mais de 30 projetos para alavancar a presença
                  audiovisual das Empresas. Mais de duas milhões de impressões nas empresas.
                </p>
                <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                  As portas estão abertas para você também.
                  <Link className="underline" href="/produtos">
                    Vamos conversar?
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
