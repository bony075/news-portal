// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZzT5KZ-ri7fUlXajTkO5TMkcaT5FCh3w",
    authDomain: "news-portal-b728b.firebaseapp.com",
    projectId: "news-portal-b728b",
    storageBucket: "news-portal-b728b.appspot.com",
    messagingSenderId: "639259442031",
    appId: "1:639259442031:web:fccaa4c51dec245383469a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;