import React from 'react';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">Manual da Marca</h1>
        <p className="mb-4">Aqui você encontrará todas as diretrizes para usar nossa marca corretamente.</p>
      </div>
      <a href="https://firebasestorage.googleapis.com/v0/b/angels-audiovisual.appspot.com/o/Logotipos-Angels.zip?alt=media&token=5b8bbe6c-b43a-4c38-8383-6ff3741b02d4">
        <button type="button" className="bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
          <span>Clique aqui para baixar nossas logos</span>
        </button>
      </a>
      <div className="w-full max-w-4xl p-4 mx-auto">
        <h2 className="text-2xl font-bold mb-2">Diretrizes Gerais</h2>
        <h3 className="text-xl">É permitido:</h3>
        <ul className="pl-5">
          <li className="list-disc">
            Usar ícones e logotipos da Angels nos materiais que criar para sua
            organização em decorrência da implantação. Você pode ser criativo
            e envolver outra equipe da organização, mas sempre esteja ciente
            quanto à forma como está usando a marca Angels e as características da nossa marca.
          </li>
          <li className="list-disc">
            Usar a marca registrada somente como um adjetivo,
            nunca como um nome ou verbo, e nunca no plural ou possessivo.
          </li>
          <li className="list-disc">
            Usar um termo genérico antes da marca registrada,
            por exemplo: Fotos da Angels, Vídeos da Angels, Materiais Audiovisuais Angels.
          </li>
        </ul>
        <h3 className="text-xl text-bold mt-3">Não é permitido:</h3>
        <ul className="pl-5">
          <li className="list-disc">
            Não remova, distorça ou altere os elementos de uma característica da marca Amgels.
          </li>
          <li className="list-disc">
            Não exiba uma característica da marca da Angels como o elemento
            mais proeminente da sua página da Web e/ou material de divulgação.
          </li>
          <li className="list-disc">
            Exibir uma característica da marca Angels de uma forma que implique
            uma relação ou afiliação, patrocínio ou endosso da Angels,
            ou que possa ser razoavelmente interpretada para sugerir que o
            conteúdo editorial foi criado ou representa os pontos de vista
            ou opiniões da Angels ou da equipe da Angels.
          </li>
          <li className="list-disc">
            Exibir uma característica da marca Angels de uma forma que,
            segundo opinião exclusiva da Angels, seja ilusória, injusta,
            difamatória, infratora, caluniosa, depreciativa, obscena
            ou questionável de outra forma para a Angels.
          </li>
          <li className="list-disc">
            Enquadrar ou espelhar qualquer página da Angels.
          </li>
          <li className="list-disc">
            Copiar ou imitar o visual da Angels, incluindo a aparência das
            propriedades de design da Web da Angels,
            combinações de cores diferenciadas, tipografia, designs gráficos,
            ícones de produtos ou imagens associadas à Angels.
          </li>
          <li className="list-disc">
            Incorporar características da marca Angels no nome do seu produto,
            em nomes de serviço, em marcas registradas, em logotipos ou em nomes de empresa.
          </li>
          <li className="list-disc">
            Usa a marca registrada da Angels de uma forma que sugira um significado
            comum, descritivo ou genérico.
          </li>
        </ul>

        <h2 className="text-2xl font-bold my-3">Cores</h2>
        <p className="mb-4">A Angels posui 4 cores principais, de forma que nossa logo e tipografia podem ser usadas com quaisquer uma das cores,
          desde que dê contraste com o fundo.
        </p>
        <ul className="pl-5">
          <li className="list-disc">
            <b>Roxo(#470228):</b> Representa a criatividade e a profundidade do nosso trabalho.
          </li>
          <li className="list-disc">
            <b>Dourado (#C1910B):</b> Simboliza a excelência e a qualidade
            superior dos nossos serviços.
          </li>
          <li className="list-disc">
            <b>Branco(#fff):</b> Oferece clareza e simplicidade ao design.
          </li>
          <li className="list-disc">
            <b>Preto(#000000):</b> Proporciona contraste e força à nossa Marca.
          </li>
        </ul>

        <h2 className="text-2xl font-bold my-3">Tipografia</h2>
        <p className="mb-4">A Angels possui duas fontes a serem utilizadas, quando associadas à Marca:
          a <a className="underline" href="https://fonts.google.com/specimen/Bebas+Neue?preview.text=Angels+Audiovisual">Bebas Neue Regular 400</a> e
          a <a className="underline" href="https://fonts.google.com/specimen/Montserrat?preview.text=Angels+Audiovisual"> Montserrat</a> em todos seus pesos e itálicos.
        </p>

        <h2 className="text-2xl font-bold mb-2">Logos</h2>
        <p className="mb-4">Você pode usar nossa logo em outras dimensões, desde que respeitando sua proporção.</p>
        <a href="https://firebasestorage.googleapis.com/v0/b/angels-audiovisual.appspot.com/o/Logotipos-Angels.zip?alt=media&token=5b8bbe6c-b43a-4c38-8383-6ff3741b02d4">
          <button type="button" className="bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
            <span>Clique aqui para baixar nossas logos</span>
          </button>
        </a>
      </div>
    </div>
  );
}
