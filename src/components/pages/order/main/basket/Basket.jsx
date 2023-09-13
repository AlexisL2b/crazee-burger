import React from "react"
import { styled } from "styled-components"

import Body from "./Body"
import Header from "./Header"
import Footer from "./Footer"

export default function Basket() {
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
