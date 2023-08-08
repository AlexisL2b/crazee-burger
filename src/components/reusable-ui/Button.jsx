import React from "react"

export default function Button({ label, Icon }) {
  return (
    <ButtonStyled>
      {label} {Icon}
    </ButtonStyled>
  )
}

import styled from "styled-components"
import { theme } from "../../theme"

const ButtonStyled = styled.button`
  font-size: 15px;
  border: none;
  display: flex;
  padding: 16px 0px;
  border-radius: 5px;
  border: none;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  &:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
  }
  &:active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`
