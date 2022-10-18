import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfW0RDCxlztOMIjS7UX8opAN0XPvGn9nQ",
  authDomain: "portfolio-8917e.firebaseapp.com",
  projectId: "portfolio-8917e",
  storageBucket: "portfolio-8917e.appspot.com",
  messagingSenderId: "221244182827",
  appId: "1:221244182827:web:699b4298f19a0b1cecf56e",
  measurementId: "G-D85QJ5EDKT",
};

export const app = initializeApp(firebaseConfig);
// export const storage = getStorage(app);
// export const storageRef = ref(storage);
// export const db = getFirestore(app);

export const auth = getAuth(app);

export const signIn = (email: string, password: string) => {
  console.log("signing in..");
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

export const createUser = (email: string, password: string) => {
  console.log("signing you up..");

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};
