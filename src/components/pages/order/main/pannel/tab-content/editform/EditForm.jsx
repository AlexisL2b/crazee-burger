import React, { useContext } from "react"
import { styled } from "styled-components"
import OrderContext from "../../../../../../../context/OrderContext"
import Form from "../../../../../../reusable-ui/Form"

export default function EditForm() {
  //State

  //comportement

  //render
  const { existingProduct, handleChange, activeTab, activeCard } =
    useContext(OrderContext)
  return (
    <EditFormStyled>
      {activeCard != "" ? (
        <Form
          product={existingProduct}
          index={activeTab}
          handleChange={handleChange}
        />
      ) : (
        <h1>Cliquer sur un produit pour le modifier</h1>
      )}
    </EditFormStyled>
  )
}

const EditFormStyled = styled.div`
  height: 100%;
  width: 100%;
`
