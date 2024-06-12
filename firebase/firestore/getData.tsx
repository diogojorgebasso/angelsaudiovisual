import { getFirestore, doc, getDoc } from 'firebase/firestore';
import firebase_app from '../config';

const db = getFirestore(firebase_app);

export default async function getData(collection: string, id: string) {
    const docRef = doc(db, collection, id);

    let result = null;
    let error = null;

    try {
        result = await getDoc(docRef);
    } catch (e) {
        error = e;
    }

    return { result, error };
}
