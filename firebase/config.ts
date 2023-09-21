// Import the functions you need from the SDKs you need

import { initializeApp, getApps } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPVOPp6MgDGln0mb8V_OFFfyK_q4Bkskg",
  authDomain: "angels-audiovisual.firebaseapp.com",
  projectId: "angels-audiovisual",
  storageBucket: "angels-audiovisual.appspot.com",
  messagingSenderId: "70661815072",
  appId: "1:70661815072:web:91f11e037bc055ab8ff545",
  measurementId: "G-4K3W9MXL6V",
};

// Initialize Firebase
let firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebaseApp;