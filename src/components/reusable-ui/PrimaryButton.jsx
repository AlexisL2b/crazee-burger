export default function PrimaryButton({
  label,
  Icon,
  className,
  version,
  onClick,
  disabled,
}) {
  return (
    <PrimaryButtonStyled
      className={className}
      version={version}
      onClick={onClick}
      disabled={disabled}
    >
      {label} <div className="icon">{Icon && Icon} </div>
    </PrimaryButtonStyled>
  )
}

import styled, { css } from "styled-components"
import { theme } from "../../theme"

const PrimaryButtonStyled = styled.button`
  border: none;
  display: flex;
  padding: ${theme.gridUnit * 2}px 0px;
  border-radius: ${theme.borderRadius.round};
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  /* flex-shrink: 0; */
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  transition: background-color 0.3s ease;
  font-size: 13px;
  font-weight: ${theme.fonts.weights.bold};
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
  }
  &:active {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
  &:disabled {
    opacity: 50%;
    cursor: not-allowed;
    z-index: 2;
  }
  ${({ version }) => extraStyle[version]}/* @media (max-width: 1080px) {
    font-size: 13px;
    padding: 6px 13px;
  }

  @media (max-width: 375px) {
    font-size: ${theme.fonts.size.XS};
    padding: 12px 26px;
  } */
`

const success = css`
  padding: 8px 16px 8px 16px;
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

const longPrimary = css`
  .icon {
    font-size: ${theme.fonts.size.P2};
    font-weight: ${theme.fonts.weights.bold};
    margin-left: 8px;
    margin-top: 4px;
  }
`

const extraStyle = {
  success,
  smallPrimary,
  smallSecondary,
  longPrimary,
}
