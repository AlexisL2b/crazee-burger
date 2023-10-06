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
      <div className="icon">{icon && icon}</div>
      <span>{label}</span>
    </MessageStyled>
  )
}

const MessageStyled = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  white-space: nowrap;

  .icon {
    position: relative;
    top: 3px;
    margin-right: 10px;
  }

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
  display: flex;
  color: ${theme.colors.success};
  font-family: ${theme.fontsFamily.open};
  line-height: 30px;
  font-size: ${theme.fonts.size.SM};
  font-weight: ${theme.fonts.weights.regular};
`
const basket = css`
  font-family: ${theme.fontsFamily.amatic};
  line-height: 72px;
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.regular};
  margin: auto;
`
const update = css`
  color: ${theme.colors.blue};
  font-family: ${theme.fontsFamily.open};
  line-height: 30px;
  font-size: ${theme.fonts.size.SM};
  font-weight: ${theme.fonts.weights.regular};
`
const extraStyle = {
  success,
  regularSecondaryStyled,
  smallPrimary,
  basket,
  update,
}
