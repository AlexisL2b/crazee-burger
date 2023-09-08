import { createContext } from "react"

export default createContext({
  isAdmin: false,
  isOpen: true,
  isVisible: false,
  handleAdd: () => {},
  handleDelete: () => {},
  handleGenerate: () => {},
  products: [],
  activeTab: "",
  existingProduct: {},
  handleEdit: () => {},
  inputRef: {},
  newProduct: {},
  setIsVisible: () => {},
  setNewProduct: () => {},
  setExistingProduct: async () => {},
  setIsOpen: () => {},
  setActiveTab: async () => {},
  selectedCardId: null,
  setSelectedCardId: async () => {},
  setIsAdmin: () => {},
  basketProducts: [],
  setBasketProducts: () => {},
})
