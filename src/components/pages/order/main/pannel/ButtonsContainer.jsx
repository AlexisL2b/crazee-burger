import React, { useContext } from "react"
import PannelButton from "../../../../reusable-ui/PannelButton"

import { styled } from "styled-components"
import OrderContext from "../../../../../context/OrderContext"
import { theme } from "../../../../../theme"
import { getPanelButtonsConfig } from "./panelButtonConfig"

export default function ButtonsContainer() {
  //State

  //comportement

  const { isOpen, activeTab, setIsOpen, setActiveTab } =
    useContext(OrderContext)
  const buttons = getPanelButtonsConfig(isOpen)
  const handleSelectedTab = (selectedTab) => {
    if (selectedTab != "chevron") {
      setIsOpen(true)
      setActiveTab(selectedTab)
    } else {
      setIsOpen(!isOpen)
    }
    //replace
  }
  return (
    <ButtonsContainerStyled>
      {buttons.map((button) => (
        <PannelButton
          key={button.index}
          label={button.label}
          className={
            button.className
              ? button.className
              : activeTab === button.index
              ? "active"
              : "inactive"
          }
          icons={button.icons}
          onClick={() => handleSelectedTab(button.index)}
          isOpen={button.isOpen}
        />
      ))}
    </ButtonsContainerStyled>
  )
}

const ButtonsContainerStyled = styled.div`
  position: relative;
  left: 5%;
  display: flex;
  top: 1px;
  .active {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border: solid 1px ${theme.colors.background_dark};
    border-bottom: 2px solid ${theme.colors.background_dark};
  }

  button {
    margin-left: 1px;
  }
  .inactive:hover {
    text-decoration: underline;
    color: ${theme.colors.greySemiDark};
  }

  .closed {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }
`
