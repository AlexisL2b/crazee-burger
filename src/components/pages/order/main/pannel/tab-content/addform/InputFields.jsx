import React, { useContext, useRef, useState } from "react"
import { styled } from "styled-components"
import { getTextInputConfig } from "./textInputAddConfig"
import TextInput from "../../../../../../reusable-ui/TextInput"

export default function InputFields({ onChange, className, product }) {
  const inputTitleRef = useRef()
  const textInputs = getTextInputConfig({ product, inputTitleRef })

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
