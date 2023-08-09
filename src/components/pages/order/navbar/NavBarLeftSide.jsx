import React from "react"
import Logo from "../../../reusable-ui/Logo"
import { styled } from "styled-components"
import { theme } from "../../../../theme"

export default function NavBarLeftSide() {
  //state

  //comportement

  const reload = () => {
    location.reload()
  }
  return (
    <NavBarLeftSideStyled className="left_side">
      <Logo className="logo_navbar" onClick={reload} />
    </NavBarLeftSideStyled>
  )
}

const NavBarLeftSideStyled = styled.div`
  flex-shrink: 0;
  background-color: ${theme.colors.white};
  .logo_navbar {
    cursor: pointer;
  }
`
