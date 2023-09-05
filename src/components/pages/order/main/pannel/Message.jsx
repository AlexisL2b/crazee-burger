import React from "react"
import { css, styled } from "styled-components"
import { theme } from "../../../../../theme"
export default function Message({
  label,
  icon,
  version = "regularSecondaryStyled",
  className,
}) {
  return (
    <MessageStyled version={version} className={className}>
      <span>
        {label}

        {icon && icon}
      </span>
    </MessageStyled>
  )
}

const MessageStyled = styled.span`
  height: 30px;
  ${({ version }) => extraStyle[version]}
`

const smallPrimary = css`
  font-size: ${theme.fonts.size.SM};
  color: ${theme.colors.primary};
  font-family: ${theme.fontsFamily.open};
  font-weight: ${theme.fonts.weights.regular};
`

const regularSecondaryStyled = css`
  color: ${theme.colors.greyBlue};
  font-family: ${theme.fontsFamily.amatic};
  line-height: 30px;
  font-size: ${theme.fonts.size.P3};
  font-weight: ${theme.fonts.weights.regular};
`
const success = css`
  color: ${theme.colors.success};
  font-family: ${theme.fontsFamily.open};
  line-height: 30px;
  font-size: ${theme.fonts.size.SM};
  font-weight: ${theme.fonts.weights.regular};
`
const extraStyle = { success, regularSecondaryStyled, smallPrimary }
