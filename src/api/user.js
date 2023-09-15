import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"

export const getUser = async (userId) => {
  // const docRef = doc(PATH)

  const docRef = doc(db, "users", userId)
  const docSnapshot = await getDoc(docRef)

  if (docSnapshot.exists()) {
    const userReceived = docSnapshot.data()
    console.log(userReceived)
  }
}

export const createUser = (userId) => {
  setDoc()
}
