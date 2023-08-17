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
  const { isOpen, setIsOpen } = useContext(OrderContext)

  return (
    <ButtonContainerStyled>
      <StateButton icons={isOpen ? <FiChevronDown /> : <FiChevronUp />} />
      <PannelButton
        labbel={"Ajouter un produit"}
        icons={<AiOutlinePlus />}
        id={1}
        onClick={() => handleClickOpen()}
      />
      <PannelButton
        labbel={"Modifier un produit"}
        icons={<MdModeEditOutline />}
        id={2}
        onClick={() => handleClickOpen()}
      />
    </ButtonContainerStyled>
  )
}
const ButtonContainerStyled = styled.div`
  position: static;
  padding: 0px 70px;
  display: flex;
  .active {
    background-color: ${theme.colors.dark};
    color: ${theme.colors.greyLight};
  }
  .inactive {
    background-color: ${theme.colors.greyLight};
  }
`
