import { signInWithEmailLink, getAuth, signInWithPopup, FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import firebaseApp from '../config';
import getData from '../firestore/getData';

const auth = getAuth(firebaseApp);

export default async function signIn(email: string) {
  let error = null;
  let result = null;
  try {
    const response: any = await signInWithEmailLink(auth, email, 'http://angelsaudiovisual.com/cadastrar');
    result = await getData('users', response.user.uid);
  } catch (errorInRequest) {
    error = ({ error });
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
