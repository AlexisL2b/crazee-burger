export default function PrimaryButton({ label, Icon, className }) {
  return (
    <PrimaryButtonStyled className={className}>
      {label} {Icon && Icon}
    </PrimaryButtonStyled>
  )
}

import styled from "styled-components"
import { theme } from "../../theme"

const PrimaryButtonStyled = styled.button`
  font-size: ${theme.fonts.P0};
  border: none;
  display: flex;
  padding: ${theme.gridUnit * 2}px 0px;
  border-radius: ${theme.borderRadius.round};
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
