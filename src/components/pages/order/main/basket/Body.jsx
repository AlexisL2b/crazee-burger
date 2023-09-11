import React, { useContext } from "react"
import { styled } from "styled-components"
import { theme } from "../../../../../theme"
import CardBasket from "./CardBasket/CardBasket"
import OrderContext from "../../../../../context/OrderContext"
export default function Body() {
  const { basketProducts, handleDeleteBasketProduct } = useContext(OrderContext)
  return (
    <BodyStyled>
      {basketProducts.map((product) => (
        <CardBasket
          key={product.id}
          title={product.title}
          price={product.price}
          imageSource={product.imageSource}
          quantity={product.quantity}
          onDelete={() => handleDeleteBasketProduct(product)}
        />
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

  /* Style de la barre de défilement et sa piste */
  ::-webkit-scrollbar {
    width: 0px; /* Largeur de la barre de défilement */
  }
`
