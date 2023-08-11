import styled from "styled-components"
import { theme } from "../../../../theme"
import { fakeMenu2 } from "../../../fakeData/fakeMenu"
import Basket from "./menu/Basket"
import Menu from "./menu/Menu"

export default function Main() {
  //state

  //comportement

  return (
    <MainStyled>
      <Basket />
      <Menu />
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: 0px ${theme.spacing.xs} ${theme.spacing.md} ${theme.spacing.xs}
    rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;
  width: 1400px;
  height: 100vh;
  justify-content: start;
  align-items: start;
  display: flex;
  /*display:grid
    grid-template-columns: 25% 75%*/
  overflow-y: scroll;
  scrollbar-width: none;
`
