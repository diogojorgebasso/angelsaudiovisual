import { signInWithEmailAndPassword, getAuth, signInWithPopup, FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import firebaseApp from '../config';
import getData from '../firestore/getData';

const auth = getAuth(firebaseApp);

export default async function signIn(email: string, password: string) {
  let error = null;
  let result = null;
  try {
    const response: any = await signInWithEmailAndPassword(auth, email, password);
    result = await getData('users', response.user.uid);
  } catch (errorInRequest) {
    error = errorInRequest;
  }
  return { result, error };
}

export async function signInWithFacebook() {
  const provider = new FacebookAuthProvider();
  return signInWithPopup(auth, provider)
    .then((result) => { getData('clientes', result.user.uid); })
    .catch((error) => ({ error }));
}

export async function signInWithGoogle() {
  return signInWithPopup(auth, new GoogleAuthProvider())
    .then((result) => { getData('clientes', result.user.uid); })
    .catch((error) => ({ error }));
}
