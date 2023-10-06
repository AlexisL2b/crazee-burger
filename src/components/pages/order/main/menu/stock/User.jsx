import React from "react"
import { styled } from "styled-components"
import { theme } from "../../../../../../theme"

export default function User() {
  return (
    <UserStyled>
      <h1>Victime de notre succès ! :D</h1>
      <span>De nouvelles recettes sont en cours de préparation.</span>
      <span>À très vite !</span>
    </UserStyled>
  )
}
const UserStyled = styled.div`
  /* font-family: ${theme.fontsFamily.amatic};
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 21px; */
  width: 100%;
  place-items: center;
  display: flex;
  flex-direction: column;
  gap: 21px;
  font-family: ${theme.fontsFamily.amatic};
  .h1 {
    font-weight: ${theme.fonts.weights.bold};
  }
`
