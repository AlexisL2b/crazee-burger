import React, { useContext } from "react"
import { styled } from "styled-components"
import { theme } from "../../../../../theme"
import OrderContext from "../../../../../context/OrderContext"
import { getPanelButtonsConfig } from "./panelButtonConfig"

export default function Tab() {
  //State

  //comportement

  const { isOpen, activeTab, selectedCardId } = useContext(OrderContext)
  const buttons = getPanelButtonsConfig(activeTab, isOpen, selectedCardId)
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
