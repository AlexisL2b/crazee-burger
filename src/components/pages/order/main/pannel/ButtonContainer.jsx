import React, { useContext } from "react"
import StateButton from "./StateButton"
import PannelButton from "./PannelButton"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"
import { styled } from "styled-components"
import StateContext from "../../../../../context/StateContext"

export default function ButtonContainer() {
  //comportement

  const handleClickOpen = () => {
    setState("opened")
  }
  const { setState, State } = useContext(StateContext)

  return (
    <ButtonContainerStyled>
      <StateButton
        icons={State === "opened" ? <FiChevronDown /> : <FiChevronUp />}
      />
      <PannelButton
        labbel={"Ajouter un produit"}
        icons={<AiOutlinePlus />}
        className="other_button"
        id={1}
        onClick={() => handleClickOpen()}
      />
      <PannelButton
        labbel={"Modifier un produit"}
        icons={<MdModeEditOutline />}
        className="other_button"
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
`
