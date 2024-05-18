import Link from 'next/link';

export default function Page() {
  return (
    <section className="py-8">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold leading-tight text-center">Imprensa</h1>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          <div className="shadow-md rounded-lg p-6 bg-white dark:bg-gray-800">
            <h2 className="font-bold text-xl leading-tight">Últimas notícias</h2>
            <ul className="list-none mb-4">

              <li className="py-2"><a href="https://www.linkedin.com/feed/update/urn:li:activity:7135601182479110146/" rel="noopener noreferrer" target="blank" className="text-blue-600 hover:text-blue-800">Prêmio Caboré 2023</a></li>

            </ul>
          </div>

          <div className="shadow-md rounded-lg p-6 bg-white dark:bg-gray-800">

            <h2 className="font-bold text-xl leading-tight">Contato de Mídia</h2>

            <ul className="list-none mb-4">

              <li className="py-2"><p>Nome: Diogo Jorge Basso</p></li>

              <li className="py-2"><p>Email: diogo@angelsaudiovisual.com</p></li>

            </ul>

          </div>

          <div className="shadow-md rounded-lg p-6 bg-white dark:bg-gray-800">

            <h2 className="font-bold text-xl leading-tight">Últimos comunicados</h2>

            <ul className="list-none mb-4">

              <li className="py-2"><a rel="noopener noreferrer" target="blank" href="https://www.linkedin.com/feed/update/urn:li:activity:7135316619529977857/" className="text-blue-600 hover:text-blue-800"> Comunicado Oficial: Compromisso com a Excelência Audiovisual</a></li>

              <li className="py-2"><Link href="/legal/aviso-privacidade" className="text-blue-600 hover:text-blue-800">Política de Privacidade liberada</Link></li>

              <li className="py-2"><a rel="noopener noreferrer" target="blank" href="https://abcboutique.com.br" className="text-blue-600 hover:text-blue-800">Parceria com ABC Boutique Comunicação</a></li>

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}
