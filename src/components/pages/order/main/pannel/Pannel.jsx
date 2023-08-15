import React from "react"
import { styled } from "styled-components"
import PannelButton from "./PannelButton"

export default function Pannel() {
  return (
    <PannelStyled>
      <div className="button-container">
        <PannelButton />
        <PannelButton />
        <PannelButton />
      </div>
      <div className="pannel-table">PannelTab</div>
    </PannelStyled>
  )
}
const PannelStyled = styled.div`
  border: 1px solid red;
  position: absolute;
  top: 700px;
  width: 1400px;
  .button-container {
    background: blue;
  }
  .pannel-table {
    background: pink;
    height: 250px;
    width: 100%;
  }
`
