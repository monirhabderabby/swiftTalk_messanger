// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIQIar4_XINJ8ofXC9sFoqYFcBwgWc9PY",
    authDomain: "swifttalk-b7254.firebaseapp.com",
    projectId: "swifttalk-b7254",
    storageBucket: "swifttalk-b7254.appspot.com",
    messagingSenderId: "485719735634",
    appId: "1:485719735634:web:92c327cd860a72a9788e8b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const firebaseStorage = getStorage(app);
