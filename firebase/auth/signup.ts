import { sendSignInLinkToEmail, getAuth, FacebookAuthProvider, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import firebaseApp from '../config';

const auth = getAuth(firebaseApp);

export default async function signUp(email: string,) {
  let result = null;
  let error = null;
  try {
    result = await sendSignInLinkToEmail(auth, email, { url: 'http://angelsaudiovisual.com/cadastrar', handleCodeInApp: true });
    await localStorage.setItem('emailForSignIn', email);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function signUpWithFacebook() {
  let result = null;
  let error = null;
  try {
    const provider = new FacebookAuthProvider();
    result = await signInWithPopup(auth, provider);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function signUpWithGoogle() {
  let result = null;
  let error = null;
  try {
    const provider = new GoogleAuthProvider();
    result = await signInWithPopup(auth, provider);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
