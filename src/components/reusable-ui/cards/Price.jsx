import React from "react"
import { formatMontant } from "../../../utils/maths"
import { css, styled } from "styled-components"
import { theme } from "../../../theme"

export default function Price({ priceProduct, version = "primaryStyled" }) {
  return (
    <PriceStyled version={version}>{formatMontant(priceProduct)} €</PriceStyled>
  )
}
const PriceStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: ${theme.fonts.weights.medium};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: ${theme.fonts.weights.medium};
  ${({ version }) => extraStyle[version]}
`

const primaryStyled = css`
  color: ${theme.colors.primary};
`
const secondaryStyled = css`
  color: ${theme.colors.white};
`
const extraStyle = {
  primaryStyled,
  secondaryStyled,
}
