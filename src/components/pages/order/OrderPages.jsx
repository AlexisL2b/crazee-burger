import styled from "styled-components"
import Navbar from "./navbar/NavBar"
import Main from "./main/Main"
import { theme } from "../../../theme"
import Context from "../../../context/Context"
import { useState } from "react"
import StateContext from "../../../context/StateContext"

export default function OrderPages() {
  //state
  const [role, setRole] = useState("user")
  const [state, setState] = useState("opened")
  const contextRoleValue = { Role: role, setRole: setRole }
  const contextStateValue = { State: state, setState: setState }
  //comportement

  //affichage
  return (
    <OrderPageStyled>
      <div className="container">
        <Context.Provider value={contextRoleValue}>
          <Navbar />
          <StateContext.Provider value={contextStateValue}>
            <Main />
          </StateContext.Provider>
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
    position: relative;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`
