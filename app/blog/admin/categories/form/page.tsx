/* eslint-disable react/jsx-no-comment-textnodes */

'use client';

import Image from 'next/image';
import { useCategoryForm } from './contexts/CategoryFormContext';

export default function Page() {
  const context = useCategoryForm();

  if (!context) {
    // Handle the case where the context is undefined
    return null;
  }
  const {
    data,
    isLoading,
    error,
    isDone,
    handleData,
    handleCreate,
    image,
    setImage,
  } = context;

  return (
    <main className="w-full p-6 flex flex-col gap-3">
      <h1 className="font-bold">Category | Form</h1>
      <section className="flex">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCreate();
          }}
          className="flex flex-col gap-2 rounded-xl px-7"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="categoryname" className="text-sm text-gray-500">Category Name <span className="text-red-500 ">*</span>
              <input
                className="px-4 py-2 rounded-full border bg-blue-50 "
                placeholder="Enter Category Name"
                type="text"
                id="categoryname"
                onChange={(e) => handleData('name', e.target.value)}
                value={data?.name}
                required
              />
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="categoryslug" className="text-sm text-gray-500">Category Slug <span className="text-red-500 ">*</span>
              <input
                className="px-4 py-2 rounded-full border bg-blue-50 "
                placeholder="Enter Category Slug"
                id="categoryslug"
                type="text"
                onChange={(e) => handleData('slug', e.target.value)}
                value={data?.slug}
                required
              />
            </label>
          </div>
          {image &&
            <div>
              <Image className="h-40" src={URL.createObjectURL(image)} alt="Category" />
            </div>}
          <div className="flex flex-col gap-2">
            <label htmlFor="categoryimage" className="text-sm text-gray-500">Image <span className="text-red-500 ">*</span>
              <input
                className="px-4 py-2 rounded-full border bg-blue-50 "
                placeholder="Enter Category Slug"
                id="categoryimage"
                type="file"
                alt="Insira uma imagem"
                accept="image/*"
                onChange={(e) => {
                  e.preventDefault();
                  if (e.target.files) {
                    setImage(e.target.files[0]);
                  }
                }}
                required
              />
            </label>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {!isDone &&
            <button
              disabled={isLoading || isDone}
              type="submit"
              className="bg-blue-500 rounded-full px-4 py-2 text-white"
            >
              {isLoading ? 'Carregando...' : 'Criar'}
            </button>}
          {isDone && <p className="text-green-500 text-sm">Categoria criada com sucesso!</p>}
        </form>
      </section>
    </main>
  );
}
