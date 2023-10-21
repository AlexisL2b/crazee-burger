import React from "react"
import { TiDelete } from "react-icons/ti"
import { css, styled } from "styled-components"
import { theme } from "../../../theme"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { animations } from "../../../theme/animations"

export default function DeleteButton({ onClick, version = "primaryStyled" }) {
  return (
    <TransitionGroup
      component={DeleteButtonStyled}
      onClick={onClick}
      version={version}
    >
      <CSSTransition
        appear={true}
        classNames={"delete-animated"}
        timeout={{ enter: 500, exit: 500 }}
      >
        <TiDelete />
      </CSSTransition>
    </TransitionGroup>
  )
}

const DeleteButtonStyled = styled.div`
  position: absolute;
  font-size: 30px;
  right: 10px;
  top: 10px;
  cursor: pointer;
  z-index: 2;

  &:hover {
    color: ${theme.colors.red};
  }
  &:active {
    color: ${theme.colors.primary};
  }

  ${animations.deleteButton}

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
