import React from "react"
import { styled } from "styled-components"
import PannelButton from "./PannelButton"
import { FiChevronDown } from "react-icons/fi"
import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"
import { theme } from "../../../../../theme"

export default function Pannel() {
  return (
    <PannelStyled>
      <div className="button-container">
        <PannelButton icons={<FiChevronDown />} className="chevron_button" />
        <PannelButton
          labbel={"Ajouter un produit"}
          icons={<AiOutlinePlus />}
          className="other_button"
        />
        <PannelButton
          labbel={"Modifier un produit"}
          icons={<MdModeEditOutline />}
          className="other_button"
        />
      </div>
      <div className="pannel-table">PannelTab</div>
    </PannelStyled>
  )
}
const PannelStyled = styled.div`
  position: absolute;
  top: 700px;
  width: 1400px;

  .button-container {
    padding: 0px 70px;
    display: flex;
  }
  .pannel-table {
    box-sizing: content-box;
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
`
