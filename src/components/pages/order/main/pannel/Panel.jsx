import React, { useContext } from "react"
import styled from "styled-components" // Corrected this line
import { CSSTransition } from "react-transition-group"
import Tab from "./Tab"
import ButtonsContainer from "./ButtonsContainer"
import OrderContext from "../../../../../context/OrderContext"

export default function Pannel() {
  const { isOpen, isAdmin } = useContext(OrderContext)

  return (
    <PanelStyled>
      <CSSTransition
        appear={true}
        in={true} // since ButtonsContainer always exists
        timeout={{ enter: 0, exit: 0 }} // Match this with your transition time
        classNames="button-container-animated"
        unmountOnExit
      >
        <ButtonsContainer />
      </CSSTransition>
      <CSSTransition
        appear={true}
        in={isOpen}
        timeout={{ enter: 500, exit: 0 }} // Match this with your transition time
        classNames="tab-animated"
        unmountOnExit
      >
        <Tab />
      </CSSTransition>
    </PanelStyled>
  )
}

const PanelStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  //TAB
  .tab-animated-appear {
    opacity: 0%;
    transform: translateY(100%);
  }
  .tab-animated-appear-active {
    opacity: 100%;

    transform: translateY(0%);
    transition: 0.4s;
  }
  //BUTTON
  .button-container-animated-appear {
    transform: translateY(430%);
    opacity: 0%;
  }
  .button-container-animated-appear-done {
    transform: translateY(0%);
    opacity: 100%;
    transition: 0.4s;
  }
`
