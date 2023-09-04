import React, { useContext, useState } from "react"
import { styled } from "styled-components"
import OrderContext from "../../../../../../../context/OrderContext"
import Form from "../../../../../../reusable-ui/Form"
import HintMessage from "../../HintMessage"

export default function EditForm() {
  //State

  //comportement

  //render
  const { existingProduct, handleEdit, activeTab, confirmActive } =
    useContext(OrderContext)

  return (
    <EditFormStyled>
      {confirmActive ? (
        <Form
          action={"submit"}
          product={existingProduct}
          index={activeTab}
          onChange={handleEdit}
        />
      ) : (
        <HintMessage />
      )}
    </EditFormStyled>
  )
}

const EditFormStyled = styled.div`
  height: 100%;
  width: 100%;
`
