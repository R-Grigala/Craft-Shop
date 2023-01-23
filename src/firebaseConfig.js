import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAfRLoGGNB50NyMigLcc2BVzA5g1jOWZZE",
  authDomain: "fir-react-82239.firebaseapp.com",
  projectId: "fir-react-82239",
  storageBucket: "fir-react-82239.appspot.com",
  messagingSenderId: "1085548493103",
  appId: "1:1085548493103:web:a537c25c3c55b18edac9da"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);