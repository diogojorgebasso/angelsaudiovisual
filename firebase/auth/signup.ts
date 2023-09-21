import firebaseApp from "../config";
import { createUserWithEmailAndPassword, getAuth, FacebookAuthProvider, signInWithPopup} from "firebase/auth";

const auth = getAuth(firebaseApp);

export default async function signUp(email: string, password: string) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function signUpWithFacebook() {
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