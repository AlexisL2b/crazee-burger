import React, { useContext, useRef, useState } from "react"
import { styled } from "styled-components"
import { getSelectInput, getTextInput } from "./InputConfig"
import TextInput from "../TextInput"
import OrderContext from "../../../context/OrderContext"
import { MdOutlineEuro } from "react-icons/md"
import { FiPackage } from "react-icons/fi"
import { RiMegaphoneFill } from "react-icons/ri"
import ToggleButtonForm from "./ToggleButtonForm"
import { getDeepClone } from "../../../utils/windows"
import SelectInput from "../SelectInput"

export default function InputFields({
  className,
  product,
  onChange,
  onBlur,
  onFocus,
  onClick,
}) {
  const textInputs = getTextInput({ product })
  const { inputRef } = useContext(OrderContext)

  const selectInputs = getSelectInput({ product })

  const stopPropagation = (e) => {
    onClick()
    console.log(product)
  }

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
          onBlur={onBlur}
          onFocus={onFocus}
        />
      ))}

      {selectInputs.map((select) => (
        <SelectInput {...select} onChange={onChange} key={select.id} />
      ))}
    </InputFieldsStyled>
  )
}
const InputFieldsStyled = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 8px;
  .title {
    grid-area: 1/1/2/4;
  }
  .image {
    grid-area: 2/1/3/4;
  }
  .price {
    grid-area: 3/1/4/2;
  }

  .is-available {
    background: pink;
  }
  .is-advertised {
    background: yellow;
  }
`
