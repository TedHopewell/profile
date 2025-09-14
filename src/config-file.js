// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDLYkHlqDG5DrbY_eAXTyLqxn2Jvm6f6g",
  authDomain: "profile-7f5bb.firebaseapp.com",
  projectId: "profile-7f5bb",
  storageBucket: "profile-7f5bb.appspot.com",
  messagingSenderId: "994274359713",
  appId: "1:994274359713:web:301c38d452a72ce294f3e0",
  measurementId: "G-GTH60NRMWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export  {db};

