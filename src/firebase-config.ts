import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAZxtBoCTcJUG1-S3TFVwHHnF7bvWRztcg",
  authDomain: "erp-back-end-771f7.firebaseapp.com",
  projectId: "erp-back-end-771f7",
  storageBucket: "erp-back-end-771f7.appspot.com",
  messagingSenderId: "278916995972",
  appId: "1:278916995972:web:e59bb8e1dc2f433a3bdbd1",
  measurementId: "G-N8Y0120H0W",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
