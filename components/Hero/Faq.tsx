export default function Faq() {
  return (
    <section>
      <div className="container px-8 mx-auto mt-2 space-y-1 m-4 px-20">
        <h3 className="text-extrabold text-center text-4xl py-2">Perguntas Frequentas</h3>
        <details className="shadow-md rounded-lg">
          <summary className="font-semibold px-4 py-2 text-lg cursor-pointer">Quem contrata a Angels?</summary>
          <div>
            <p className="leading-6 px-10 py-2 transition-shadow">
              Gostamos de ter Foco. Fazemos<b>Eventos Empresariais e Universitários</b>.
            </p>
            <p className="leading-6 px-10 py-2 transition-shadow">
              Dessa forma, nossa clientela principal engloba esses segmentos. <br />
              Entretanto, em qualquer evento, temos outros colaboradores-chave: Patrocinadores,
              Influenciadores e Atrações.<br />Eles também são parte integrante de nossa clientela.
            </p>
          </div>
        </details>
        <details className="shadow-md rounded-lg">
          <summary className="font-semibold px-4 py-2  text-lg cursor-pointer">Quais os 3 diferenciais da Angels?</summary>
          <div>
            <p className="leading-6 px-10 py-2">
              Entrega rápida. Comunicação. Criatividade. Como materializamos?
            </p>
            <p className="leading-6 px-10 py-2">
              Entrega em uma semana ou seu dinheiro de volta ©.<br /> Durante a edição, mantemos
              constantemente a comunicação e mudamos a edição, quantas vezes quiser.<br />
              Os nossos vídeos são cada um diferente do outro, porque cada história é única.
            </p>
          </div>
        </details>
        <details className="shadow-md rounded-lg">
          <summary className="font-semibold px-4 py-2  text-lg cursor-pointer">Como faço para fazer um orçamento?</summary>
          <div>
            <p className="leading-6 px-10 py-2">
              <a className="underline text-blue-300" href="/contato">Acesse a página de</a> e nos mande sua demanda.
            </p>
          </div>
        </details>
      </div>
    </section>
  );
}
