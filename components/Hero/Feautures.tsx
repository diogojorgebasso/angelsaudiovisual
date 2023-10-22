'use client';

import ReactPlayer from 'react-player/lazy';

export default function Feautures() {
  return (
    <section className="mt-20 container mx-auto">
      <div className="mb-16 flex flex-wrap">
        <div className="mb-6 mt-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pr-6">
          <ReactPlayer url="https://www.youtube.com/embed/uLIKdnaLeUI" />
        </div>

        <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6">
          <h3 className="mb-4 text-2xl font-bold">Vídeos</h3>
          <div className="mb-4 flex items-center text-sm font-medium text-danger dark:text-danger-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z" />
            </svg>
            <p className="ml-2">
              Artísticos
            </p>
          </div>
          <p className=" mb-6 text-neutral-500 dark:text-neutral-300">
            Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
            vulputate. Ut vulputate est non quam dignissim elementum. Donec a
            ullamcorper diam.
          </p>
          <p className="text-neutral-500 dark:text-neutral-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae
            nulla saepe rerum aspernatur odio amet perferendis tempora
            mollitia? Ratione unde magni omnis quaerat blanditiis cumque
            dolore placeat rem dignissimos?
          </p>
        </div>
      </div>

      <div className="mb-16 flex flex-wrap lg:flex-row-reverse">
        <div className="mb-6 shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pl-6">
          <div
            className="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/033.jpg" className="w-full" alt="Louvre" />
            <a href="#!">
              <div
                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
              />
            </a>
          </div>
        </div>

        <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pr-6">
          <h3 className="mb-4 text-2xl font-bold">Exhibition in Paris</h3>
          <div className="mb-4 flex items-center text-sm font-medium text-primary dark:text-primary-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="mr-2 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
              />
            </svg>
            Art
          </div>
          <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
            Published <u>12.01.2022</u> by
            <a href="#!">Anna Doe</a>
          </p>
          <p className="text-neutral-500 dark:text-neutral-300">
            Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta
            dui, sit amet rutrum enim massa in ante. Curabitur in justo at
            lorem laoreet ultricies. Nunc ligula felis, sagittis eget nisi
            vitae, sodales vestibulum purus. Vestibulum nibh ipsum, rhoncus
            vel sagittis nec, placerat vel justo. Duis faucibus sapien eget
            tortor finibus, a eleifend lectus dictum. Cras tempor convallis
            magna id rhoncus. Suspendisse potenti. Nam mattis faucibus
            imperdiet. Proin tempor lorem at neque tempus aliquet. Phasellus
            at ex volutpat, varius arcu id, aliquam lectus. Vestibulum mattis
            felis quis ex pharetra luctus. Etiam luctus sagittis massa, sed
            iaculis est vehicula ut.
          </p>
        </div>
      </div>

    </section>
  );
}
