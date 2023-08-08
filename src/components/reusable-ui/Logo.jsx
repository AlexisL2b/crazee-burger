import React, { Component } from "react"
import styled from "styled-components"
import { theme } from "../../theme"
// import "../../theme/fonts.css"

export default class Logo extends Component {
  render() {
    return (
      <TitleLogoStyled>
        <h1>CRAZEE</h1>

        <img src="public\assets\F03 logo-orange.png" alt="" />

        <h1>BURGER</h1>
      </TitleLogoStyled>
    )
  }
}

const TitleLogoStyled = styled.div`
  display: flex;
  align-items: center;

  h1 {
    color: ${theme.colors.primary};
    font-size: 110px;
    font-family: ${theme.fontsFamily.amatic};
  }
  img {
    width: 200px;
    height: 150px;
  }
`
