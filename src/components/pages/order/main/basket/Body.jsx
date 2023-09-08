import React from "react"
import { styled } from "styled-components"
import { theme } from "../../../../../theme"

export default function Body() {
  return (
    <BodyStyled>
      <span> Votre commande est vide.</span>
    </BodyStyled>
  )
}
const BodyStyled = styled.div`
  background: #f5f5f7;
  color: ${theme.colors.greyBlue};
  font-family: ${theme.fontsFamily.amatic};
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.regular};
  line-height: 72px;
  box-shadow: 0px 0px 20px 0px #00000033 inset;
  display: flex;
  justify-content: center;
  align-items: center;
`
