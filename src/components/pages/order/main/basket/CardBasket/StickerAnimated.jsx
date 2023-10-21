import React from "react"
import { CSSTransition } from "react-transition-group"
import Sticker from "./Sticker"
import { css } from "styled-components"

export default function StickerAnimated() {
  return (
    <CSSTransition
      in={true}
      timeout={500}
      appear={true}
      classNames={"sticker-animation"}
    >
      <Sticker className={"sticker"} label="new" />
    </CSSTransition>
  )
}
export const stickerAnimation = css`
  .sticker-animation-appear {
    position: absolute;
    opacity: 0.1;
    transform: scale(1.8);
    &.sticker-animation-appear-active {
      transition: ease-out 500ms;
      opacity: 1;
      transform: scale(1);
    }
  }
  .sticker-animation-exit {
    position: absolute;
    opacity: 1;
    transition: 1000ms;
    &.sticker-animation-exit-active {
      opacity: 0.1;
      transform: scale(1.5);
    }
  }
`
