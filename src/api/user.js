import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import { useId } from "react"
import { fakeMenu2 } from "../components/fakeData/fakeMenu"

export const getUser = async (userId) => {
  // const docRef = doc(PATH)

  const docRef = doc(db, "users", userId)
  const docSnapshot = await getDoc(docRef)

  if (docSnapshot.exists()) {
    const userReceived = docSnapshot.data()
    return userReceived
  }
}

export const createUser = (userId) => {
  const docRef = doc(db, "users", userId)
  const newDoc = {
    username: userId,
    menu: fakeMenu2,
  }
  setDoc(docRef, newDoc)
}

export const authenticateUser = async (userId) => {
  const user = await getUser(userId)
  if (!user) {
    createUser(userId)
  }
}
