// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyvoCgiZo1QhdWqCo09RpsRQWh0ICV7Eo",
  authDomain: "react-course-92308.firebaseapp.com",
  projectId: "react-course-92308",
  storageBucket: "react-course-92308.appspot.com",
  messagingSenderId: "1080642549288",
  appId: "1:1080642549288:web:7f9a731c0a9f8f8e5aa71d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
