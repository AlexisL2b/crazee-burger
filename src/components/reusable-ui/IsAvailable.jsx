import React from "react"
import { styled } from "styled-components"

export default function IsAvailable() {
  return (
    <IsAvailableStyled>
      <img src="\assets\stock-epuise.png" alt="" className="available" />
    </IsAvailableStyled>
  )
}
const IsAvailableStyled = styled.div`
  position: absolute;
  top: 20%;
`
