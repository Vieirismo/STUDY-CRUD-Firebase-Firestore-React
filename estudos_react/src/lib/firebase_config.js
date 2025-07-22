import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDl6Ql48iOZA-UjFDSuu3hEKUOSHtOgM7U",
  authDomain: "estudos-next-f68b0.firebaseapp.com",
  projectId: "estudos-next-f68b0",
  storageBucket: "estudos-next-f68b0.firebasestorage.app",
  messagingSenderId: "947683547164",
  appId: "1:947683547164:web:eecc0f20d4c3aace63e7d9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

//window.db = db;
//window.firebaseFirestore = { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where };
