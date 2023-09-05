import React from "react"
import { styled } from "styled-components"
import ImagePreview from "../pages/order/main/pannel/tab-content/addform/ImagePreview"
import InputFields from "../pages/order/main/pannel/tab-content/addform/InputFields"
import ButtonConfirmation from "../pages/order/main/pannel/tab-content/addform/ButtonConfirmation"
import Message from "../pages/order/main/pannel/Message"

export default function Form({ action, onSubmit, product, onChange, index }) {
  return (
    <FormStyled action={action} onSubmit={onSubmit}>
      <ImagePreview />
      <InputFields
        className={"input_fields"}
        product={product}
        onChange={onChange}
        index={index}
      />
      {index === "add" ? (
        <ButtonConfirmation className={"button_confirmation"} />
      ) : (
        <Message
          label={
            "Cliquer sur un produit du menu pour le modifier en temps réel"
          }
          version="smallPrimary"
          className="message"
        />
      )}
    </FormStyled>
  )
}

const FormStyled = styled.form`
  height: 100%;
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
  .message {
    grid-area: 2/2/-1/-1;
  }
`
