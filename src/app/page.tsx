import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Em breve uma nova experiência Audiovisual.
        </p>
      </div>

      <div className=" place-items-center before:absolute ">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] w-full h-auto"
          src="/angels.png"
          alt="Logo da Angels"
          height={300}
          width={300}
          priority
        />
      </div>


    </main>
  )
}
