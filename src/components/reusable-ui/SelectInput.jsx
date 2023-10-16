import React from "react"
import { styled } from "styled-components"

export default function SelectInput({
  value,
  options,
  className,
  id,
  name,
  onChange,
}) {
  return (
    <SelectInputStyled
      value={value}
      name={name}
      className={className}
      id={id}
      onChange={onChange}
    >
      {options.map(({ value, label }) => (
        <option value={value} key={label}>
          {label}
        </option>
      ))}
    </SelectInputStyled>
  )
}

const SelectInputStyled = styled.select`
  border: 1px solid red;
`
