import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpGhmEejlxxdVyy9F80TK22GB9cJ_nT1s",
  authDomain: "aspiration-login.firebaseapp.com",
  projectId: "aspiration-login",
  storageBucket: "aspiration-login.appspot.com",
  messagingSenderId: "808559121585",
  appId: "1:808559121585:web:5ad6f1e8638726b3fbfe90",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
