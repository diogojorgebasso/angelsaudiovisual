import Link from 'next/link';
import Image from 'next/image';
import LogoSlider from './LogoSlider';

export default function Hero() {
  return (
    <section>
      <div className="relative h-screen">
        <video
          loop
          autoPlay
          muted
          className="absolute inset-0 w-full h-full object-cover"
          src="/Site.mp4"
        >
          <track src="caption_Anitta.vtt" kind="captions" srcLang="pt-br" label="Descrição em Português Brasil" />
        </video>
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-white text-center">
            <h1 className="text-3xl font-black mb-4 md:text-7xl">O Universo do Cinema<br /> em seu Evento</h1>
            <h2 className="text-sm font-extrabold md:text-lg ">CONSTRUINDO PARA DURAR. FEITA POR SONHADORES.</h2>
            <div className="mt-8">
              <Link href="#feautures">
                <button type="button" className="bg-white text-black px-6 py-3 shadow-inner rounded-full font-bold text-lg">Quero conhecer seus produtos</button>
              </Link>
            </div>
            <div className="bg-slate-950 flex py-4 absolute bottom-0 left-0 right-0 justify-center">

              <Link href="#feedback">
                <div className="flex">
                  <Image src="/clientes/luana_brandao.webp" height={32} width={32} alt="Gustavo Hermeto, atual presidente do DA" className="-mx-2 rounded-full my-2" />
                  <Image src="/clientes/clayton_tenorio.png" height={32} width={32} alt="Giovanna Leone, atual presidente do Albatroz" className="  -mx-2 rounded-full my-2" />
                  <Image src="/clientes/Samira_batalha.webp" height={32} width={32} alt="Raquel Beyoha, atual presidente do EPA" className="-mx-2 rounded-full my-2" />
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="white" className="h-8 w-8 -mx-2 my-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-sm">+40 clientes satisfeitos</p>
                    <div className="flex mx-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <p className="text-xs">
                        (by Google)
                      </p>
                    </div>
                  </div>

                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto">
          <LogoSlider />
        </div>
      </div>
    </section>
  );
}
