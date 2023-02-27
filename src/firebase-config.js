// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxaB8UYmf0HNW5zmESN7uA9EZbtllIOe0",
  authDomain: "chatapp-a9e79.firebaseapp.com",
  projectId: "chatapp-a9e79",
  storageBucket: "chatapp-a9e79.appspot.com",
  messagingSenderId: "960723008054",
  appId: "1:960723008054:web:3f5d13e8da95e627f73697",
  measurementId: "G-2YM8K2741M",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// const analytics = getAnalytics(app);
