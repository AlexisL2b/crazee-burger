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
        className="add_button"
      />
      <Confirmation />
    </ButtonConfirmationStyled>
  )
}

const ButtonConfirmationStyled = styled.div`
  display: flex;
  .add_button {
    width: 50%;
    padding: 8px 16px 8px 24px;
    border: solid 2px ${theme.colors.green};
    background-color: ${theme.colors.green};
    &:hover {
      color: ${theme.colors.green};
      background-color: ${theme.colors.white};
    }
  }
`
