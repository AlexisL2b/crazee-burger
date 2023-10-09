import React from "react"
import { TiDelete } from "react-icons/ti"
import { css, styled } from "styled-components"
import { theme } from "../../../theme"
import { TransitionGroup, CSSTransition } from "react-transition-group"

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

  &:hover {
    color: ${theme.colors.red};
  }
  &:active {
    color: ${theme.colors.primary};
  }

  .delete-animated-appear {
    opacity: 0%;
    transform: translateX(100%);
  }
  .delete-animated-appear-active {
    transition: 0.5s;
    opacity: 100%;
    transform: translateX(-30%);
  }
  .delete-animated-appear-done {
    transition: 0.3s;
    transform: scale(1);
  }
  .delete-animated-exit {
    transform: translateX(0%);
  }
  .delete-animated-exit-active {
    transition: 0.3s;
    transform: scale(1.5);
  }
  .delete-animated-exit-done {
    transition: 0.3s;
    transform: scale(1);
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
