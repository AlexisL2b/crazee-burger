import styled, { css } from "styled-components"
import { theme } from "../../../../theme"
import NavBarLeftSide from "./NavBarLeftSide"
import NavBarRightSide from "./NavBarRightSide"

export default function Navbar({ version }) {
  return (
    <NavBarStyled version={version}>
      <NavBarLeftSide />
      <NavBarRightSide />
    </NavBarStyled>
  )
}

const NavBarStyled = styled.div`
  min-width: 326px;
  display: flex;
  border-radius: ${theme.borderRadius.extraRound}
    ${theme.borderRadius.extraRound} 0px 0px;
  background: ${theme.colors.white};
  height: auto;
  padding: 0px 70px 0px ${theme.spacing.md};
  align-items: center;
  ${({ version }) => extraStyle[version]}
`
const mobile = css`
  padding: 8px;
`

const extraStyle = {
  mobile,
}
