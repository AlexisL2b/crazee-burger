import React, { useContext } from "react"
import { styled } from "styled-components"
import OrderContext from "../../../../../../../context/OrderContext"
import Form from "../../../../../../reusable-ui/forms/Form"

export default function AddForm() {
  //state
  const { newProduct, handleSubmit, handleChange, activeTab } =
    useContext(OrderContext)

  //affichage

  return (
    <AddFormStyled className="AddFormContainer">
      <Form
        action="submit"
        onSubmit={handleSubmit}
        product={newProduct}
        onChange={handleChange}
        index={activeTab}
      />
    </AddFormStyled>
  )
}

const AddFormStyled = styled.div`
  height: 100%;
  width: 100%;
`
