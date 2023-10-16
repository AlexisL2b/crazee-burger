import React from "react"
import { styled } from "styled-components"

export default function SelectInput({ options, className, id }) {
  return (
    <SelectInputStyled className={className} id={id}>
      {options.map(({ value, label }) => (
        <option value={value}>{label}</option>
      ))}
    </SelectInputStyled>
  )
}

const SelectInputStyled = styled.select`
  border: 1px solid red;
`
