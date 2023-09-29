import React, { useContext, useRef, useState } from "react"
import { styled } from "styled-components"
import { getTextInputConfig } from "./textInputAddConfig"
import TextInput from "../TextInput"
import OrderContext from "../../../context/OrderContext"

export default function InputFields({ className, product, onChange }) {
  const textInputs = getTextInputConfig({ product })
  const { inputRef } = useContext(OrderContext)

  // const handleChange = (e) => {
  //   const name = e.target.name
  //   const newValue = e.target.value
  //   const productBeingUpdated = {
  //     ...existingProduct,
  //     [name]: newValue,
  //   }

  //   const productExistingBasket = basketProducts.find(
  //     (productExistingBasket) => productExistingBasket.id === existingProduct.id
  //   )

  //   setExistingProduct(productBeingUpdated)
  //   handleEdit(productBeingUpdated)
  //   if (productExistingBasket) {
  //     handleBasketEdit(productBeingUpdated)
  //   }
  // }

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
          onChange={onChange}
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
