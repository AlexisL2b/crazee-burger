import styled from "styled-components"
import Navbar from "./navbar/NavBar"
import Main from "./main/Main"
import { theme } from "../../../theme"

export default function OrderPages() {
  //state

  //comportement
  //affichage
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar />
        <Main />
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
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }

  /* background-color: #ff9f1a;
  height: 100vh;
  padding: 25px 56px 25px 56px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`
