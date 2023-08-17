import React from "react"
import { styled } from "styled-components"

export default function Basket() {
  return <BasketStyled></BasketStyled>
}

const BasketStyled = styled.div`
  height: 100%;

  grid-row: span 3;
  background: red;
`
