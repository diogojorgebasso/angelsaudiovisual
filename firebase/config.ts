// Import the functions you need from the SDKs you need

import { initializeApp, getApps } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBPVOPp6MgDGln0mb8V_OFFfyK_q4Bkskg',
  authDomain: 'angels-audiovisual.firebaseapp.com',
  projectId: 'angels-audiovisual',
  storageBucket: 'angels-audiovisual.appspot.com',
  messagingSenderId: '70661815072',
  appId: '1:70661815072:web:91f11e037bc055ab8ff545',
  measurementId: 'G-4K3W9MXL6V',
};

// Initialize Firebase
const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// eslint-disable-next-line @typescript-eslint/no-unused-vars

declare global {
  interface Window {
    FIREBASE_APPCHECK_DEBUG_TOKEN: boolean;
  }
}

if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
  window.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}

let AppCheckInstance = null;
if (typeof window !== 'undefined' && !AppCheckInstance) {
  import('firebase/app-check').then(async (firebaseAppCheck) => {
    AppCheckInstance = firebaseAppCheck.initializeAppCheck(firebaseApp, {
      provider: new firebaseAppCheck.ReCaptchaV3Provider('6LccmLwoAAAAAOOkcR1KmHV0Ovg0avYFBIaW7v0P'),
      isTokenAutoRefreshEnabled: true,
    });
  });
}

export const storage = getStorage(firebaseApp);
export const db = getFirestore(firebaseApp);
export const analytics = isSupported().then(yes => yes ? getAnalytics(firebaseApp) : null);
export default firebaseApp;
