import React, { useContext } from "react"
import { styled } from "styled-components"
import Tab from "./Tab"
import ButtonsContainer from "./ButtonsContainer"
import OrderContext from "../../../../../context/OrderContext"

export default function Pannel() {
  //State

  //Comportement

  const { isOpen } = useContext(OrderContext)

  return (
    <PanelStyled>
      <ButtonsContainer />
      {isOpen && <Tab />}
    </PanelStyled>
  )
}
const PanelStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`
