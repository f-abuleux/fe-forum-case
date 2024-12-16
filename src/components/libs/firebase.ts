// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase


import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB7aCnmhfX6swmFIMDhMWhqGGV8BvCwgF8",
    authDomain: "farum-42b24.firebaseapp.com",
    projectId: "farum-42b24",
    storageBucket: "farum-42b24.firebasestorage.app",
    messagingSenderId: "70358539407",
    appId: "1:70358539407:web:9530e8e36be7dd8cf1a4fa",
    measurementId: "G-H2MP8VPJ9B"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
