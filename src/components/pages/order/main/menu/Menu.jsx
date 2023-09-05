import React, { useContext, useState } from "react"
import { styled } from "styled-components"
import { theme } from "../../../../../theme"
import Card from "../../../../reusable-ui/cards/Card"
import OrderContext from "../../../../../context/OrderContext"
import Stock from "./stock/Stock"

export default function Menu() {
  const {
    products,
    isAdmin,
    handleDelete,
    handleProductSelect,
    inputRef,
    activeCard,
  } = useContext(OrderContext)

  const [selectedCardId, setSelectedCardId] = useState(null)
  const handleFocus = (id, e) => {
    if (e.target.tagName !== "BUTTON") {
      setSelectedCardId((prevId) => (prevId !== id ? id : null))
      handleProductSelect(e)
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }
  }
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
            onClick={(e) => {
              handleFocus(product.id, e)
              e.stopPropagation()
            }}
            version={
              selectedCardId === product.id ? "selectStyled" : "normalStyled"
            }
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
