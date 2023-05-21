import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: 'AIzaSyB2wbIPmp9Bh9xLYdSYoBVgaR69vkVhJaU', 
    authDomain: "prmo-4fc22.firebaseapp.com",
    databaseURL: 'https://prmo-4fc22.firebaseio.com',
    projectId: 'prmo-4fc22', 
    storageBucket: 'prmo-4fc22.appspot.com',
    messagingSenderId: '320119632538',
    appId: '1:320119632538:android:23393c3f377046dd666523',
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };