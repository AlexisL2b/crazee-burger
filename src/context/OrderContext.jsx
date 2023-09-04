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
  handleDelete: () => {},
  handleGenerate: () => {},
  handleSubmit: () => {},
  handleChange: () => {},
  newProduct: {},
  setNewProduct: () => {},
  activeTab: "",
  setActiveTab: () => {},
  handleSelectedTab: () => {},
  handleEditTabActive: () => {},
  handleCardActive: () => {},
  existingProduct: {},
  setExistingProduct: () => {},
  handleProductSelect: () => {},
  handleEdit: () => {},
  confirmActive: true,
  setConfirmActive: () => {},
  handleFocus: () => {},
  inputRef: null,
})
