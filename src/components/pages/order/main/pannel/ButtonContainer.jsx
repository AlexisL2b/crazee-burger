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

  const handleClickOpen = () => {
    setIsOpen(true)
  }
  const handleClickState = () => {
    if (isOpen) {
      setIsOpen(!isOpen)
    } else {
      setIsOpen(!isOpen)
    }
    console.log(isOpen)
  }

  const { isOpen, setIsOpen } = useContext(OrderContext)
  const { activeTab, setActiveTab } = useContext(ActiveContext)

  // const isActive = activeTab === id
  // const classActive = ` ${isActive ? "active" : ""} `
  const classOpen = `${!isOpen ? "state_button" : ""}`

  return (
    <ButtonContainerStyled>
      <PannelButton
        className={classOpen}
        icons={isOpen ? <FiChevronDown /> : <FiChevronUp />}
        onClick={() => handleClickState()}
        isOpen={isOpen.toString()}
      />
      <PannelButton
        className={activeTab === 1 ? "active" : ""}
        label={"Ajouter un produit"}
        icons={<AiOutlinePlus />}
        id={1}
        onClick={() => {
          handleClickOpen()
        }}
        setActiveTab={setActiveTab}
      />
      <PannelButton
        className={activeTab === 2 ? "active" : ""}
        label={"Modifier un produit"}
        icons={<MdModeEditOutline />}
        id={2}
        onClick={() => {
          handleClickOpen()
        }}
        setActiveTab={setActiveTab}
      />
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
