import React, { useContext } from "react"
import { styled } from "styled-components"
import Tab from "./Tab"
import ButtonContainer from "./ButtonContainer"
import OrderContext from "../../../../../context/OrderContext"

export default function Pannel() {
  //State
  const { isAdmin, isOpen } = useContext(OrderContext)
  //Comportement

  return (
    <PannelStyled>
      <ButtonContainer />
      {isOpen && <Tab />}
    </PannelStyled>
  )
}
const PannelStyled = styled.div`
  justify-content: flex-start; // position par défaut
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  &.closed {
    align-items: flex-end;
  }
`
