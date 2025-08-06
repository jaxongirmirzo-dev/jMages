import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeWgtVSYmC8uo-_T-u_ZoCQ3Dj18dV_qg",
  authDomain: "jimages-1790b.firebaseapp.com",
  projectId: "jimages-1790b",
  storageBucket: "jimages-1790b.firebasestorage.app",
  messagingSenderId: "701780032032",
  appId: "1:701780032032:web:b29158b00b1ce4e43e1a45",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
