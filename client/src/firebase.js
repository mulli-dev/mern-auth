// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-68760.firebaseapp.com",
  projectId: "mern-auth-68760",
  storageBucket: "mern-auth-68760.appspot.com",
  messagingSenderId: "1009093111099",
  appId: "1:1009093111099:web:f9eed925b383e41c47db1e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
