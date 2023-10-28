import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"

export const getMenu = async (userId) => {
  const docRef = doc(db, "users", userId)
  const docSnapshot = await getDoc(docRef)

  if (docSnapshot.exists()) {
    const menuReceived = docSnapshot.data().menu
    return menuReceived
  }
  return []
}

export const menuUpdate = async (userId, menu) => {
  const docRef = doc(db, "users", userId)
  const newDoc = {
    username: userId,
    menu: menu,
  }
  setDoc(docRef, newDoc)
}
