// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAg2a8sm995cxq_89xp1iIYgEfwphkJ5Ic",
  authDomain: "interprep-b21cf.firebaseapp.com",
  projectId: "interprep-b21cf",
  storageBucket: "interprep-b21cf.firebasestorage.app",
  messagingSenderId: "792024978734",
  appId: "1:792024978734:web:50f568f74406a9cde896bf",
  measurementId: "G-X3E2H2RTKQ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);