import styled from "styled-components"
import { theme } from "../../../../theme"
import Basket from "./menu/Basket"
import Menu from "./menu/Menu"
import Pannel from "./pannel/Pannel"
import { useContext, useState } from "react"
import ActiveContext from "../../../../context/ActiveContext"
import OrderContext from "../../../../context/OrderContext"

export default function Main() {
  //state

  const [activeTab, setActiveTab] = useState(1)
  const [state, setState] = useState("opened")
  const contextStateValue = { State: state, setState: setState }
  const contextActiveTab = { activeTab, setActiveTab }
  const { isAdmin } = useContext(OrderContext)

  //comportement

  return (
    <MainStyled>
      {/* <Basket /> */}
      <div className="menu_and_pannel">
        <Menu />

        <ActiveContext.Provider value={contextActiveTab}>
          {isAdmin ? <Pannel /> : null}
        </ActiveContext.Provider>
      </div>
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  height: calc(95vh - 10vh);
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  display: grid;
  grid-template-columns: /*25%*/ 1fr;

  .user {
    display: none;
  }
  .admin {
    display: block;
  }
  .menu_and_pannel {
    position: relative;
    display: grid;
    overflow-y: hidden;
    scrollbar-width: none;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
  }
`
