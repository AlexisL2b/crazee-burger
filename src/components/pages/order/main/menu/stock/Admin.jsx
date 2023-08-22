import React from "react"
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton"
import { styled } from "styled-components"
import { theme } from "../../../../../../theme"

export default function Admin() {
  return (
    <AdminStyled>
      <h1 className="h1">Le menu est vide ?</h1>
      <h2>Cliquez ci-dessous pour le réinitialiser</h2>
      <PrimaryButton
        label={"Générer de nouveaux produits"}
        className={"generator"}
      />
    </AdminStyled>
  )
}
const AdminStyled = styled.div`
  place-items: center;
  display: flex;
  flex-direction: column;
  gap: 21px;
  font-family: ${theme.fontsFamily.amatic};
  .h1 {
    font-weight: ${theme.fonts.weights.bold};
  }
  .generator {
    padding-left: 23px;
    padding-right: 23px;
    border: 2px solid ${theme.colors.primary};
    &:hover {
    }
  }
`
