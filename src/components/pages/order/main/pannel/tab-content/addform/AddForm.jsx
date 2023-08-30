import React, { useContext, useState } from "react"
import { styled } from "styled-components"
import OrderContext from "../../../../../../../context/OrderContext"
import InputFields from "./InputFields"
import ButtonConfirmation from "./ButtonConfirmation"
import ImagePreview from "./ImagePreview"

export default function AddForm() {
  //state
  const { newProduct, handleSubmit, handleChange } = useContext(OrderContext)

  //affichage

  return (
    <AddFormStyled action="submit" onSubmit={handleSubmit}>
      <ImagePreview />
      <InputFields
        className={"input_fields"}
        newProduct={newProduct}
        onChange={handleChange}
      />
      <ButtonConfirmation className={"button_confirmation"} />
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
  height: 90%;
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);

  .input_fields {
    grid-area: 1/2/4/2;
    grid-row-gap: 8px;
  }
  .button_confirmation {
    grid-area: 4/2/4/2;
  }
`
