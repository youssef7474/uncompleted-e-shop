import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCz93oJX3wbeKnm__DTVPq9miF3M6KJKwg",
  authDomain: "eshop-dd376.firebaseapp.com",
  projectId: "eshop-dd376",
  storageBucket: "eshop-dd376.appspot.com",
  messagingSenderId: "281697022414",
  appId: "1:281697022414:web:8b1fd3038e8ac9f215bb9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db=getFirestore(app);
export const storage = getStorage(app);
export default app;