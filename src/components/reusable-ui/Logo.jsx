import React, { Component, useContext } from "react"
import styled, { css } from "styled-components"
import { theme } from "../../theme"
import OrderContext from "../../context/OrderContext"

export default function Logo({ className, onClick, version }) {
  //state
  const { windowWidth } = useContext(OrderContext)
  //comportement

  {
    return (
      <LogoStyled className={className} onClick={onClick} version={version}>
        {windowWidth > 770 ? <h1>CRAZEE</h1> : null}

        <img src="\assets\F03 logo-orange.png" alt="" />
        {windowWidth > 770 ? <h1>BURGER</h1> : null}
      </LogoStyled>
    )
  }
}

const LogoStyled = styled.div`
  display: flex;
  place-items: center;
  padding: 19px;
  h1 {
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P4};
    line-height: 1em;
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC";
    font-weight: ${theme.fonts.weights.bold};
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px; // for Safari and Firefox
    margin: 0 ${theme.gridUnit / 2}px;
  }
  ${({ version }) => extraStyle[version]}
`

const mobile = css`
  padding: 0;
  img {
    height: 42px;
    width: 54px;
    margin: 0;
  }
`
const extraStyle = {
  mobile,
}
