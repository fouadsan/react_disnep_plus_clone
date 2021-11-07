// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/compat/firestore"
import firebase from 'firebase/compat/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIduGPbUqmsFlBnyzpmbBzwTHdPUkNypI",
  authDomain: "react-disnep-clone.firebaseapp.com",
  projectId: "react-disnep-clone",
  storageBucket: "react-disnep-clone.appspot.com",
  messagingSenderId: "236531773122",
  appId: "1:236531773122:web:dd548d450745833f33955b"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebaseApp.auth.GooglAuthProvider();
// const storage = firebase.storage();

// export { auth, provider, storage };
export default db;