import React, { useContext, useState } from "react"
import { styled } from "styled-components"
import { getTextInputConfig } from "./textInputAddConfig"
import TextInput from "../../../../../../reusable-ui/TextInput"
import PrimaryButton from "../../../../../../reusable-ui/PrimaryButton"
import { theme } from "../../../../../../../theme"
import Confirmation from "./Confirmation"

export default function InputFields({ onChange, className, newProduct }) {
  const textInputs = getTextInputConfig({ newProduct })
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
        />
      ))}
    </InputFieldsStyled>
  )
}
const InputFieldsStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  .input_text {
    margin: 0;
    border: none;
    height: 35px;
    background-color: #f5f5f7;
    width: 605px;
    border-radius: 5px;
    padding: 8px 16px 8px 24px;
    input {
      background-color: #f5f5f7;
      width: 100%;
      margin-left: 15px;
    }
    &::placeholder {
      font-size: 14px;
      color: #a7a8ad;
    }
    .icon {
      color: ${theme.colors.greyBlue};
    }
  }
`
