import React, { useContext } from "react"
import { styled } from "styled-components"
import { theme } from "../../../../../theme"
import CardBasket from "./CardBasket/CardBasket"
import OrderContext from "../../../../../context/OrderContext"

export default function Body() {
  const { basketProducts } = useContext(OrderContext)
  return (
    <BodyStyled>
      {basketProducts.map((product) => (
        <CardBasket />
      ))}
    </BodyStyled>
  )
}
const BodyStyled = styled.div`
  background: #f5f5f7;
  color: ${theme.colors.greyBlue};
  font-family: ${theme.fontsFamily.amatic};
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.regular};
  /* line-height: 72px; */
  box-shadow: 0px 0px 20px 0px #00000033 inset;
  grid-template-rows: repeat(auto-fit, minmax(300px, 1fr));
  overflow-y: scroll;
  scrollbar-width: none;
  padding: 16px 20px;
`