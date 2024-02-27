import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBz-RUIZqBGRYkv8wTBWMJfN6rzWv8WgN8",
  authDomain: "feedback-form-mlsc.firebaseapp.com",
  projectId: "feedback-form-mlsc",
  storageBucket: "feedback-form-mlsc.appspot.com",
  messagingSenderId: "255774751996",
  appId: "1:255774751996:web:12493882ba637a440a6b79",
  measurementId: "G-0XHE3W3CGQ"
};

// Initialize Firebase... 
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)