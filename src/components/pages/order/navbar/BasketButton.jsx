import React from "react"
import { styled } from "styled-components"
import { SlBasket } from "react-icons/sl"
import { theme } from "../../../../theme"

export default function BasketButton() {
  return (
    <BasketButtonStyled>
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
