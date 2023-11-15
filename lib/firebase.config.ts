// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGlfyJS9jUvPhpztewXNwOgUBPY7K9glI",
  authDomain: "chatappbysiam.firebaseapp.com",
  projectId: "chatappbysiam",
  storageBucket: "chatappbysiam.appspot.com",
  messagingSenderId: "1093697391581",
  appId: "1:1093697391581:web:7182a9a59174c84f0d0434",
  measurementId: "G-KYWZVRLRWD",
};

// Initialize Firebase
const app = getApps.length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
