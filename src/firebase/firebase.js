import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCN9FzTFeiTfXrdQzge25RzxAUC6heIxi4",
  authDomain: "clothing-app-f2f19.firebaseapp.com",
  projectId: "clothing-app-f2f19",
  storageBucket: "clothing-app-f2f19.appspot.com",
  messagingSenderId: "316942694887",
  appId: "1:316942694887:web:738f94ab17a5bf9cdba542",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ propmt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
