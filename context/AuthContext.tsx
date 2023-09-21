'use client';

import React from 'react';

import { onAuthStateChanged, getAuth, User as FirebaseUser } from 'firebase/auth';
import { Loader } from '@mantine/core';
import firebase_app from '../firebase/config';

const auth = getAuth(firebase_app);

type User = FirebaseUser | null;
export type ContextState = { user: User };
export const AuthContext = React.createContext<ContextState | undefined>(undefined);

interface AuthContextType {
  user: User;
  signOut: () => void;
  signIn: () => void;
}

export const useAuthContext = () => React.useContext(AuthContext) as AuthContextType;

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<FirebaseUser | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <Loader color="blue" /> : children}
    </AuthContext.Provider>
  );
};
