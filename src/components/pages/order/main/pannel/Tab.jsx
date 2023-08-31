import React, { useContext } from "react"
import { styled } from "styled-components"
import { theme } from "../../../../../theme"
import ActiveContext from "../../../../../context/ActiveContext"
import OrderContext from "../../../../../context/OrderContext"
import { getPanelButtonsConfig } from "./panelButtonConfig"

export default function Tab() {
  //State

  //comportement

  const { isOpen, setIsOpen } = useContext(OrderContext)
  const { activeTab, setActiveTab } = useContext(ActiveContext)
  const buttons = getPanelButtonsConfig(
    activeTab,
    setActiveTab,
    setIsOpen,
    isOpen
  )
  const buttonSelected = buttons.find((button) => button.index === activeTab)

  return <TabStyled>{buttonSelected.content}</TabStyled>
}
const TabStyled = styled.div`
  padding: 30px 5%;
  height: 240px;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.subtle};
  border: 1px solid #e4e5e9;
  background-color: white;
  box-sizing: border-box;
`
