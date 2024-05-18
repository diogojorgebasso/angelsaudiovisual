/* eslint-disable @next/next/no-img-element */
export default function Testimonials() {
  return (
    <section id="feedback">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid items-center gap-4 xl:grid-cols-5">
          <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
            <h2 className="text-4xl font-bold">Não acredite em nós.</h2>
            <p>Acredite em nossos Anjos. Eles que falam pela nossa Marca. Eles que
              fazem nosso sonho se tornar realidade.
            </p>
          </div>
          <div className="p-6 xl:col-span-3">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid content-center gap-4">
                <div className="p-6 rounded shadow-md dark:bg-gray-900">
                  <p>É gratificante ver o quão bom é o serviço prestado e a
                    ótima qualidade de entrega! Com certeza supera sempre
                    as expectativas! Obrigado pela qualidade do serviço prestado.
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img loading="lazy" width={48} height={48} src="/clientes/dj_papitos.jpg" alt="Foto de grupo dos Djs" className="bg-center bg-cover rounded-full dark:bg-gray-500" />
                    <div>
                      <p className="text-lg font-semibold">Leon</p>
                      <p className="text-sm ">Produtor dos DJ&#39;s Papitos</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded shadow-md dark:bg-gray-900">
                  <p>A equipe, sempre engajada e disposta a ajudar, entregou um evento maravilhoso
                    e muito além do que esperávamos.
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img loading="lazy" width={48} height={48} src="/clientes/Samira_batalha.webp" alt="Foto de perfil da Samira Batalha, organizadora do Encontro de Lideranças da FEJEMG" className="bg-center bg-cover rounded-full dark:bg-gray-500" />
                    <div>
                      <p className="text-lg font-semibold">Samira Batalha</p>
                      <p className="text-sm ">Coordenador de Comunicação, FEJEMG</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="grid content-center gap-4">
                <div className="p-6 rounded shadow-md dark:bg-gray-900">
                  <p>A melhor escolha para a cobertura dos 25 anos da Engenharia Hídrica!
                    As fotos capturam perfeitamente o momento e foram entregues antes do previsto.
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img loading="lazy" width={48} height={48} src="/clientes/michelli_santos.webp" alt="Foto de perfil da Michelli Santos, presidenta da Comissão de Engenharia Hídrica" className=" bg-center bg-cover rounded-full dark:bg-gray-500" />
                    <div>
                      <p className="text-lg font-semibold">Michelli Santos</p>
                      <p className="text-sm ">Presidenta da comissão de Engenharia Hídrica</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded shadow-md dark:bg-gray-900">
                  <p>Foi incrível trabalhar lado a lado da Angels.
                    E sou exigente, hein! 🤜
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img loading="lazy" width={48} height={48} src="/clientes/clayton_tenorio.png" alt="Imagem de Perfil do Clayton Tenório" className="bg-center bg-cover rounded-full dark:bg-gray-500" />
                    <div>
                      <p className="text-lg font-semibold">Clayton Tenório</p>
                      <p className="text-sm ">Diretor Artístico do Especial Le Gal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
