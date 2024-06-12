'use client';

import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from 'react';
import { useCategories } from '@/firebase/firestore/category/read';

export default function CategoriesListView() {
  const { data, error, isLoading } = useCategories();
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  if (!data) {
    return <h1>Data not found.</h1>;
  }
  return (
    <section>
      {data?.map((item: {
        id: Key | null | undefined; name: string | number | bigint
          | boolean | ReactElement<any, string | JSXElementConstructor<any>> |
          Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined;
      }) => (
        <div key={item.id}>
          {item?.name}
        </div>))
      }
    </section>
  );
}
