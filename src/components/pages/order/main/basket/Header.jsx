import React, { useContext } from "react"
import { styled } from "styled-components"
import { theme } from "../../../../../theme"
import OrderContext from "../../../../../context/OrderContext"
import { formatMontant, sum } from "../../../../../utils/maths"

export default function Header() {
  const { total } = useContext(OrderContext)
  const totalPrice = sum(total)
  const totalPriceFormat = formatMontant(totalPrice)
  return (
    <HeaderStyled>
      <span className="total">Total</span>{" "}
      <span className="price"> {total != 0 ? totalPriceFormat : 0.0} €</span>
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
