import styled from "styled-components"
import { theme } from "../../../../theme"
import NavBarLeftSide from "./NavBarLeftSide"
import NavBarRightSide from "./NavBarRightSide"

export default function Navbar() {
  return (
    <NavBarStyled>
      <NavBarLeftSide />
      <NavBarRightSide />
    </NavBarStyled>
  )
}

const NavBarStyled = styled.div`
  width: 1400px;
  display: flex;
  border-radius: ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound} 0px 0px;
  background: ${theme.colors.white};
  height: auto;
  padding: 0px 70px 0px ${theme.spacing.md};
  align-items: center;
`
