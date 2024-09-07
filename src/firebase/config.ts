import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC47u_wB8EnaYO3xENwqXch-k4KMfJ60qc",
  authDomain: "room-chat-8d220.firebaseapp.com",
  projectId: "room-chat-8d220",
  storageBucket: "room-chat-8d220.appspot.com",
  messagingSenderId: "281378373145",
  appId: "1:281378373145:web:a61abc0f5942164e7f3488",
  measurementId: "G-FKY1HPF8CF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
