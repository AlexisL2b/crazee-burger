import styled from "styled-components"
import Navbar from "./navbar/NavBar"
import Main from "./main/Main"
import { theme } from "../../../theme"
import { useRef, useState } from "react"
import OrderContext from "../../../context/OrderContext"
import { useMenu } from "../../../hooks/useMenu"
import { EMPTY_PRODUCT } from "../../../enums/product"
import { fakeBasket } from "../../fakeData/fakeBasket"
import { useBasket } from "../../../hooks/useBasket"
export default function OrderPages() {
  //state
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  const [existingProduct, setExistingProduct] = useState(EMPTY_PRODUCT)
  const [activeTab, setActiveTab] = useState("add")
  const [isVisible, setIsVisible] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isOpen, setIsOpen] = useState(true)
  const [selectedCardId, setSelectedCardId] = useState(null)

  const inputRef = useRef()
  const { handleDelete, handleAdd, handleGenerate, handleEdit, products } =
    useMenu()
  const {
    handleAddBasketProduct,
    basketProducts,
    handleIncrementationBasketProduct,
    ammount,
  } = useBasket()

  const orderContextValue = {
    isAdmin,
    isOpen,
    isVisible,
    handleAdd,
    handleDelete,
    handleGenerate,
    products,
    activeTab,
    existingProduct,
    handleEdit,
    inputRef,
    newProduct,
    setIsVisible,
    setNewProduct,
    setExistingProduct,
    setIsOpen,
    setActiveTab,
    selectedCardId,
    setSelectedCardId,
    setIsAdmin,
    handleAddBasketProduct,
    basketProducts,
    handleIncrementationBasketProduct,
    ammount,
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
