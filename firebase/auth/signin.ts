import firebase_app from "../config";
import { signInWithEmailAndPassword, getAuth, signInWithPopup, FacebookAuthProvider  } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signIn(email: string, password: string) {
  let result = null,
    error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function signInWithFacebook() {
  let result = null,
    error = null;
  try {
    const provider = new FacebookAuthProvider();
    result = await signInWithPopup(auth, provider);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
