import React from "react"
import { TiDelete } from "react-icons/ti"
import { styled } from "styled-components"
import { theme } from "../../../theme"
export default function DeleteButton({ onClick }) {
  return (
    <DeleteButtonStyled onClick={onClick}>
      <TiDelete />
    </DeleteButtonStyled>
  )
}

const DeleteButtonStyled = styled.div`
  position: absolute;
  font-size: 30px;
  right: 0;
  color: ${theme.colors.primary};
  cursor: pointer;

  &:hover {
    color: ${theme.colors.red};
  }
  &:active {
    color: ${theme.colors.primary};
  }
`
