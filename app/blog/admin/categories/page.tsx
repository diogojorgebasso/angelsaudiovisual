import Link from 'next/link';
import CategoriesListView from './components/CategoriesListView';

export default function Page() {
  const CirclePlus = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="12" y1="16" x2="12" y2="8" stroke="currentColor" strokeWidth="2" />
      <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2" />
    </svg>);

  return (
    <main className="p-6 w-full">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">Categories</h1>
        <Link href="/admin/categories/form">
          <button type="button" className="flex gap-2 items-center bg-blue-500 rounded-full px-4 py-2">
            <CirclePlus />
            Add
          </button>
        </Link>
      </div>
      <CategoriesListView />
    </main>
  );
}
