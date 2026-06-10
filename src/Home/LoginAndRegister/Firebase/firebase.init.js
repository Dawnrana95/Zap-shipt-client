// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIy6ITz4lnYq1mfAvY_-gFJE0UBwSmvkM",
  authDomain: "final-project-b153e.firebaseapp.com",
  projectId: "final-project-b153e",
  storageBucket: "final-project-b153e.firebasestorage.app",
  messagingSenderId: "651699538402",
  appId: "1:651699538402:web:3bb79607351da4422e11bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);