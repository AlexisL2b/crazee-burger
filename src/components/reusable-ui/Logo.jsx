import React, { Component } from "react"
import styled from "styled-components"
import { theme } from "../../theme"
// import "../../theme/fonts.css"

export default function Logo({ className }) {
  {
    return (
      <LogoStyled className={className}>
        <h1>CRAZEE</h1>

        <img src="\assets\F03 logo-orange.png" alt="" />

        <h1>BURGER</h1>
      </LogoStyled>
    )
  }
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  h1 {
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.P4};
    line-height: 1em;
    font-weight: ${theme.weights.bold};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px; // for Safari and Firefox
    margin: 0 ${theme.gridUnit / 2}px;
  }
`
