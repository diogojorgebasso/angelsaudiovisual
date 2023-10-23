import Link from 'next/link';

export default function ModalProfile() {
  return (
    <div className="px-4">
      <Link href="/entrar">
        <button type="button" className="bg-gray-800 text-white rounded-full px-4 py-2">
          Entrar
        </button>
      </Link>
      <Link href="/cadastrar">
        <button type="button" className="bg-blue-800 text-white mx-2 px-4 py-2 rounded-full">
          Cadastrar
        </button>
      </Link>
    </div>
  );
}
