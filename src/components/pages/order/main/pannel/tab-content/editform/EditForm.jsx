import React, { useContext, useState } from "react"
import { styled } from "styled-components"
import OrderContext from "../../../../../../../context/OrderContext"
import Form from "../../../../../../reusable-ui/Form"
import Message from "../../Message"
import { HiCursorClick } from "react-icons/hi"

export default function EditForm() {
  //State

  //comportement

  //render
  const { existingProduct, handleEdit, activeTab, selectedCardId } =
    useContext(OrderContext)

  return (
    <EditFormStyled>
      {selectedCardId != null ? (
        <Form
          action={"submit"}
          product={existingProduct}
          index={activeTab}
          onChange={handleEdit}
        />
      ) : (
        <Message
          label={"Cliquer sur un produit pour le modifier"}
          icon={<HiCursorClick />}
        />
      )}
    </EditFormStyled>
  )
}

const EditFormStyled = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
`
