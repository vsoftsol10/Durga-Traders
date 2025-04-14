// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // If using Firestore
import { getStorage } from "firebase/storage";     // If using Storage
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAYc_-tBjLWV6Wp_XXRvIMF1d3PgZv_Fvs",
    authDomain: "durgatraders-6a986.firebaseapp.com",
    projectId: "durgatraders-6a986",
    storageBucket: "durgatraders-6a986.firebasestorage.app",
    messagingSenderId: "812940099744",
    appId: "1:812940099744:web:20330122a7c944813449c5",
    measurementId: "G-8YBYXSPNJK"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth, db, storage };
