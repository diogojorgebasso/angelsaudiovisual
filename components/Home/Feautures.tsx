/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';

export default function Feautures() {
  return (
    <section className="mt-5 container mx-auto" id="feautures">
      <div className="mb-16 flex flex-wrap">
        <div className="mb-6 w-full shadow-xl shadow-neutral-900 shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
          <video loop autoPlay muted controls className="w-full h-full object-cover">
            <source type="video/mp4" src="/Luan.mp4" />
            <track src="/captacao_video_Luan_Santana.vtt" kind="captions" srcLang="pt-BR" />
          </video>
        </div>

        <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
          <div className="flex justify-between">
            <h3 className=" text-2xl font-bold">Produção de Vídeos de Eventos</h3>
            <div className="flex items-center text-sm font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
              </svg>
              <p className="ml-2">
                Artísticos
              </p>
            </div>
          </div>
          <div className="pt-4 shadow-md">
            <h4 className="text-xl font-semibold mb-4">Histórias que Cativam e Emocionam</h4>
            <p className="pl-4">Nosso sonho é contar histórias, juntando o mundo do cinema com o
              seu evento. Capturando não apenas o que vemos, mas o que sentimos.
            </p>
          </div>
          <div className="pt-4 shadow-md">
            <h4 className="text-xl font-semibold mb-4">Você no controle.</h4>
            <p className="pl-4">Trabalhamos através de Processos muito bem definidos
              em estreita colaboração com você para garantir que
              o aftermovie reflita perfeitamente a identidade e a visão do seu evento.
            </p>
          </div>
          <div className="pt-4 shadow-md">
            <h4 className="text-xl font-semibold mb-4">Exemplos de Excelência</h4>
            <p className="pl-4">Acompanhe <Link className="underline" href="/produtos/edicao-video">nossos aftermovies de eventos anteriores</Link> para ver
              como podemos transformar seu sonho em realidade.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16 flex flex-wrap lg:flex-row-reverse">
        <div className="w-full mb-6 mt-6 shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
          <Image
            width={500}
            height={300}
            layout="responsive"
            src="/Publico_correndo.webp"
            objectFit="cover"
            quality={75}
            alt="Menina correndo para pegar o prêmio. Evento privado em BH."
          />
        </div>

        <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pr-6">
          <div className="flex justify-between">
            <h3 className="mb-4 text-2xl font-bold">Fotografia de Eventos</h3>
            <div className="mb-4 flex items-center text-sm font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                width={16}
                height={16}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                />
              </svg>
              <p className="ml-2">
                Arte
              </p>
            </div>
          </div>
          <div className=" pt-4 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4">Promoção Futura do Evento</h4>
            <p className="pl-4">A fotografia profissional do evento pode ser
              utilizada para promover futuras edições, atrair mais Patrocinadores
              e vender mais ingressos.
              Imagens de alta qualidade criam impressões positivas e
              aumentam a visibilidade do evento nas Redes Sociais.
            </p>
          </div>
          <div className=" pt-4 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4">Engajamento dos Participantes</h4>
            <p className="pl-4">Imagina um participante postando a foto do seu evento
              ou colocando-a no seu perfil. O quão valioso isso não é?
              Incentivados a compartilhar suas experiências, os participantes tem
              uma foto para postar.

            </p>
          </div>
          <div className="pt-4 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4">Expressão Artística</h4>
            <p className="pl-4">Cenas cotidianas em
              obras artísticas. Cada foto conta uma história e transmite uma emoção,
              tornando-se uma forma de arte que eleva a percepção de valor do evento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
