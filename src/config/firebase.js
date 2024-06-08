import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDnL55uWofPnf-DZHJJIhcEymiXus_ZH8",
    authDomain: "intela-main.firebaseapp.com",
    databaseURL: "https://intela-main-default-rtdb.firebaseio.com",
    projectId: "intela-main",
    storageBucket: "intela-main.appspot.com",
    messagingSenderId: "382190856622",
    appId: "1:382190856622:web:451f06397ebe625c50c03f",
    measurementId: "G-GZ6FCQ1WXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Firestore and get a reference to the service
export const db = getFirestore(app);