// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh6dsWJy7ae6D4VAnonu70uShTqNDjvZY",
  authDomain: "react-course-cd001.firebaseapp.com",
  projectId: "react-course-cd001",
  storageBucket: "react-course-cd001.appspot.com",
  messagingSenderId: "138859470124",
  appId: "1:138859470124:web:2fd5c98c9bda3277cde089"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider =  new GoogleAuthProvider();
export const  db = getFirestore(app);