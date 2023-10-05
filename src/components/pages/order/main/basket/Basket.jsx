import React, { useContext } from "react"
import { styled } from "styled-components"

import Body from "./Body"
import Header from "./Header"
import Footer from "./Footer"
import OrderContext from "../../../../../context/OrderContext"
import Loading from "../../../Loading"

export default function Basket() {
  const { products } = useContext(OrderContext)
  if (products === undefined) {
    return <Loading version={"basket"} />
  }
  return (
    <BasketStyled>
      <Header />
      <Body />
      <Footer />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  height: 100%;
  grid-row: span 3;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70px 2fr 70px;
  border-bottom-left-radius: 15px;
`
