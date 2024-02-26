// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCclAORF63er1QONx_BsWcqYAMY_xKQKeQ",
  authDomain: "test-48ed2.firebaseapp.com",
  projectId: "test-48ed2",
  storageBucket: "test-48ed2.appspot.com",
  messagingSenderId: "833561291066",
  appId: "1:833561291066:web:4007ee2e7d5f1eadfdc803",
  measurementId: "G-M3PTT543E7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)