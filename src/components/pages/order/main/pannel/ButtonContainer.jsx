import React, { useContext } from "react"
import StateButton from "./StateButton"
import PannelButton from "./PannelButton"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"
import { styled } from "styled-components"
import OrderContext from "../../../../../context/OrderContext"
import { theme } from "../../../../../theme"

export default function ButtonContainer() {
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

  return (
    <ButtonContainerStyled>
      <PannelButton
        className={!isOpen ? "state_button" : ""}
        icons={isOpen ? <FiChevronDown /> : <FiChevronUp />}
        onClick={() => handleClickState()}
        isOpen={isOpen.toString}
      />
      <PannelButton
        label={"Ajouter un produit"}
        icons={<AiOutlinePlus />}
        id={1}
        onClick={() => handleClickOpen()}
      />
      <PannelButton
        label={"Modifier un produit"}
        icons={<MdModeEditOutline />}
        id={2}
        onClick={() => handleClickOpen()}
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
