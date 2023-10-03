import React from "react"
import { TiDelete } from "react-icons/ti"
import { css, styled } from "styled-components"
import { theme } from "../../../theme"
export default function DeleteButton({ onClick, version = "primaryStyled" }) {
  return (
    <DeleteButtonStyled onClick={onClick} version={version}>
      <TiDelete />
    </DeleteButtonStyled>
  )
}

const DeleteButtonStyled = styled.div`
  position: absolute;
  font-size: 30px;
  right: 10px;
  top: 10px;
  cursor: pointer;

  &:hover {
    color: ${theme.colors.red};
  }
  &:active {
    color: ${theme.colors.primary};
  }

  ${({ version }) => extraStyle[version]}
`

const primaryStyled = css`
  color: ${theme.colors.primary};
`
const secondaryStyled = css`
  color: ${theme.colors.white};
`
const extraStyle = {
  primaryStyled,
  secondaryStyled,
}
