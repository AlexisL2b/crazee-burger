import React from "react"
import { styled } from "styled-components"
import { theme } from "../../../../../theme"

export default function PannelButton({ labbel, icons, className }) {
  return (
    <PannelButtonStyled className={className}>
      <i>{icons}</i>
      {labbel && labbel}
    </PannelButtonStyled>
  )
}

const PannelButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 22px 10px 22px;
  border-top: 1px solid #e4e5e9;
  border-right: 1px solid #e4e5e9;
  border-left: 1px solid #e4e5e9;
  border-bottom: 2px solid #e4e5e9;
  background-color: white;
  color: ${theme.colors.greyDark};
  border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0px 0px;
  box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);

  cursor: pointer;
  &:hover {
    border-bottom: 2px solid white;
  }
`
