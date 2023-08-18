import React, { useContext } from "react"
import PannelButton from "../../../../reusable-ui/PannelButton"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"
import { styled } from "styled-components"
import OrderContext from "../../../../../context/OrderContext"
import { theme } from "../../../../../theme"
import ActiveContext from "../../../../../context/ActiveContext"

export default function ButtonContainer() {
  //State

  //comportement

  const { isOpen, setIsOpen } = useContext(OrderContext)
  const { activeTab, setActiveTab } = useContext(ActiveContext)

  const panelButtonsConfig = [
    {
      label: "",
      className: !isOpen ? "state_button" : "",
      icons: isOpen ? <FiChevronDown /> : <FiChevronUp />,
      onClick: () => setIsOpen(!isOpen),
      isOpen: isOpen.toString(),
      id: null,
    },
    {
      label: "Ajouter un produit",
      className: activeTab === 1 ? "active" : "",
      icons: <AiOutlinePlus />,
      onClick: () => {
        setIsOpen(true)
        setActiveTab(1)
      },
      isOpen: null,
      id: 1,
    },
    {
      label: "Modifier un produit",
      className: activeTab === 2 ? "active" : "",
      icons: <MdModeEditOutline />,
      onClick: () => {
        setIsOpen(true)
        setActiveTab(2)
      },
      isOpen: null,
      id: 2,
    },
  ]

  return (
    <ButtonContainerStyled>
      {panelButtonsConfig.map((button) => {
        return (
          <PannelButton
            label={button.label}
            className={button.className}
            icons={button.icons}
            onClick={button.onClick}
            isOpen={button.isOpen}
            id={button.id}
          />
        )
      })}
    </ButtonContainerStyled>
  )
}
const ButtonContainerStyled = styled.div`
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
  .state_button {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
  }
`
