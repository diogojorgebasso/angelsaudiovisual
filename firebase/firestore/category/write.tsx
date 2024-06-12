import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc, Timestamp } from 'firebase/firestore';
import { db, storage } from '@/firebase/config';

export const createNewCategory = async ({ data, image }: { data: any, image: any }) => {
  if (!data.name || !data.slug) {
    throw new Error('Name and Slug are required');
  }
  if (!image) {
    throw new Error('Image is required');
  }
  const imageRef = ref(storage, `blog/categories/${data.slug}`);
  await uploadBytes(imageRef, image);
  const imageURL = await getDownloadURL(imageRef);

  const refDbfirebaselocal = doc(db, `blog/categories/${data?.slug}`);
  await setDoc(refDbfirebaselocal, {
    ...data,
    id: data?.slug,
    iconURL: imageURL,
    timeStamp: Timestamp.now(),
  });
};
