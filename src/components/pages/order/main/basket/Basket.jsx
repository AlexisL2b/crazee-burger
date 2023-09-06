import React from "react"
import { styled } from "styled-components"
import BasketContent from "./BasketContent"
import Total from "./Total"
import BasketFooter from "./BasketFooter"

export default function Basket() {
  return (
    <BasketStyled>
      <Total />

      <BasketContent />

      <BasketFooter />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  height: 100%;
  grid-row: span 3;
  background: red;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70px 2fr 70px;
  border-bottom-left-radius: 15px;
`
