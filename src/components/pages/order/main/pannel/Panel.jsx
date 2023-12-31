import React, { useContext } from "react"
import styled from "styled-components" // Corrected this line
import { CSSTransition } from "react-transition-group"
import Tab from "./Tab"
import ButtonsContainer from "./ButtonsContainer"
import OrderContext from "../../../../../context/OrderContext"

export default function Pannel({ className }) {
  const { isOpen, isAdmin } = useContext(OrderContext)

  return (
    <PanelStyled className={className}>
      <ButtonsContainer />
      {isOpen ? <Tab /> : null}
    </PanelStyled>
  )
}

const PanelStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
`

//@TODO Revoir le style des inputs dans les  différents form (taille)
