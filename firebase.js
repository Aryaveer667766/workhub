// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { 
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, 
    onAuthStateChanged, signOut, updateProfile 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { 
    getFirestore, doc, setDoc, getDoc, collection, addDoc, 
    query, where, getDocs, onSnapshot, updateDoc, serverTimestamp, orderBy 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZ_c3EaDxSZ6RrNrwQjR_TauJHrPfk_lk",
    authDomain: "designsnap-f3309.firebaseapp.com",
    databaseURL: "https://designsnap-f3309-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "designsnap-f3309",
    storageBucket: "designsnap-f3309.firebasestorage.app",
    messagingSenderId: "741888249963",
    appId: "1:741888249963:web:9540c9f68d6f0d5da9a12e",
    measurementId: "G-YC8TDQF1MM"
};

let app, auth, db, analytics;

try {
    // Initialize Firebase
    app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
    auth = getAuth(app);
    db = getFirestore(app);
    console.log("Firebase successfully connected to: designsnap-f3309");
} catch (error) {
    console.error("Firebase initialization failed.", error);
    alert("System Configuration Error: Firebase is not properly connected.");
}

// Export the initialized services and helpers for use in the HTML files
export { 
    auth, db, analytics,
    createUserWithEmailAndPassword, signInWithEmailAndPassword, 
    onAuthStateChanged, signOut, updateProfile,
    doc, setDoc, getDoc, collection, addDoc, 
    query, where, getDocs, onSnapshot, updateDoc, serverTimestamp, orderBy 
};
