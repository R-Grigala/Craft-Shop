
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBfdwx8nggm2iNIddqFMB-OzgGdIGtEOBc",
  authDomain: "maltimart-7108e.firebaseapp.com",
  projectId: "maltimart-7108e",
  storageBucket: "maltimart-7108e.appspot.com",
  messagingSenderId: "801922359042",
  appId: "1:801922359042:web:f7cd2648651cb8329cec1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };