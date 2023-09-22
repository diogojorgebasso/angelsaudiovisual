import { signOut, getAuth } from 'firebase/auth';
import firebaseApp from '../config';

const auth = getAuth(firebaseApp);

export default async function SignOut() {
  return signOut(auth)
    .then(() => ({ result: 'Usuário deslogado com sucesso' }))
    .catch((error) => ({ error }));
}
