'use client';

import { useRouter } from 'next/navigation';
import addData from '@/firebase/firestore/addData';

export default function Newsletter() {
  const router = useRouter();

  const handleForm = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string },
    };

    await addData('newsletter', 'email', target.email.value);
    return router.push('/obrigado');
  };

  return (
    <section id="newsletter" className="mb-32 text-center lg:text-left">
      <div className="flex flex-wrap justify-center">
        <div className="w-full shrink-0 grow-0 basis-auto px-3 md:w-10/12 lg:w-11/12 xl:w-10/12">
          <div className="grid items-center gap-x-6 lg:grid-cols-2">
            <div className="mb-10 lg:mb-0">
              <h2 className="text-3xl font-bold dark:text-white">
                Não perca uma atualização.
                <br />
                <span className="text-primary dark:text-primary-400">Inscreva-se na newsletter.</span>
              </h2>
              <p>Mais de 50 negócios aumentaram seu faturamento conosco.</p>
            </div>
            <form onSubmit={handleForm}>
              <div className="mb-6 flex-row md:mb-0 md:flex">

                <div className="relative mb-3 w-full md:mr-3 md:mb-0 xl:w-96" data-te-input-wrapper-init>
                  <input
                    type="text"
                    name="email"
                    className="bg-gray-300 peer block min-h-[auto] w-full rounded border-0 py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="newsletter"
                    placeholder="Enter your email"
                  />
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <label
                    htmlFor="newsletter"
                    className="pointer-events-none text-black absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15]  transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >Digite seu email
                  </label>
                </div>
                <button
                  type="submit"
                  className="inline-block bg-gray-500 hover:bg-gray-400 rounded px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal shadow-md rounded-md "
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Quero receber novidades
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
