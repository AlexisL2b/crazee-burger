export default function PrimaryButton({
  label,
  Icon,
  className,
  version,
  onClick,
}) {
  return (
    <PrimaryButtonStyled
      className={className}
      version={version}
      onClick={onClick}
    >
      {label} {Icon && Icon}
    </PrimaryButtonStyled>
  )
}

import styled, { css } from "styled-components"
import { theme } from "../../theme"

const PrimaryButtonStyled = styled.button`
  font-size: ${theme.fonts.P0};
  border: none;
  display: flex;
  padding: ${theme.gridUnit * 2}px 0px;
  border-radius: ${theme.borderRadius.round};
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
  }
  &:active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
  ${({ version }) => extraStyle[version]}
`

const success = css`
  width: 50%;
  padding: 8px 16px 8px 24px;
  border: solid 2px ${theme.colors.green};
  background-color: ${theme.colors.green};
  &:hover {
    color: ${theme.colors.green};
    background-color: ${theme.colors.white};
  }
`
const smallPrimary = css`
  font-size: ${theme.fonts.size.XS};
  padding: 12px 26px;
`
const smallSecondary = css`
  font-size: ${theme.fonts.size.XS};
  padding: 12px 26px;
  background-color: ${theme.colors.white};
  color: ${theme.colors.primary};
`

const extraStyle = {
  success,
  smallPrimary,
  smallSecondary,
}
