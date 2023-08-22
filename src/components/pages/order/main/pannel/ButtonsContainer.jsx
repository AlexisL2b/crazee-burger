import React, { useContext } from "react"
import PannelButton from "../../../../reusable-ui/PannelButton"

import { styled } from "styled-components"
import OrderContext from "../../../../../context/OrderContext"
import { theme } from "../../../../../theme"
import ActiveContext from "../../../../../context/ActiveContext"
import { getPanelButtonsConfig } from "./panelButtonConfig"

export default function ButtonsContainer() {
  //State

  //comportement

  const { isOpen, setIsOpen } = useContext(OrderContext)
  const { activeTab, setActiveTab } = useContext(ActiveContext)
  const buttons = getPanelButtonsConfig(isOpen)

  const onClick = (selectButton) => {
    if (selectButton != "chevron") {
      setIsOpen(true)
      setActiveTab(selectButton)
    } else {
      setIsOpen(!isOpen)
      console.log(isOpen)
    }
  }
  return (
    <ButtonsContainerStyled>
      {buttons.map((button) => (
        <PannelButton
          label={button.label}
          className={
            button.className
              ? button.className
              : activeTab === button.index
              ? "active"
              : "inactive"
          }
          icons={button.icons}
          onClick={() => onClick(button.index)}
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
    color: ${theme.colors.greyDark};
  }

  .closed {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }
`
