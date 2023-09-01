import React, { useContext } from "react"
import { styled } from "styled-components"
import { theme } from "../../../../../theme"
import Card from "../../../../reusable-ui/cards/Card"
import OrderContext from "../../../../../context/OrderContext"
import Stock from "./stock/Stock"

export default function Menu() {
  const { products, isAdmin, handleDelete, handleProductSelect } =
    useContext(OrderContext)

  return (
    <MenuStyled>
      {products.length != 0 ? (
        products.map((product) => (
          <Card
            id={product.id}
            className={"cardProduct"}
            key={product.id}
            imageSource={product.imageSource}
            title={product.title}
            priceProduct={product.price}
            onDelete={handleDelete}
            isAdmin={isAdmin}
            onClick={handleProductSelect}
          />
        ))
      ) : (
        <Stock />
      )}
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
  place-items: center;
  width: 100%;
`
