import React, { useContext } from "react"
import { styled } from "styled-components"
import { SlBasket } from "react-icons/sl"
import { theme } from "../../../../theme"
import OrderContext from "../../../../context/OrderContext"

export default function BasketButton() {
  const { basketMobileOpen, setBasketMobileOpen } = useContext(OrderContext)

  const openBasket = () => {
    setBasketMobileOpen(!basketMobileOpen)
    console.log(basketMobileOpen)
  }
  return (
    <BasketButtonStyled onClick={openBasket}>
      <SlBasket />
    </BasketButtonStyled>
  )
}

const BasketButtonStyled = styled.button`
  border-radius: 15px;
  height: 32px;
  padding: 5px;
  font-size: 20px;
  display: flex;
  align-self: center;
  justify-self: center;
  margin: 3px;
  background-color: ${theme.colors};
`
