// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDne940YQNjuREJmeFmoIHf3dSjBRzv8sE",
  authDomain: "chettybysiam.firebaseapp.com",
  projectId: "chettybysiam",
  storageBucket: "chettybysiam.appspot.com",
  messagingSenderId: "171617297869",
  appId: "1:171617297869:web:ff2b394a84fe122d0c1084",
};

// Initialize Firebase
const app = getApps.length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
