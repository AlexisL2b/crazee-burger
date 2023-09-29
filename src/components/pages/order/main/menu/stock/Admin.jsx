import React, { useContext, useState } from "react"
import PannelButton from "../../../../../reusable-ui/PannelButton"
import { styled } from "styled-components"
import { theme } from "../../../../../../theme"
import OrderContext from "../../../../../../context/OrderContext"

export default function Admin() {
  const { handleGenerate } = useContext(OrderContext)

  return (
    <AdminStyled>
      <h1 className="h1">Le menu est vide ?</h1>
      <h2>Cliquez ci-dessous pour le réinitialiser</h2>
      <PannelButton
        className={"generator"}
        label={"Générer de nouveaux produits"}
        onClick={handleGenerate}
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
    background-color: ${theme.colors.primary};
    color: ${theme.colors.background_white};
    border-radius: 5px;
  }
`
