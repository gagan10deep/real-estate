// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-e67b0.firebaseapp.com",
  projectId: "real-estate-e67b0",
  storageBucket: "real-estate-e67b0.appspot.com",
  messagingSenderId: "349005772811",
  appId: "1:349005772811:web:ca7b2d10ed97425ac22f0e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
