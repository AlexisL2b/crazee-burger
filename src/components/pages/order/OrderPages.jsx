import styled from "styled-components"
import Navbar from "./navbar/NavBar"
import Main from "./main/Main"
import { theme } from "../../../theme"
import { useRef, useState } from "react"
import OrderContext from "../../../context/OrderContext"
import { fakeMenu2, fakeMenu3 } from "../../fakeData/fakeMenu"
import { EMPTY_PRODUCT } from "../../../enums/product"
import { getDeepClone } from "../../../utils/windows"

export default function OrderPages() {
  //state
  const [selectedCardId, setSelectedCardId] = useState(null)

  const [isAdmin, setIsAdmin] = useState(false)
  const [isOpen, setIsOpen] = useState(true)
  const [products, setProducts] = useState(fakeMenu2)
  const [isVisible, setIsVisible] = useState(false)
  const [productsBackup, setProductsBackup] = useState(fakeMenu3)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  const [activeTab, setActiveTab] = useState("add")
  const [existingProduct, setExistingProduct] = useState(EMPTY_PRODUCT)
  // const [confirmActive, setConfirmActive] = useState(false)

  const inputRef = useRef()
  //comportement
  // const handleEditTabActive = (id) => {
  //   if (activeCard === id) {
  //     setIsOpen(true)
  //     setActiveTab("edit")
  //   }
  //   //a déplacer dans la fonctionner qui selectionne un produit
  // }
  //rendre visible ou non le form et pas faire du conditionnal renderiu

  const handleSubmit = (e) => {
    e.preventDefault()
    const newProductToAdd = {
      id: new Date().getTime(),
      ...newProduct,
    }
    handleAdd(newProductToAdd)
    setIsVisible(true)
    setNewProduct(EMPTY_PRODUCT)
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2000)
    return () => clearTimeout(timer)
  }
  const handleChange = (e) => {
    const name = e.target.name
    const newValue = e.target.value
    setNewProduct({ ...newProduct, [name]: newValue })
    console.log(activeCard)
  }

  const handleGenerate = () => {
    setProducts(productsBackup)
  }

  const handleAdd = (newProduct) => {
    const copyProducts = getDeepClone(products)

    const productsUpdated = [newProduct, ...copyProducts]

    setProducts(productsUpdated)
  }
  const handleDelete = (e) => {
    //L'id du produit
    const idProductToDelete = e.currentTarget.parentElement.id
    const copyProducts = getDeepClone(products)
    const productFilter = copyProducts.filter(
      (product) => product.id != idProductToDelete
    )
    setProducts(productFilter)
  }
  const handleSelectedTab = (selectedTab) => {
    if (selectedTab != "chevron") {
      setIsOpen(true)
      setActiveTab(selectedTab)
    } else {
      setIsOpen(!isOpen)
      console.log(isOpen)
    }
  }

  const handleProductSelect = (e) => {
    const cardId = e.currentTarget.id
    setIsOpen(true)
    setActiveTab("edit")

    const selectedProduct = products.find((product) => product.id == cardId)
    if (selectedProduct) {
      setExistingProduct(selectedProduct)
    }
  }
  const handleEdit = (e) => {
    const cardId = e.currentTarget.id
    const name = e.target.name
    const newValue = e.target.value

    const updatedProduct = { ...existingProduct, [name]: newValue }
    setExistingProduct(updatedProduct)

    const newProductEdited = {
      id: cardId,
      ...updatedProduct,
    }

    const selectedProduct = products.find(
      (product) => product.id === newProductEdited.id
    )

    if (selectedProduct) {
      Object.assign(selectedProduct, newProductEdited)
    }

    console.log(selectedProduct)
  }
  const handleSwitchSelect = (id) => {
    setSelectedCardId((prevId) => (prevId !== id ? id : null))
  }

  const orderContextValue = {
    isAdmin,
    setIsAdmin,
    isOpen,
    setIsOpen,
    isVisible,
    setIsVisible,
    handleAdd,
    handleDelete,
    handleGenerate,
    products,
    handleSubmit,
    handleChange,
    newProduct,
    setNewProduct,
    activeTab,
    setActiveTab,
    handleSelectedTab,
    existingProduct,
    setExistingProduct,
    handleProductSelect,
    handleEdit,
    inputRef,
    selectedCardId,
    setSelectedCardId,
    handleSwitchSelect,
  }

  //affichage
  return (
    <OrderPageStyled>
      <div className="container">
        <OrderContext.Provider value={orderContextValue}>
          <Navbar />
          <Main />
        </OrderContext.Provider>
      </div>
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px, 56px, 25px, 56px;

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`
