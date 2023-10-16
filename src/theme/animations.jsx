import { css, keyframes } from "styled-components"

const fadeIn = keyframes`
0%{
  opacity: 0;
}
100%{
  opacity: 1;
}`
const fadeInFromTop = keyframes`
0%{
  opacity: 0;
  position: absolute;
  z-index: 1;
  transform: translateY(-40%);
}
100%{
  opacity: 1;
  transform: translateY(0%);
}`

const pannel = css`
  .pannel-appear {
    opacity: 0%;
    transform: translateY(100%);
  }
  .pannel-appear-active {
    opacity: 100%;

    transform: translateY(0%);
    transition: 0.4s;
  }
`
const basketCard = css`
  .cards-appear {
    transform: translateX(100px);
    opacity: 0%;
  }
  .cards-appear-active {
    transition: 0.5s;
    transform: translateX(0px);
    opacity: 100%;
  }
  .cards-enter {
    transform: translateX(100px);
    opacity: 0%;
  }
  .cards-enter-active {
    transition: 0.5s;
    transform: translateX(0px);
    opacity: 100%;
  }
  .cards-exit {
    transform: translateX(0px);
    opacity: 100%;
  }
  .cards-exit-active {
    transition: 0.5s;
    transform: translateX(-100px);
    opacity: 0%;
  }
`
const menuCard = css`
  .cards_menu-appear {
    transform: translateX(100px);
    opacity: 0%;
  }
  .cards_menu-appear-active {
    transition: 0.3s;
    transform: translateX(0px);
    opacity: 100%;
  }
  .cards_menu-enter {
    transform: translateX(100px);
    opacity: 0%;
  }
  .cards_menu-enter-active {
    transition: 0.3s;
    transform: translateX(0px);
    opacity: 100%;
  }
  .cards_menu-exit {
    opacity: 100%;
  }
  .cards_menu-exit-active {
    transition: 0.3s;

    opacity: 0%;
  }
`
const deleteButton = css`
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
`

export const animations = {
  pannel,
  basketCard,
  menuCard,
  deleteButton,
  fadeIn,
  fadeInFromTop,
}
