// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoeRDyJKWwro7GZR1O0bZHb3WjgITqEbw",
  authDomain: "fir-project-concept-02.firebaseapp.com",
  projectId: "fir-project-concept-02",
  storageBucket: "fir-project-concept-02.firebasestorage.app",
  messagingSenderId: "707367874936",
  appId: "1:707367874936:web:6a7c09b10a26a1dd20d88d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)