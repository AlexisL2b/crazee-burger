import React from "react"
import { styled } from "styled-components"
import { theme } from "../../../../../theme"

export default function Header() {
  return (
    <HeaderStyled>
      <span className="total">Total</span> <span className="price">0,00€</span>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.div`
  background: #292729;
  color: ${theme.colors.primary};
  font-family: ${theme.fontsFamily.amatic};
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.bold};
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0px 16px;
  .price {
    display: grid;
    grid-area: 1/2/2/3;
    align-items: center;
    justify-content: flex-end;
  }
  .total {
    display: grid;
    align-items: center;
  }
`
