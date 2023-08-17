import React, { useContext } from "react"
import { styled } from "styled-components"
import Tab from "./Tab"
import Context from "../../../../../context/Context"
import StateContext from "../../../../../context/StateContext"
import { theme } from "../../../../../theme"
import ButtonContainer from "./ButtonContainer"

export default function Pannel() {
  //State
  const { Role } = useContext(Context)
  const { State } = useContext(StateContext)

  //Comportement

  return (
    <PannelStyled className={`${Role} ${State}`}>
      <ButtonContainer />
      {State === "opened" && <Tab className={State} />}
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
