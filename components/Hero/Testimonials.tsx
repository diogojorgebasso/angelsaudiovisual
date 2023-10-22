/* eslint-disable @next/next/no-img-element */
export default function Testimonials() {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid items-center gap-4 xl:grid-cols-5">
          <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
            <h2 className="text-4xl font-bold">Não acredite em nós.</h2>
            <p>Acredite em nossos clientes. Eles que falam pela nossa marca. Eles que
              fazem nossa visão tornar-se realidade.
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
                    <img src="/clientes/dj_papitos.png" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                    <div>
                      <p className="text-lg font-semibold">Leon</p>
                      <p className="text-sm ">Produtor dos DJ&#39;s Papitos</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded shadow-md dark:bg-gray-900">
                  <p>Ótimo serviço!
                    Nos dá Zap Eventos
                    só temos a agradecer.
                    E claro indicamos a todos!
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img src="/clientes/luiz_diego.png" alt="Foto de perfil do Luiz Diego, organizador da Zap Festas" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
                    <div>
                      <p className="text-lg font-semibold">Luiz Diego</p>
                      <p className="text-sm ">Produtor da Zap Eventos</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="grid content-center gap-4">
                <div className="p-6 rounded shadow-md dark:bg-gray-900">
                  <p>Melhor escolha que pudemos fazer para a cobertura dos 25
                    anos da Engenharia Hídrica. (...) Quem ver as fotos vai
                    sentir o que estava sentindo naquela hora. Entrega das fotos
                    até antes do previsto.
                  </p>
                  <div className="flex items-center mt-4 space-x-4">
                    <img src="/clientes/michelli_santos.jpg" alt="Foto de perfil da Michelli Santos, presidenta da Comissão de Engenharia Hídrica" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
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
                    <img src="/clientes/clayton_tenorio.png" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
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
