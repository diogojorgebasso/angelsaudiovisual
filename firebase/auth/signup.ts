import { sendSignInLinkToEmail, getAuth, FacebookAuthProvider, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import firebaseApp from '../config';
import addData from '../firestore/addData';

const auth = getAuth(firebaseApp);

export default async function signUp(email: string, name: string) {
  try {
    const response: any = await sendSignInLinkToEmail(auth, email, { url: 'http://angelsaudiovisual.com/cadastrar', handleCodeInApp: true });
    return await addData('users', response.user.uid, { name, email });
  } catch (error) {
    return ({ error });
  }
}

export async function signUpWithFacebook() {
  const provider = new FacebookAuthProvider();
  return signInWithPopup(auth, provider)
    .then((result) => { addData('clientes', result.user.uid, { name: result.user.displayName, email: result.user.email }); })
    .catch((error) => ({ error }));
}

export async function signUpWithGoogle() {
  return signInWithPopup(auth, new GoogleAuthProvider())
    .then((result) => { addData('clientes', result.user.uid, { name: result.user.displayName, email: result.user.email }); })
    .catch((error) => ({ error }));
}
