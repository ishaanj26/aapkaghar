// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "aapkaghar-2da74.firebaseapp.com",
    projectId: "aapkaghar-2da74",
    storageBucket: "aapkaghar-2da74.firebasestorage.app",
    messagingSenderId: "529738333920",
    appId: process.env.REACT_APP_FIREBASE_API_ID,
    measurementId: "G-W0NY4LHLKS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
