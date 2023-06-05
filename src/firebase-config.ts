// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZxtBoCTcJUG1-S3TFVwHHnF7bvWRztcg",
  authDomain: "erp-back-end-771f7.firebaseapp.com",
  projectId: "erp-back-end-771f7",
  storageBucket: "erp-back-end-771f7.appspot.com",
  messagingSenderId: "278916995972",
  appId: "1:278916995972:web:e59bb8e1dc2f433a3bdbd1",
  measurementId: "G-N8Y0120H0W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
