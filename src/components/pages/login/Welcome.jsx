import React from "react"
import { theme } from "../../../theme"
import { styled } from "styled-components"

export default function Welcome() {
  return (
    <WelcomeStyled>
      <h1>Bienvenue chez nous !</h1>
      <div className="divider"></div>
      <span className="connect">Connectez-vous</span>
    </WelcomeStyled>
  )
}

const WelcomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    text-align: center;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
    font-family: ${theme.fontsFamily.amatic};
  }
  .divider {
    border: 1px solid ${theme.colors.primary};
    margin-bottom: ${theme.gridUnit * 5}px;
    margin-top: 32px;
    width: 400px;
  }
  .connect {
    text-align: center;
    font-family: ${theme.fontsFamily.amatic};
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.white};
    font-weight: ${theme.fonts.weights.bold};
  }
`
