import { createContext } from "react"

export default createContext({
  isAdmin: false,
  setIsAdmin: () => {},
  isOpen: true,
  setIsOpen: () => {},
  products: [],
  setProducts: () => {},
  isVisible: false,
  setIsVisible: () => {},
  handleAdd: () => {},
})
