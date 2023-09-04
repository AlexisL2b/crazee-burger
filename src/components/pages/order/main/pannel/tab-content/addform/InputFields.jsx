import React, { useContext, useRef, useState } from "react"
import { styled } from "styled-components"
import { getTextInputConfig } from "./textInputAddConfig"
import TextInput from "../../../../../../reusable-ui/TextInput"
import OrderContext from "../../../../../../../context/OrderContext"
import RefContext from "../../../../../../../context/RefContext"

export default function InputFields({ onChange, className, product }) {
  const { inputRefTitle } = useContext(RefContext)
  const textInputs = getTextInputConfig({ product, inputRefTitle })
  // const { existingProduct, handleEdit, activeTab, confirmActive } =
  //   useContext(OrderContext)

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
          onChange={onChange}
          value={input.value ? input.value : ""}
          version={input.version}
          ref={input.ref}
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
