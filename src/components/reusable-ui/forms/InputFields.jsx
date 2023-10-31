import React, { useContext } from "react"
import { styled } from "styled-components"
import { getSelectInput, getTextInput } from "./InputConfig"
import TextInput from "../TextInput"
import OrderContext from "../../../context/OrderContext"
import SelectInput from "../SelectInput"

export default function InputFields({
  className,
  product,
  onChange,
  onBlur,
  onFocus,
}) {
  const textInputs = getTextInput({ product })
  const { inputRef } = useContext(OrderContext)

  const selectInputs = getSelectInput({ product })

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

      <div className="container_select">
        {selectInputs.map((select) => (
          <SelectInput
            {...select}
            onChange={onChange}
            key={select.id}
            onBlur={onBlur}
            onFocus={onFocus}
            Icon={select.icon}
          />
        ))}
      </div>
    </InputFieldsStyled>
  )
}
const InputFieldsStyled = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 8px;
  width: 480px;
  .title {
    grid-area: 1/1/2/4;
  }
  .image {
    grid-area: 2/1/3/4;
  }
  .price {
    grid-area: 3/1/4/2;
  }
  .container_select {
    display: flex;
    grid-area: 3/2/4/4;
    gap: 10px;
  }
  @media (max-width: 768px) {
    width: 80%;
    grid-template-rows: repeat(4, 1fr);
    .price {
      grid-area: 3/1/4/4;
    }
    .container_select {
      display: flex;
      grid-area: 4/1/5/4;
    }
  }
  @media (max-width: 480px) {
    width: 60%;
  }
`
