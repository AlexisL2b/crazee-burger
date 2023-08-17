import React, { useContext } from "react"
import { styled } from "styled-components"
import PannelButton from "./PannelButton"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"
import Tab from "./Tab"
import Context from "../../../../../context/Context"
import StateButton from "./StateButton"
import StateContext from "../../../../../context/StateContext"

export default function Pannel() {
  //State
  const { Role } = useContext(Context)
  const { setState, State } = useContext(StateContext)

  const handleClickOpen = () => {
    setState("opened")
  }

  //Comportement

  return (
    <PannelStyled className={`${Role} ${State}`}>
      <div className="button-container">
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
      </div>
      {State === "opened" ? <Tab className={State} /> : null}
    </PannelStyled>
  )
}
const PannelStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column; // pour s'assurer que les enfants sont empilés verticalement
  justify-content: flex-start; // position par défaut

  &.closed {
    justify-content: flex-end;
  }
  .button-container {
    position: static;
    padding: 0px 70px;
    display: flex;
  }

  .other_button {
    i {
      margin-right: 10px;
    }
  }

  .active {
    background-color: black;
    color: white;
  }
  .inactive {
    background-color: white;
  }
`
