import styled from "styled-components"
import Navbar from "./navbar/NavBar"
import Main from "./main/Main"
import { theme } from "../../../theme"
import { useState } from "react"
import OrderContext from "../../../context/OrderContext"

export default function OrderPages() {
  //state
  const [isAdmin, setIsAdmin] = useState(false)
  const [isOpen, setIsOpen] = useState(true)
  const orderContextValue = { isAdmin, setIsAdmin, isOpen, setIsOpen }

  //comportement

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

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`
