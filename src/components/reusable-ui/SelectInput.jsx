import React from "react"
import { styled } from "styled-components"
import { theme } from "../../theme"
import { convertStringToBoolean } from "../../utils/bool"

export default function SelectInput({
  value,
  options,
  className,
  id,
  name,
  onChange,
  onBlur,
  onFocus,
  Icon,
}) {
  return (
    <SelectInputStyled className={className} icon={Icon}>
      {Icon && <div className="icon">{Icon}</div>}
      <select
        value={value}
        name={name}
        id={id}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {options.map(({ value, label }) => (
          <option value={convertStringToBoolean(value)} key={label}>
            {label}
          </option>
        ))}
      </select>
    </SelectInputStyled>
  )
}
convertStringToBoolean
const SelectInputStyled = styled.div`
  background-color: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;
  padding: 8px 16px;
  height: 35px;
  .icon {
    font-size: ${theme.fonts.size.P1};
    margin-right: 13px;
    color: ${theme.colors.greyBlue};
    display: flex;
  }
  select {
    background-color: ${theme.colors.background_white};
    border: none;
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.dark};
    width: 100%;
    outline: 0;
  }
  @media (max-width: 480px) {
    padding: 4px 8px;
    .icon {
      margin-right: 0px;
      font-size: ${theme.fonts.size.P0};
    }
  }
`
