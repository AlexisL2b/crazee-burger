import React from "react"
import PrimaryButton from "../../../../../../reusable-ui/PrimaryButton"
import Confirmation from "./Confirmation"
import { styled } from "styled-components"
import { theme } from "../../../../../../../theme"

export default function ButtonConfirmation({ className }) {
  return (
    <ButtonConfirmationStyled className={className}>
      <PrimaryButton
        label="Ajouter un nouveau produit au menu"
        version="succes"
      />
      <Confirmation />
    </ButtonConfirmationStyled>
  )
}

const ButtonConfirmationStyled = styled.div`
  display: flex;
`
