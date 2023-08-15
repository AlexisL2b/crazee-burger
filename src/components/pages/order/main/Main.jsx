import styled from "styled-components"
import { theme } from "../../../../theme"
import Basket from "./menu/Basket"
import Menu from "./menu/Menu"
import Pannel from "./pannel/Pannel"

export default function Main() {
  //state

  //comportement

  return (
    <MainStyled>
      <Basket />
      <Menu />
      <Pannel />
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  flex: 1; // or you can also use this : height: calc(95vh - 10vh);

  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  display: grid;
  grid-template-columns: 1fr;

  overflow-y: scroll;
  scrollbar-width: none;
  .user {
    display: none;
  }
  .admin {
    display: block;
  }
`
