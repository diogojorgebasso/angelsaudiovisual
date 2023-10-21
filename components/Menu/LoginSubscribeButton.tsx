import Link from 'next/link';

export default function ModalProfile() {
  return (
    <div className="">
      <Link href="/entrar">
        <button type="button" className="bg-gray-500 rounded-md w-px-48 h-px-48">
          Entrar
        </button>
      </Link>
      <Link href="/cadastrar">
        <button type="button" className="bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-md w-px-48 h-px-48">
          Cadastrar
        </button>
      </Link>
    </div>
  );
}
