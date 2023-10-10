import { React, useState } from "react"
import { styled } from "styled-components"

export default function ToggleButtonForm({ label, name, version, onClick }) {
  return (
    <ToggleButtonFormStyled onClick={onClick} version={version} id={name}>
      {label}
    </ToggleButtonFormStyled>
  )
}
const ToggleButtonFormStyled = styled.label`
  border: solid black 1px;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`
