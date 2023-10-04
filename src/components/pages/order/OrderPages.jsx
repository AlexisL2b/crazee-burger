import styled from "styled-components"
import Navbar from "./navbar/NavBar"
import Main from "./main/Main"
import { theme } from "../../../theme"
import { useEffect, useRef, useState } from "react"
import OrderContext from "../../../context/OrderContext"
import { useMenu } from "../../../hooks/useMenu"
import { EMPTY_PRODUCT } from "../../../enums/product"
import { fakeBasket } from "../../fakeData/fakeBasket"
import { useBasket } from "../../../hooks/useBasket"
import { getUser } from "../../../api/user"
import { useParams } from "react-router-dom"
import.meta.env
export default function OrderPages() {
  //state
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  const [existingProduct, setExistingProduct] = useState(EMPTY_PRODUCT)
  const [activeTab, setActiveTab] = useState("add")
  const [isVisible, setIsVisible] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isOpen, setIsOpen] = useState(true)
  const [selectedCardId, setSelectedCardId] = useState(null)
  const [quantity, setQuantity] = useState(0)
  const { userName } = useParams()
  const [afficher, setAfficher] = useState(true)
  const [isBlured, setIsBlured] = useState(false) // Par défaut, le composant est affiché

  // const [isMounted, setIsMounted] = useState(false)

  //@TODO Changer la valeur du state product avec un useEffect
  const inputRef = useRef()
  const {
    handleDelete,
    handleAdd,
    handleGenerate,
    handleEdit,
    products,
    fetchData,
  } = useMenu()
  const {
    handleAddBasketProduct,
    basketProducts,
    total,
    handleDeleteBasketProduct,
    handleBasketEdit,
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
    quantity,
    setQuantity,
    total,
    handleDeleteBasketProduct,
    handleBasketEdit,
    afficher,
    isBlured,
    setIsBlured,
    // handleIncrementationBasketProduct,
    // ammount,
    // isMounted,
  }
  // console.log(import.meta.env.VITE_API_KEY)
  // getUser("Alex")
  // getMenu("Alex")
  // const { userName } = useParams()

  //affichage

  useEffect(() => {
    const timer = setTimeout(() => {
      setAfficher(false) // Cache le composant après 3 secondes
    }, 1000)

    // Ceci sert à annuler le délai si le composant est démonté avant que le temps ne soit écoulé
    return () => clearTimeout(timer)
  }, []) // Les crochets vides signifient que cet effet ne s'exécute qu'une fois, similaire à `componentDidMount`

  useEffect(() => {
    // Code à exécuter lors de l'effet
    fetchData()
    return () => {
      // Code de nettoyage (similaire à componentWillUnmount)
    }
  }, [userName, products])
  // useEffect(() => {
  //   // Met à jour l'état après que le composant ait été monté
  //   setIsMounted(true)
  // }, [])
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
    /* height: 95vh; */
    /* width: 1400px; */
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`
