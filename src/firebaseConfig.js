import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfRLoGGNB50NyMigLcc2BVzA5g1jOWZZE",
  authDomain: "fir-react-82239.firebaseapp.com",
  projectId: "fir-react-82239",
  storageBucket: "fir-react-82239.appspot.com",
  messagingSenderId: "1085548493103",
  appId: "1:1085548493103:web:a537c25c3c55b18edac9da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;