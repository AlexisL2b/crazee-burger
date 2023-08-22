import React from "react"
import { styled } from "styled-components"
import { theme } from "../../../../../../theme"

export default function User() {
  return (
    <UserStyled>
      <h1>Victime de notre succès ! :D</h1>
      <h2>De nouvelles recettes sont en cours de préparation.</h2>
      <h2>À très vite !</h2>
    </UserStyled>
  )
}
const UserStyled = styled.div`
  font-family: ${theme.fontsFamily.amatic};
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 21px;
`
