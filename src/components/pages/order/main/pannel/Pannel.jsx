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
    <PannelStyled className={Role}>
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
      <Tab className={State} />
    </PannelStyled>
  )
}
const PannelStyled = styled.div`
  top: 700px;
  width: 1400px;

  .button-container {
    padding: 0px 70px;
    display: flex;
  }

  .other_button {
    i {
      margin-right: 10px;
    }
  }
  .opened {
    display: block;
  }
  .closed {
    display: none;
  }
  .active {
    background-color: black;
    color: white;
  }
  .inactive {
    background-color: #e4e5e9;
  }
`
