import styled from "styled-components"
import Navbar from "./navbar/NavBar"
import Main from "./main/Main"
import { theme } from "../../../theme"
import { useState } from "react"
import OrderContext from "../../../context/OrderContext"
import { fakeMenu2, fakeMenu3 } from "../../fakeData/fakeMenu"

export default function OrderPages() {
  //state
  const [isAdmin, setIsAdmin] = useState(false)
  const [isOpen, setIsOpen] = useState(true)
  const [products, setProducts] = useState(fakeMenu2)
  const [isVisible, setIsVisible] = useState(false)
  const [productsBackup, setProductsBackup] = useState(fakeMenu3)

  //comportement
  const handleGenerate = () => {
    setProducts(productsBackup)
  }

  const handleAdd = (newProduct) => {
    const copyProducts = [...products]

    const productsUpdated = [newProduct, ...copyProducts]

    setProducts(productsUpdated)
  }
  const handleDelete = (e) => {
    //L'id du produit
    const idProductToDelete = e.currentTarget.parentElement.id
    const productFilter = products.filter(
      (product) => product.id != idProductToDelete
    )
    setProducts(productFilter)
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
