import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import Navbar from "../../Navbar"

export default function OrderPages() {
  //state

  //comportement
  //affichage
  return (
    <OrderPageStyled>
      <Navbar />
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  background-color: #ff9f1a;
  height: 100vh;
  padding: 25px 56px;
`
