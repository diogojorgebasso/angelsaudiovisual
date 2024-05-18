/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

export default function FoundersNote() {
  return (
    <section className="mb-20 container mx-auto">
      <div
        className="block rounded-lg shadow-lg"
      >
        <div className="flex flex-wrap items-center">
          <div className="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
            <img
              src="/equipe/diogo-basso.jpg"
              alt="Imagem do Diogo Basso com uma câmera"
              height="auto"
              width="auto"
              className=" rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
              loading="lazy"
            />
          </div>
          <div className=" shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
            <div className="px-6 py-12 md:px-12">
              <h2 className="mb-4 text-2xl font-bold">
                Nota do Fundador
              </h2>
              <p className="mb-6 flex items-center font-bold uppercase text-danger ">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-fill" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z" />
                </svg>
                posicionamento
              </p>
              <p className="mb-6  ">
                Cerca de 66% das empresas estão nos primeiros passos rumo à maturidade digital.
                O que diferencia a sua empresa das outras? O seu Posicionamento no mercado.
                E hoje, estar bem posicionado significa estar presente no mundo digital e audiovisual.
                Com uma boa posição, você atrai mais clientes e aumenta o faturamento.
                <b> aumentar o faturamento </b>.
              </p>
              <p>
                <b>  Por isso, criamos a Angels. Para te ajudar a se posicionar melhor.</b>
              </p>
              <p className="mb-6">Em 2023 impulsionamos mais de 40 projetos para fortalecer a
                presença audiovisual das empresas, alcançando mais de 2.3 milhões de impressões.

              </p>
              <p className="mb-6">
                As portas estão abertas para você também.
                <Link aria-label="Quer conferir nossos produtos?" className="underline" href="/produtos">
                  Quer conferir nossos produtos?
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
