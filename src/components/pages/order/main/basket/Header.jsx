import React, { useContext } from "react"
import { styled } from "styled-components"
import { theme } from "../../../../../theme"
import OrderContext from "../../../../../context/OrderContext"
import { formatMontant, sum } from "../../../../../utils/maths"
import CasinoEffect from "../../../../reusable-ui/CasinoEffect"

export default function Header() {
  const { total } = useContext(OrderContext)
  const totalPrice = sum(total)
  const totalPriceFormat = formatMontant(totalPrice)
  return (
    <HeaderStyled>
      <span className="total">Total</span>
      <CasinoEffect count={totalPriceFormat} className={"price"} />
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
    display: flex;
    align-items: center;
  }
  .total {
    display: grid;
    align-items: center;
  }
`
