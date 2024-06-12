'use client';

import { collection, onSnapshot } from 'firebase/firestore';
import useSWRSubscription from 'swr/subscription';
import { db } from '@/firebase/config';

export function useCategories() {
  const { data, error } = useSWRSubscription(['blog/categories'], ([path], { next }) => {
    const ref = collection(db, path);

    const unsubscribe = onSnapshot(ref, snapshot => {
      next(null, snapshot.docs.map(doc => doc.data()));
    }, (errorUnsub) => {
      next(errorUnsub?.message);
    });

    return () => unsubscribe();
  });

  return {
    data,
    error,
    isLoading: data === undefined,
  };
}
