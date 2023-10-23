/* eslint-disable @next/next/no-img-element */

'use client';

export default function Feautures() {
  return (
    <section className="mt-20 container mx-auto">
      <div className="mb-16 flex flex-wrap">
        <div className="mb-6 mt-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
          <video controls muted loop className=" w-full h-full object-cover brightness-50" autoPlay>
            <source type="video/mp4" src="https://firebasestorage.googleapis.com/v0/b/angels-audiovisual.appspot.com/o/Youtube.mp4?alt=media&token=0e40eb4b-3f27-4f7b-bfb1-7d9196bc8cc8" />
          </video>
        </div>

        <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
          <h3 className="mb-4 text-2xl font-bold">Vídeos</h3>
          <div className="mb-4 flex items-center text-sm font-medium text-danger dark:text-danger-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
            </svg>
            <p className="ml-2">
              Artísticos
            </p>
          </div>
          <p className=" mb-6 ">
            Uma produtora de vídeos artísticos é como um coletivo de sonhadores
            e contadores de histórias. Nessa pequena mas apaixonada equipe,
            você encontra pessoas com um olhar especial para a beleza e a
            emoção que a vida cotidiana esconde. Eles são os mágicos que
            transformam momentos simples em momentos extraordinários.
          </p>
          <p className="">
            Este ao lado é nosso Aftermovie para uma atração dos Jogos da INATEL.
            <a className="underline" target="blank" rel="noopener noreferrer nofollow" href="https://www.youtube.com/@AngelsAudiovisual">No nosso canal do Youtube você encontra mais vídeos como esse.</a>
          </p>
        </div>
      </div>

      <div className="mb-16 flex flex-wrap lg:flex-row-reverse">
        <div className="mb-6 shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pl-6">
          <div
            className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <img src="/jyba_casamento.jpg" width={400} height={400} alt="Louvre" />
            <a href="/produtos/fotografia">
              <div
                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
              />
            </a>
          </div>
        </div>

        <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pr-6">
          <h3 className="mb-4 text-2xl font-bold">Fotografia de Eventos</h3>
          <div className="mb-4 flex items-center text-sm font-medium text-primary dark:text-primary-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="mr-2 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
              />
            </svg>
            <p>
              Arte
            </p>
          </div>
          <p>
            A fotografia de eventos é como um farol da nossa humanidade.
            Ela registra os momentos mais íntimos e efêmeros da vida das pessoas,
            revelando o verdadeiro espírito humano em sua forma mais pura.
          </p>
          <br />
          <p> Cada evento
            é uma história a ser contada, uma narrativa da vida, e o fotógrafo é o
            contador de histórias silencioso que capta a alegria, a emoção, a conexão
            e até mesmo a vulnerabilidade dos seres humanos.
          </p>
          <br />
          <p>
            A fotografia de eventos é uma forma de arte que celebra a vida,
            a diversidade, a cultura e a expressão humana.É um testemunho da nossa
            humanidade, da nossa busca por momentos significativos e da
            necessidade de compartilhar esses momentos com o mundo.
          </p>
        </div>
      </div>

    </section>
  );
}
