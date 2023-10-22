export default function Sobre() {
  return (
    <main>
      <section className="background-radial-gradient">
        <div className="h-full container mx-auto">
          <div className=" grid h-screen place-items-center">
            <h1 className="mb-12 text-5xl font-bold tracking-tight  md:text-6xl xl:text-9xl">
              Sobre o que é<br /><span className="tracking-tight text-pink">nosso trabalho?</span>
            </h1>
            <h2 className=" text-2xl tracking-tight  md:text-4xl xl:text-5xl">O que vem depois da Missão, Visão e Valores?</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="animate-bounce " viewBox="0 0 16 16">
              <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z" />
            </svg>
          </div>
        </div>
      </section>
      <section className="container mx-auto grid grid-flow-row auto-rows-max">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
            <div className="flex lg:py-12">
              <h3 className="text-2xl tracking-tight md:text-4xl xl:text-5xl rounded-full">1</h3>
              <h4>Missão</h4>
            </div>
          </div>
          <div className=" w-full shrink-0 grow-0 text-center text-white">
            <div className="lg:pl-12">
              <p className="mb-6 pb-2 lg:pb-0">
                Nossa missão é desenvolver, produzir e comercializar Vídeos e Fotos
                que as empresas tenham orgulho de mostrar a seus clientes.
              </p>
            </div>
          </div>
          <div>
            <h3>2</h3>
            <h4>Visão</h4>
            <p>Ser a referência em Posicionamento de Marca no Brasil.</p>
          </div>
          <div>
            <h3>3</h3>
            <h4>Valores</h4>
            <p>Foco, Agilidade e </p>
          </div>
        </div>

      </section>
    </main>
  );
}
