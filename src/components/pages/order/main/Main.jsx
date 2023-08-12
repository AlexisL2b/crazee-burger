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
  /* background: ${theme.colors.background_white};
  box-shadow: 0px ${theme.spacing.xs} ${theme.spacing.md} ${theme.spacing.xs}
    rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;
  width: 1400px;
  height: 100vh;
  justify-items: start;
  align-items: start;
  display: grid;
  grid-template-columns: 25% 75%;
  overflow-y: scroll;
   */
  background: ${theme.colors.background_white};
  flex: 1; // or you can also use this : height: calc(95vh - 10vh);

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  display: grid;
  grid-template-columns: 1fr;

  overflow-y: scroll;
  scrollbar-width: none;
`
