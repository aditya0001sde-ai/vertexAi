import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vertex-6a64a.firebaseapp.com",
  projectId: "vertex-6a64a",
  storageBucket: "vertex-6a64a.firebasestorage.app",
  messagingSenderId: "84711265171",
  appId: "1:84711265171:web:69d18e7e957715ecfa0e66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const googleProvider=new GoogleAuthProvider()