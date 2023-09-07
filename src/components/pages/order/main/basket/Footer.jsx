import React from "react"
import { styled } from "styled-components"
import { theme } from "../../../../../theme"

export default function Footer() {
  return <FooterStyled>Codé avec ❤️ et React.JS</FooterStyled>
}

const FooterStyled = styled.div`
  background: #292729;
  color: ${theme.colors.white};
  font-family: ${theme.fontsFamily.amatic};
  font-size: ${theme.fonts.size.P2};
  font-weight: ${theme.fonts.weights.bold};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
`
