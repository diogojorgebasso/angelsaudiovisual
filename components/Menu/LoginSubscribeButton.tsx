import Link from 'next/link';

export default function ModalProfile() {
  return (
    <div className="flex">
      <Link href="/entrar">
        <button type="button">
          Entrar
        </button>
      </Link>
      <Link href="/cadastrar">
        <button type="button" className="bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-md">
          Cadastrar
        </button>
      </Link>
    </div>
  );
}
