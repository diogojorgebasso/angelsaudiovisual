import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Nossos Produtos
                </span>
                <h1
                  className="text-dark dark:text-white mb-3 text-3xl leading-[1.2] font-bold sm:text-4xl md:text-[40px]"
                >
                  O que oferecemos
                </h1>
                <p className="text-body-color text-base dark:text-dark-6">
                  Existem vários tipos de produtos que podemos oferecer.
                  O que varia é a sua demanda.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <Link href="produtos/pacote-completo">

                <div
                  className="mb-9 rounded-[20px] p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10"
                >
                  <div
                    className="bg-yellow-600 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
                  >
                    <svg className="mb-4" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 16 16">
                      <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                      <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                    </svg>
                    <svg
                      className="-mb-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
                      <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z" />
                      <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                    </svg>
                  </div>
                  <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">
                    Pacote Completo
                  </h4>
                  <p className="text-body-color dark:text-dark-6">
                    Fotografia + Vídeo + Edição SAMEDAY. Tudo o que você precisa
                    para começar a potencializar seu evento.
                  </p>
                </div>
              </Link>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <Link href="/produtos/drone">
                <div
                  className="mb-9 rounded-[20px] p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10"
                >
                  <div
                    className="bg-yellow-600 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="p-4" fill="white" viewBox="0 0 16 16">
                      <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Zm.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1c-.213 0-.458.158-.678.599Z" />
                    </svg>
                  </div>
                  <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">
                    Drone
                  </h4>
                  <p className="text-body-color dark:text-dark-6">
                    Serviços aéreos. Os ângulos que a gente consegue
                    seja com FPV ou drone tradicional são de tirar o chapéu.
                  </p>
                </div>
              </Link>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <Link href="produtos/pilulas-rede-social">
                <div
                  className="mb-9 rounded-[20px] p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10"
                >
                  <div
                    className="bg-yellow-600 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="p-4" fill="white" viewBox="0 0 16 16">
                      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                    </svg>
                  </div>
                  <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">
                    +10 Pílulas para Redes Sociais
                  </h4>
                  <p className="text-body-color dark:text-dark-6">
                    Oferecemos desde entrevistas curtas e edição de teaser até vídeo viral.
                  </p>
                </div>
              </Link>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <Link href="/produtos/edicao-video">
                <div
                  className="mb-9 rounded-[20px]  p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10"
                >
                  <div
                    className="bg-yellow-600 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="p-4" fill="white" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1 2.5A1.5 1.5 0 0 1 2.5 1h1A1.5 1.5 0 0 1 5 2.5h4.134a1 1 0 1 1 0 1h-2.01c.18.18.34.381.484.605.638.992.892 2.354.892 3.895 0 1.993.257 3.092.713 3.7.356.476.895.721 1.787.784A1.5 1.5 0 0 1 12.5 11h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5H6.866a1 1 0 1 1 0-1h1.711a2.839 2.839 0 0 1-.165-.2C7.743 11.407 7.5 10.007 7.5 8c0-1.46-.246-2.597-.733-3.355-.39-.605-.952-1-1.767-1.112A1.5 1.5 0 0 1 3.5 5h-1A1.5 1.5 0 0 1 1 3.5v-1zM2.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10 10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z" />
                    </svg>
                  </div>
                  <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">
                    +5 estilos de Edição de Vídeo
                  </h4>
                  <p className="text-body-color dark:text-dark-6">
                    Quando começamos não seguimentávamos igual fazemos hoje.
                    A edição depende do formato, público-alvo e plataforma.
                  </p>
                </div>
              </Link>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <Link href="/produtos/edicao-fotografia">
                <div
                  className="mb-9 rounded-[20px] p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10"
                >
                  <div
                    className="bg-yellow-600 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
                  >
                    <svg className="p-4" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M19 15V5H5v10h14zM3 3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.994.994 0 0 1 3 20.007V3.993zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM6 6h2v2H6V6zm0 11v2h12v-2H6z" />
                      </g>
                    </svg>
                  </div>
                  <h4 className="dark:text-white mb-[14px] text-2xl font-semibold">
                    Edição de Fotografia
                  </h4>
                  <p className="text-body-color dark:text-dark-6">
                    Seja você fotógrafo, turista com a família ou uma pessoa interessada
                    em salvar uma foto, esse pacote é para você.
                  </p>
                </div>
              </Link>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <Link href="/produtos/entrevista">

                <div
                  className="mb-9 rounded-[20px] p-10 shadow-2 hover:shadow-lg md:px-7 xl:px-10"
                >
                  <div
                    className="bg-yellow-600 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="p-4" viewBox="0 0 16 16">
                      <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                      <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                    </svg>
                  </div>
                  <h4 className="text-dark dark:text-white mb-[14px] text-2xl font-semibold">
                    Entrevistas
                  </h4>
                  <p className="text-body-color dark:text-dark-6">
                    Temos a capacidade de fazer entrevistas com microfone profissional e equipe
                    de iluminação. Tudo para que seu evento seja o melhor possível.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>);
}
