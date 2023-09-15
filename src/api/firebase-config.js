// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCW7azcMPtf2fqq9qgMIe-uBMz6E_qL7Ns",
  authDomain: "crazee-burger-53092.firebaseapp.com",
  projectId: "crazee-burger-53092",
  storageBucket: "crazee-burger-53092.appspot.com",
  messagingSenderId: "152523818143",
  appId: "1:152523818143:web:0cd1a933a24800cd7fceaa",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig) //connexion a notre compte firebase
export const db = getFirestore(app) //connexion a notre bdd Firestore
