import React, { useContext } from "react"
import { styled } from "styled-components"
import PannelButton from "./PannelButton"
import { FiChevronDown } from "react-icons/fi"
import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"
import { theme } from "../../../../../theme"
import Tab from "./Tab"
import Context from "../../../../../context/Context"
import StateButton from "./StateButton"
import StateContext from "../../../../../context/StateContext"

export default function Pannel() {
  //State
  const { Role } = useContext(Context)
  const { State } = useContext(StateContext)

  //Comportement

  return (
    <PannelStyled className={Role}>
      <div className="button-container">
        <StateButton icons={<FiChevronDown />} />
        <PannelButton
          labbel={"Ajouter un produit"}
          icons={<AiOutlinePlus />}
          className="other_button"
          onClick={() => {
            console.log("clic")
          }}
        />
        <PannelButton
          labbel={"Modifier un produit"}
          icons={<MdModeEditOutline />}
          className="other_button"
          onClick={() => {
            console.log("clic")
          }}
        />
      </div>
      <div className={`pannel-table ${State}`}>
        <Tab />
      </div>
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
  .pannel-table {
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);
    border: 1px solid #e4e5e9;
    background-color: white;
    height: 250px;
    width: 100%;
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
`
