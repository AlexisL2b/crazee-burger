import React from "react"
import { css, styled } from "styled-components"
import { TransitionGroup, CSSTransition } from "react-transition-group"

export default function CasinoEffect({ count, className }) {
  return (
    <TransitionGroup component={CasinoEffectStyled}>
      <CSSTransition classNames={"count-animated"} timeout={500} key={count}>
        <span className={className}>{count}</span>
      </CSSTransition>
    </TransitionGroup>
  )
}

const CasinoEffectStyled = styled.div`
  position: relative;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  span {
    display: inline-block;
  }
  .count-animated-enter {
    transform: translateY(200%);
  }
  .count-animated-enter-active {
    transform: translateY(0%);
    transition: 0.2s;
  }

  .count-animated-exit {
    transform: translateY(0%);
    position: absolute;
    filter: blur(1px);

    bottom: 0;
    right: 0;
  }
  .count-animated-exit-active {
    transform: translateY(-150%);
    transition: 0.2s;
  }
`
