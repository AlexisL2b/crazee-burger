import React, { useContext } from "react"
import { styled } from "styled-components"
import { theme } from "../../../../../theme"
import Card from "../../../../reusable-ui/cards/Card"
import OrderContext from "../../../../../context/OrderContext"

export default function Menu() {
  const { products } = useContext(OrderContext)

  return (
    <MenuStyled>
      {products.map((products) => (
        <Card
          className={"cardProduct"}
          key={products.id}
          imageSource={products.imageSource}
          title={products.title}
          priceProduct={products.price}
        />
      ))}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: ${theme.shadows.medium};
  overflow-y: scroll;
  scrollbar-width: none;
`
