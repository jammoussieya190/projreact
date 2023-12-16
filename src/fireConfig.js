import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAGkA2u-6n3f1iGkH7H5W5YRkMEluEjHYc",
    authDomain: "flaffyworld-222ae.firebaseapp.com",
    projectId: "flaffyworld-222ae",
    storageBucket: "flaffyworld-222ae.appspot.com",
    messagingSenderId: "240490331509",
    appId: "1:240490331509:web:8cbdb8907db27ca1fa273c",
    measurementId: "G-SC5Q2PCCLL"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app)
export default db;
