import React, { useContext } from "react"
import { styled } from "styled-components"
import OrderContext from "../../../../../../../context/OrderContext"
// import InputFields from "./InputFields"
// import ButtonConfirmation from "./ButtonConfirmation"
// import ImagePreview from "./ImagePreview"
import Form from "../../../../../../reusable-ui/Form"

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
        handleChange={handleChange}
        index={activeTab}
      />
    </AddFormStyled>
  )
}

const AddFormStyled = styled.div`
  height: 100%;
  width: 100%;
`
