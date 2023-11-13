// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzDxXhbsf1WC6hdRJPwYtlKJ1_8RYQilk",
  authDomain: "chettyappbysiam.firebaseapp.com",
  projectId: "chettyappbysiam",
  storageBucket: "chettyappbysiam.appspot.com",
  messagingSenderId: "839203325078",
  appId: "1:839203325078:web:d64245d6fd25d844452eb7",
};

// Initialize Firebase
const app = getApps.length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
