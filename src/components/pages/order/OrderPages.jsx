import styled from "styled-components"
import Navbar from "./navbar/NavBar"
import Main from "./main/Main"
import { theme } from "../../../theme"
import Context from "../../../context/Context"
import { useState } from "react"

export default function OrderPages() {
  //state
  const [role, setRole] = useState("user")
  const contextRoleValue = { Role: role, setRole: setRole }

  //comportement

  //affichage
  return (
    <OrderPageStyled>
      <div className="container">
        <Context.Provider value={contextRoleValue}>
          <Navbar />
          <Main />
        </Context.Provider>
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
