// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-1a44a.firebaseapp.com",
  projectId: "mern-real-estate-1a44a",
  storageBucket: "mern-real-estate-1a44a.appspot.com",
  messagingSenderId: "166161425652",
  appId: "1:166161425652:web:3e64895f60ca0b3cbc6aa1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);