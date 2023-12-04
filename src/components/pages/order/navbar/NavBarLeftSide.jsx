import React, { useContext } from "react"
import Logo from "../../../reusable-ui/Logo"
import { styled } from "styled-components"
import { theme } from "../../../../theme"
import { reloadPage } from "../../../../utils/windows"
import OrderContext from "../../../../context/OrderContext"
import BasketButton from "./BasketButton"

export default function NavBarLeftSide() {
  //state

  //comportement
  const { windowWidth } = useContext(OrderContext)

  return (
    <NavBarLeftSideStyled className="left_side">
      <Logo
        className="logo_navbar"
        onClick={() => reloadPage()}
        version={windowWidth < 680 && "mobile"}
      />
      {windowWidth < 1380 && <BasketButton />}
    </NavBarLeftSideStyled>
  )
}

const NavBarLeftSideStyled = styled.div`
  flex-shrink: 0;
  background-color: ${theme.colors.white};
  display: flex;
  .logo_navbar {
    cursor: pointer;
  }
  .button {
    background: red;
  }
`
