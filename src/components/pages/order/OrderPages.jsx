import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import Navbar from "../../reusable-ui/NavBar"
import Main from "../../reusable-ui/Main"

export default function OrderPages() {
  //state

  //comportement
  //affichage
  return (
    <OrderPageStyled>
      <Navbar />
      <Main />
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  background-color: #ff9f1a;
  height: 100vh;
  padding: 25px 56px 25px 56px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`
