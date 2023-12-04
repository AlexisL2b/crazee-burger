import React from "react"
import { css, styled } from "styled-components"
import { theme } from "../../../../../theme"

export default function Footer({ version }) {
  return <FooterStyled version={version}>Codé avec ❤️ et React.JS</FooterStyled>
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
  ${({ version }) => extraStyle[version]}
`
const mobile = css`
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`

const extraStyle = {
  mobile,
}
