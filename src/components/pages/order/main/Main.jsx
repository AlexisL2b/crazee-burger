import styled from "styled-components"
import { theme } from "../../../../theme"
import Basket from "./menu/Basket"
import Menu from "./menu/Menu"
import Pannel from "./pannel/Pannel"
import { useState } from "react"
import ActiveContext from "../../../../context/ActiveContext"

export default function Main() {
  //state
  const [activeTab, setActiveTab] = useState(1)

  //comportement

  return (
    <MainStyled>
      <Basket />
      <Menu />

      <div className="pannel">
        <ActiveContext.Provider value={{ activeTab, setActiveTab }}>
          <Pannel />
        </ActiveContext.Provider>
      </div>
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
  .pannel {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`
