// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpGhmEejlxxdVyy9F80TK22GB9cJ_nT1s",
  authDomain: "aspiration-login.firebaseapp.com",
  projectId: "aspiration-login",
  storageBucket: "aspiration-login.appspot.com",
  messagingSenderId: "808559121585",
  appId: "1:808559121585:web:5ad6f1e8638726b3fbfe90",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize 

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);

