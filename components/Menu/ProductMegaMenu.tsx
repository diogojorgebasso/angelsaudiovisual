export default function ProductMegaMenu() {
  return (
    <li className="static" data-te-nav-item-ref data-te-dropdown-ref>
      <a
        className="flex items-center whitespace-nowrap py-2 pr-2  transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:px-2"
        href="#"
        data-te-ripple-init
        data-te-ripple-color="light"
        type="button"
        id="dropdownMenuButtonX"
        data-te-dropdown-toggle-ref
        aria-expanded="false"
        data-te-nav-link-ref
      >Produtos
        <span className="ml-2 w-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </a>
      <div
        className="absolute left-0 right-0 top-full z-[1000] mt-0 hidden w-full border-none bg-white bg-clip-padding text-neutral-600 shadow-lg dark:bg-neutral-700 dark:text-neutral-200 [&[data-te-dropdown-show]]:block"
        aria-labelledby="dropdownMenuButtonX"
        data-te-dropdown-menu-ref
      >
        <div className="px-6 py-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <a
                href="/produtos/foto-video"
                aria-current="true"
                className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
              >Foto e Vídeo
              </a>
              <a
                href="/produtos/fotografia"
                aria-current="true"
                className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
              >Fotografia
              </a>
              <a
                href="/produtos/captacao-video"
                aria-current="true"
                className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
              >Captação de Vídeo
              </a>
              <a
                href="/produtos/edicao-fotografia"
                aria-current="true"
                className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
              >Edição de Fotografia
              </a
              >
              <a
                href="/produtos/edicao-video"
                aria-current="true"
                className="block w-full px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-white"
              >Edição de Vídeo
              </a
              >
            </div>
            <div>
              <a
                href="/produtos/servicos-aereos"
                aria-current="true"
                className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
              >Drone
              </a>
              <a
                href="/produtos/pilulas-redes-sociais"
                aria-current="true"
                className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
              >Pílulas para redes sociais
              </a>
              <a
                href="/produtos/criacao-artes"
                aria-current="true"
                className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
              >Criação de artes
              </a>
              <a
                href="/produtos"
                aria-current="true"
                className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
              >Mais opções
              </a>
            </div>

          </div>
        </div>
      </div>
    </li>);
}
