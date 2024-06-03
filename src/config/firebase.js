import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
export const db = getFirestore(app)




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDDnL55uWofPnf-DZHJJIhcEymiXus_ZH8",
//   authDomain: "intela-main.firebaseapp.com",
//   databaseURL: "https://intela-main-default-rtdb.firebaseio.com",
//   projectId: "intela-main",
//   storageBucket: "intela-main.appspot.com",
//   messagingSenderId: "382190856622",
//   appId: "1:382190856622:web:451f06397ebe625c50c03f",
//   measurementId: "G-GZ6FCQ1WXD"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);