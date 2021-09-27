import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCN9FzTFeiTfXrdQzge25RzxAUC6heIxi4",
  authDomain: "clothing-app-f2f19.firebaseapp.com",
  projectId: "clothing-app-f2f19",
  storageBucket: "clothing-app-f2f19.appspot.com",
  messagingSenderId: "316942694887",
  appId: "1:316942694887:web:738f94ab17a5bf9cdba542",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const usersRef = collection(firestore, "users");

  const userRef = doc(firestore, "users", `${userAuth.uid}`);

  const snapShot = await getDoc(userRef);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(doc(usersRef, `${userAuth.uid}`), {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ propmt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
