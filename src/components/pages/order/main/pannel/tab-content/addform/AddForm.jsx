import React, { useContext } from "react"
import { styled } from "styled-components"
import OrderContext from "../../../../../../../context/OrderContext"
import Form from "../../../../../../reusable-ui/forms/Form"
import ButtonConfirmation from "../../../../../../reusable-ui/forms/ButtonConfirmation"

export default function AddForm() {
  //state
  const { newProduct, handleSubmit, handleChange, activeTab } =
    useContext(OrderContext)

  //affichage

  return (
    <Form
      action="submit"
      onSubmit={handleSubmit}
      product={newProduct}
      onChange={handleChange}
      index={activeTab}
      g
    >
      <ButtonConfirmation className={"button_confirmation"} />
    </Form>
  )
}

const AddFormStyled = styled.div`
  height: 100%;
  width: 100%;
`
