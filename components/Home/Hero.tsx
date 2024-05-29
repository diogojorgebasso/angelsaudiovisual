import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <Script rel="preconnect" src="https://www.google.com/recaptcha/api.js" />
      <video
        loop
        autoPlay
        muted
        className="absolute inset-0 w-full h-full object-cover"
        src="https://storage.googleapis.com/angels-audiovisual.appspot.com/Site.mp4"
      >
        <track src="caption_Anitta.vtt" kind="captions" srcLang="pt-br" label="Descrição em Português Brasil" />
      </video>
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="text-white text-center">
          <h1 className="text-3xl font-bold mb-4 md:text-7xl">O Universo do Cinema<br /> para seu Evento</h1>
          <h2 className="text-sm md:text-lg ">CONSTRUINDO PARA DURAR. FEITA POR SONHADORES.</h2>
          <div className="mt-8">
            <Link href="#feautures">
              <button type="button" className="bg-white text-black px-6 py-3 rounded-full font-bold text-lg">Quais são os produtos de vocês?</button>
            </Link>
          </div>
          <div className="bg-slate-950 absolute bottom-0 left-0 right-0 py-4 flex justify-center items-center">
            <div>
              <div className="flex">
                <Image className="px-6 md:px-12" src="/barcultural.png" alt="Logo do Bar Cultural, maior Da da América Latina" width={170} height={100} />

                <Image className="px-6 md:px-12" src="/jyba.png" alt="Logo do Jybá, eleita melhor Pilsen do Brasil" width={170} height={100} />

                <Link href="#feedback">
                  <div className="flex">
                    <Image src="/clientes/gustavo-hermeto.webp" height={32} width={32} alt="Gustavo Hermeto, atual presidente do DA" className="rounded-full my-2" />
                    <Image src="/clientes/giovanna-leone.webp" height={32} width={32} alt="Giovanna Leone, atual presidente do Albatroz" className="  -mx-2 rounded-full my-2" />
                    <Image src="/clientes/raquel-beyoha.webp" height={32} width={32} alt="Raquel Beyoha, atual presidente do EPA" className="z-10 -mx-2 rounded-full my-2" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="z-0 -mx-2 w-8 h-8 my-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="mx-2">+40 clientes satisfeitos</p>
                      <div className="flex mx-2">
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
                        <p className="text-white text-small">
                          (by Google)
                        </p>
                      </div>
                    </div>

                  </div>
                </Link>
                <Image className="px-6 md:px-12" src="/albatroz.png" alt="Logo do Albatroz, Diretório Acadêmico de Medicina" width={170} height={100} />

                <Image
                  className="px-6 md:px-12"
                  src="/mfbd.png"
                  alt="Logo do MFBD, Escritório com mais de 20 anos de atuação"
                  width={180}
                  height={100}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

/*

      </div>

    </div>
  </section>; */
