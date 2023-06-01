import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
    apiKey: "AIzaSyDdyrKyYpyVpyK7-K7CnBiYUQdXY56vaok",
    authDomain: "usuarios-c44bc.firebaseapp.com",
    databaseURL: "https://usuarios-c44bc.firebaseio.com",
    projectId: "usuarios-c44bc",
    storageBucket: "usuarios-c44bc.appspot.com",
    messagingSenderId: "1062248321315",
    appId: "1:1062248321315:web:12c141c2936a72791bfc96"
  };
  
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)