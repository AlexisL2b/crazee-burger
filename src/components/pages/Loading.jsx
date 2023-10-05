import React, { useContext } from "react"
import { css, styled } from "styled-components"
import OrderContext from "../../context/OrderContext"
import { theme } from "../../theme"

export default function Loading({ version }) {
  //state

  //comportement

  return <LoadingStyled version={version}>Chargement en cours...</LoadingStyled>
}

const LoadingStyled = styled.div`
  font-family: ${theme.fontsFamily.amatic};
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.regular};
  line-height: 45px;
  color: ${theme.colors.greyBlue};

  ${({ version }) => extraStyle[version]}
`

const menu = css`
  margin: auto;
`
const basket = css`
  margin: auto;
`

const extraStyle = { menu, basket }
