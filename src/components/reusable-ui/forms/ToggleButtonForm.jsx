import { React, useState } from "react"
import { styled } from "styled-components"
import { theme } from "../../../theme"

export default function ToggleButtonForm({ label, name, onClick, icon }) {
  return (
    <ToggleButtonFormStyled onClick={onClick} id={name}>
      <div className="icon">{icon}</div>
      <div className="label">{label}</div>
    </ToggleButtonFormStyled>
  )
}
const ToggleButtonFormStyled = styled.label`
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  background-color: ${theme.colors.background_white};
  padding: 0px 16px;
  color: ${theme.colors.greyBlue};
  height: 35px;
  display: grid;
  grid-template-columns: 20% 80%;
  place-items: center;
  &:hover {
    background-color: ${theme.colors.greyLight};
  }
  &:active {
    background-color: ${theme.colors.greyMedium};
  }
  .icon {
    display: flex;
    font-size: ${theme.fonts.size.SM};
  }
  .label {
    font-size: ${theme.fonts.size.SM};
    color: ${theme.colors.greyBlue};
  }
`
