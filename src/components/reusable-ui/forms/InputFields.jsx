import React, { useContext, useRef, useState } from "react"
import { styled } from "styled-components"
import { getTextInputConfig } from "./textInputAddConfig"
import TextInput from "../TextInput"
import OrderContext from "../../../context/OrderContext"

export default function InputFields({ className, product }) {
  const textInputs = getTextInputConfig({ product })
  const {
    inputRef,
    existingProduct,
    setExistingProduct,
    handleEdit,
    handleBasketEdit,
  } = useContext(OrderContext)

  const handleChange = (e) => {
    const name = e.target.name
    const newValue = e.target.value
    const productBeingUpdated = {
      ...existingProduct,
      [name]: newValue,
    }

    setExistingProduct(productBeingUpdated)
    handleEdit(productBeingUpdated)
    handleBasketEdit(productBeingUpdated)
  }

  console.log()
  return (
    <InputFieldsStyled className={className}>
      {textInputs.map((input) => (
        <TextInput
          key={input.id}
          Icon={input.icon}
          type={input.type}
          name={input.name}
          className={input.className}
          placeholder={input.placeholder}
          onChange={handleChange}
          value={input.value ? input.value : ""}
          version={input.version}
          ref={input.name === "title" ? inputRef : null}
        />
      ))}
    </InputFieldsStyled>
  )
}
const InputFieldsStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
`
