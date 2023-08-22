import { createContext } from "react"

export default createContext({
  isAdmin: false,
  setIsAdmin: () => {},
  isOpen: true,
  setIsOpen: () => {},
})
