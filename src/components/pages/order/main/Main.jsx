import styled from "styled-components"
import { theme } from "../../../../theme"
import Basket from "./menu/Basket"
import Menu from "./menu/Menu"
import Pannel from "./pannel/Panel"
import { useContext, useRef, useState } from "react"
import OrderContext from "../../../../context/OrderContext"
import RefContext from "../../../../context/RefContext"

export default function Main() {
  //state

  // const [activeTab, setActiveTab] = useState("add")
  // const contextActiveTab = { activeTab, setActiveTab }
  const { isAdmin } = useContext(OrderContext)
  const inputRefTitle = useRef()
  //comportement

  return (
    <MainStyled>
      <RefContext.Provider value={inputRefTitle}>
        {/* <Basket /> */}
        <div className="menu_and_pannel">
          <Menu />

          {isAdmin ? <Pannel /> : null}
        </div>
      </RefContext.Provider>
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  height: calc(95vh - 10vh);
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.strong};
  display: grid;
  grid-template-columns: /*25%*/ 1fr;

  .user {
    display: none;
  }
  .admin {
    display: block;
  }
  .menu_and_pannel {
    width: 100%;
    position: relative;
    display: grid;
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
  }
`
