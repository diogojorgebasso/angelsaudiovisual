import Link from 'next/link';

export default function Sobre() {
  return (
    <main>
      <section className="background-radial-gradient">
        <div className="h-full container mx-auto">
          <div className=" grid h-screen place-items-center">
            <h1 className="mb-12 text-5xl text-white font-bold tracking-tight  md:text-6xl xl:text-9xl">
              Sobre o que é<br /><span className="tracking-tight text-pink">nosso trabalho?</span>
            </h1>
            <h2 className=" text-2xl tracking-tight text-white  md:text-4xl xl:text-5xl">O que vem depois da Missão, Visão e Valores?</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="animate-bounce " viewBox="0 0 16 16">
              <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z" />
            </svg>
          </div>
        </div>
      </section>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <p className="font-normal text-sm leading-3 text-indigo-700 dark:text-indigo-500 hover:text-indigo-800 cursor-pointer pb-2">POSICIONAMENTO</p>
        <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
          <div className="w-full lg:w-6/12">
            <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 dark:text-white leading-9">Estamos aqui para trabalhar com imagem.</h2>
            <p className="font-normal text-base leading-6 mt-6">É um fato que o <b> aumento de faturamento</b> vem com um posicionamento
              correto acerca de seu produto.
            </p>
          </div>
          <div className="w-full lg:w-6/12">
            <video controls>
              <source type="video/mp4" src="https://storage.googleapis.com/angels-audiovisual.appspot.com/Sequence%2002_1.mp4" />
              <track src="/captacao_video_DJ_papitos.vtt" kind="captions" srcLang="pt-BR" />
            </video>
          </div>
        </div>

        <div className="relative mt-24">
          <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
            <div className="z-20 p-3 w-12 h-12 bg-gray-800 rounded-full sm:block hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 16 16">
                <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001" />
              </svg>
            </div>
            <div className="z-20 p-3 w-12 h-12 bg-gray-800 p-3 rounded-full sm:block hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z" />
              </svg>
            </div>
            <div className="z-20 p-3 w-12 h-12 bg-gray-800 p-3 rounded-full sm:block hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 16 16">
                <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2Zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672Z" />
                <path d="M13.5 9a.5.5 0 0 1 .5.5V11h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V12h-1.5a.5.5 0 0 1 0-1H13V9.5a.5.5 0 0 1 .5-.5Z" />
              </svg>
            </div>
          </div>
          <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
          <div>
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5  mt-6">Fundada</p>
            <p className="font-normal text-base leading-6 mt-6">Os profissionais da Angels estavam atuando no mercado há, no mínimo, 5 anos. Em meados de 2022 decidimos juntar forças.</p>
          </div>
          <div>
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5  mt-6">+1M de Impressões</p>
            <p className="font-normal text-base leading-6 mt-6">Sim, 1 Milhão. Essa é a soma do impacto de nosso trabalho. Em média, cada vídeo nosso bate 20k visualizações. </p>
          </div>
          <div>
            <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5  mt-6">+30 projetos 2022</p>
            <p className="font-normal text-base leading-6 mt-6">Cada cliente é único e merce um planejamento de projeto exclsuivo. Isso que fazemos. </p>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
          <div className="w-full lg:w-6/12">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 ">Nossa missão</h2>
            <p className="font-bold text-base leading-6 mt-6 w-full lg:w-10/12 xl:w-9/12">Enriquecer o posicionamento dos clientes através de filmes. </p>
            <p className="font-normal text-base leading-6 w-full lg:w-10/12 xl:w-9/12 mt-10">Não é fácil fazer audiovisual. Mas é MUITO gratificante. Estamos falando de +50 horas de edição, +5 horas de briefing, +5 horas de captação com 4 profissionaris para fazer um evento acontecer.</p>
          </div>
          <div className="w-full lg:w-6/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
              <div className="flex p-4 shadow-md">
                <div className="mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z" />
                  </svg>
                </div>
                <Link href="/sobre/equipe">
                  <div>
                    <h3 className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 ">Equipe</h3>
                    <p className="mt-2 font-normal text-base leading-6">É nossa equipe que realiza nossa missão, todos os dias.</p>
                  </div>
                </Link>
              </div>
              <div className="flex p-4 shadow-md">
                <div className="mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                  </svg>
                </div>
                <Link href="/clientes">
                  <div>
                    <h3 className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 ">Clientes</h3>
                    <p className="mt-2 font-normal text-base leading-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                  </div>
                </Link>
              </div>
              <div className="flex p-4 shadow-md">
                <div className="mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z" />
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                  </svg>
                </div>
                <Link href="/imprensa">
                  <div>
                    <h3 className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 ">Imprensa</h3>
                    <p className="mt-2 font-normal text-base leading-6">Veja o que falam de nós.</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
            <div className="flex p-4 shadow-md">
              <div className="mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </div>
              <Link href="/sobre/equipe">
                <div>
                  <h3 className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 ">Foco</h3>
                  <p className="mt-2 font-normal text-base leading-6">Isso se materializa pela nossa Natureza de Boutique.</p>
                </div>
              </Link>
            </div>
            <div className="flex p-4 shadow-md">
              <div className="mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                </svg>
              </div>
              <Link href="/clientes">
                <div>
                  <h3 className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 ">Agilidade</h3>
                  <p className="mt-2 font-normal text-base leading-6">O cliente pede por uma entrega rápida. As mídias pedem isso. Nós entregamos.</p>
                </div>
              </Link>
            </div>
            <div className="flex p-4 shadow-md">
              <div className="mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z" />
                </svg>
              </div>
              <Link href="/imprensa">
                <div>
                  <h3 className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 ">Criatividade</h3>
                  <p className="mt-2 font-normal text-base leading-6">A nossa arte é trabalhar com imagem, pela a imagem.</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-6/12">
            <div className="w-full">
              <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 ">Nossos valores</h2>
              <p className="font-bold text-base leading-6 mt-6 w-full lg:w-10/12 xl:w-9/12">Foco, Agilidade e Criatividade. </p>
              <p className="font-normal text-base leading-6 w-full lg:w-10/12 xl:w-9/12 mt-10">É difícil selecionar dentro de tudo que acreditamos os três valores mais importantes. Muito difícil. Mas esses três têm um espaço reservado na Angels.
                <br />  <br /> Focamos. Os responsáveis pelo projeto tocam um por vez.
                <br />  <br /> Ágeis. O mercado não espera. O seu cliente muito menos.
                <br />  <br /> Criativos. O trabalho audiovisual é arte.
                Sem Criatividade, não somos nada.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto container f-f-p px-4 xl:px-0 py-24">
          <h1 className="focus:outline-none text-center text-3xl lg:text-4xl font-extrabold lg:leading-9 tracking-wider">Nossa História</h1>
          <div className="md:mt-24 f-f-p">
            <div className="hidden md:flex justify-center w-full">
              <div className="flex flex-col items-center md:items-end md:pr-12 md:border-r-4 border-gray-300 relative md:w-1/2">
                <div aria-label="sign up">
                  <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" className="bi bi-subtract" viewBox="0 0 16 16">
                    <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z" />
                  </svg>
                </div>
                <div aria-label="2">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mt-12" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="23.5" transform="rotate(90 24 24)" fill="#F3F4F6" stroke="#818CF8" />
                    <path d="M18.224 31.248C20.256 29.616 21.848 28.28 23 27.24C24.152 26.184 25.12 25.088 25.904 23.952C26.704 22.8 27.104 21.672 27.104 20.568C27.104 19.528 26.848 18.712 26.336 18.12C25.84 17.512 25.032 17.208 23.912 17.208C22.824 17.208 21.976 17.552 21.368 18.24C20.776 18.912 20.456 19.816 20.408 20.952H18.296C18.36 19.16 18.904 17.776 19.928 16.8C20.952 15.824 22.272 15.336 23.888 15.336C25.536 15.336 26.84 15.792 27.8 16.704C28.776 17.616 29.264 18.872 29.264 20.472C29.264 21.8 28.864 23.096 28.064 24.36C27.28 25.608 26.384 26.712 25.376 27.672C24.368 28.616 23.08 29.72 21.512 30.984H29.768V32.808H18.224V31.248Z" fill="#052E47" />
                  </svg>
                </div>
                <div className="flex mt-12 flex-col items-center lg:items-end md:w-8/12">
                  <h1 className="focus:outline-none dark:text-white  text-xl font-bold leading-5">Crescimento da Equipe</h1>
                  <h2 className="focus:outline-none text-gray-500 dark:text-gray-200 mt-3 pl-3 text-center md:text-right text-base leading-6 tracking-wide">Adicionamos um Diretor Criativo de São Paulo, um editor de vídeo, um responsável pela Loggagem. </h2>
                </div>
                <div className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="currentColor" className="mt-24" viewBox="0 0 16 16">
                    <path d="M8 0a.5.5 0 0 1 .473.337L9.046 2H14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1.85l1.323 3.837a.5.5 0 1 1-.946.326L11.092 11H8.5v3a.5.5 0 0 1-1 0v-3H4.908l-1.435 4.163a.5.5 0 1 1-.946-.326L3.85 11H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4.954L7.527.337A.5.5 0 0 1 8 0zM2 3v7h12V3H2z" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start md:pl-12 lg:border-gray-400 mt-20 md:mt-0 md:w-1/2">

                <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
                  <h1 className="focus:outline-none dark:text-white  text-xl font-bold leading-5">Começamos com duas pessoas.</h1>
                  <h2 className="focus:outline-none text-gray-500 dark:text-gray-200 mt-3 text-base leading-6 tracking-wide">Uma fotógrafa e um filmaker. Ficaram sem dormir por bastante tempo captando e editando material.</h2>
                </div>
                <div aria-label="wallet">
                  <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" fill="currentColor" className="mt-32" viewBox="0 0 16 16">
                    <path d="M1 13.5a.5.5 0 0 0 .5.5h3.797a.5.5 0 0 0 .439-.26L11 3h3.5a.5.5 0 0 0 0-1h-3.797a.5.5 0 0 0-.439.26L5 13H1.5a.5.5 0 0 0-.5.5zm10 0a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5z" />
                  </svg>
                </div>
                <div aria-label="3">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mt-20" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="23.5" transform="rotate(90 24 24)" fill="#F3F4F6" stroke="#818CF8" />
                    <path d="M17.44 20.016C17.552 18.544 18.12 17.392 19.144 16.56C20.168 15.728 21.496 15.312 23.128 15.312C24.216 15.312 25.152 15.512 25.936 15.912C26.736 16.296 27.336 16.824 27.736 17.496C28.152 18.168 28.36 18.928 28.36 19.776C28.36 20.768 28.072 21.624 27.496 22.344C26.936 23.064 26.2 23.528 25.288 23.736V23.856C26.328 24.112 27.152 24.616 27.76 25.368C28.368 26.12 28.672 27.104 28.672 28.32C28.672 29.232 28.464 30.056 28.048 30.792C27.632 31.512 27.008 32.08 26.176 32.496C25.344 32.912 24.344 33.12 23.176 33.12C21.48 33.12 20.088 32.68 19 31.8C17.912 30.904 17.304 29.64 17.176 28.008H19.288C19.4 28.968 19.792 29.752 20.464 30.36C21.136 30.968 22.032 31.272 23.152 31.272C24.272 31.272 25.12 30.984 25.696 30.408C26.288 29.816 26.584 29.056 26.584 28.128C26.584 26.928 26.184 26.064 25.384 25.536C24.584 25.008 23.376 24.744 21.76 24.744H21.208V22.92H21.784C23.256 22.904 24.368 22.664 25.12 22.2C25.872 21.72 26.248 20.984 26.248 19.992C26.248 19.144 25.968 18.464 25.408 17.952C24.864 17.44 24.08 17.184 23.056 17.184C22.064 17.184 21.264 17.44 20.656 17.952C20.048 18.464 19.688 19.152 19.576 20.016H17.44Z" fill="#052E47" />
                  </svg>
                </div>
                <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
                  <h3 className="focus:outline-none text-xl dark:text-white font-bold leading-5">Do sul de Minas para o Brasil!</h3>
                  <h4 className="focus:outline-none text-gray-500 dark:text-gray-200 mt-3 text-base leading-6 tracking-wide">Hoje não realizamos mais eventos somente para o Sul de Minas como também para São Paulo.
                    Estamos muito felizes e sonhamos cada dia em mais eventos.
                  </h4>
                </div>
              </div>
            </div>
            <div className="md:hidden flex flex-col items-center w-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="my-10" viewBox="0 0 16 16">
                <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z" />
              </svg>

              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="24" transform="rotate(90 24 24)" fill="#4338CA" />
                <path d="M21.912 17.64V15.648H26.424V33H24.216V17.64H21.912Z" fill="#F3F4F6" />
              </svg>
              <div className="mt-10">
                <h3 className="text-xl text-center dark:text-white  tracking-wide leading-5 font-bold">Começamos somente com duas pessoas</h3>
                <h4 className="text-gray-500 dark:text-gray-200 mt-3 text-center text-base leading-6 tracking-wide">Uma fotógrafa e um filmaker. Ficaram sem dormir por bastante tempo captando e editando material.</h4>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="my-10" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.36 7.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.836 1.973-1.836 1.09 0 2.063.637 2.063 2.688 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z" />
                <path d="M12.438 8.668V14H11.39V9.684h-.051l-1.211.859v-.969l1.262-.906h1.046zM4.5 13.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z" />
              </svg>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="23.5" transform="rotate(90 24 24)" fill="#F3F4F6" stroke="#818CF8" />
                <path d="M18.224 31.248C20.256 29.616 21.848 28.28 23 27.24C24.152 26.184 25.12 25.088 25.904 23.952C26.704 22.8 27.104 21.672 27.104 20.568C27.104 19.528 26.848 18.712 26.336 18.12C25.84 17.512 25.032 17.208 23.912 17.208C22.824 17.208 21.976 17.552 21.368 18.24C20.776 18.912 20.456 19.816 20.408 20.952H18.296C18.36 19.16 18.904 17.776 19.928 16.8C20.952 15.824 22.272 15.336 23.888 15.336C25.536 15.336 26.84 15.792 27.8 16.704C28.776 17.616 29.264 18.872 29.264 20.472C29.264 21.8 28.864 23.096 28.064 24.36C27.28 25.608 26.384 26.712 25.376 27.672C24.368 28.616 23.08 29.72 21.512 30.984H29.768V32.808H18.224V31.248Z" fill="#052E47" />
              </svg>
              <div className="mt-10">
                <h3 className="text-xl tracking-wide dark:text-white  text-center leading-5 font-bold">Crescimento da Equipe</h3>
                <h4 className="text-gray-500 dark:text-gray-200 mt-3 pl-3 text-center text-base leading-6 tracking-wide">Adicionamos um Diretor Criativo de São Paulo, um editor de vídeo, um responsável pela Loggagem. Definimos funções e tarefas de acordo com a Expertise. </h4>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="my-10" viewBox="0 0 16 16">
                <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
              </svg>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="23.5" transform="rotate(90 24 24)" fill="#F3F4F6" stroke="#818CF8" />
                <path d="M17.44 20.016C17.552 18.544 18.12 17.392 19.144 16.56C20.168 15.728 21.496 15.312 23.128 15.312C24.216 15.312 25.152 15.512 25.936 15.912C26.736 16.296 27.336 16.824 27.736 17.496C28.152 18.168 28.36 18.928 28.36 19.776C28.36 20.768 28.072 21.624 27.496 22.344C26.936 23.064 26.2 23.528 25.288 23.736V23.856C26.328 24.112 27.152 24.616 27.76 25.368C28.368 26.12 28.672 27.104 28.672 28.32C28.672 29.232 28.464 30.056 28.048 30.792C27.632 31.512 27.008 32.08 26.176 32.496C25.344 32.912 24.344 33.12 23.176 33.12C21.48 33.12 20.088 32.68 19 31.8C17.912 30.904 17.304 29.64 17.176 28.008H19.288C19.4 28.968 19.792 29.752 20.464 30.36C21.136 30.968 22.032 31.272 23.152 31.272C24.272 31.272 25.12 30.984 25.696 30.408C26.288 29.816 26.584 29.056 26.584 28.128C26.584 26.928 26.184 26.064 25.384 25.536C24.584 25.008 23.376 24.744 21.76 24.744H21.208V22.92H21.784C23.256 22.904 24.368 22.664 25.12 22.2C25.872 21.72 26.248 20.984 26.248 19.992C26.248 19.144 25.968 18.464 25.408 17.952C24.864 17.44 24.08 17.184 23.056 17.184C22.064 17.184 21.264 17.44 20.656 17.952C20.048 18.464 19.688 19.152 19.576 20.016H17.44Z" fill="#052E47" />
              </svg>
              <div className="flex mt-10 flex-col items-center md:items-start md:w-8/12">
                <h3 className="text-xl text-center dark:text-white tracking-wide leading-5 font-bold">Do sul de Minas para o Brasil!</h3>
                <h4 className="text-gray-500 dark:text-gray-200 mt-3 text-center text-base leading-6 tracking-wide">Hoje realizamos eventos para além do Sul de Minas, para São Paulo.
                  Estamos muito felizes e sonhamos cada dia em mais eventos.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
