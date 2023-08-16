import React, { useContext } from "react"
import { styled } from "styled-components"
import { theme } from "../../../../../theme"
import StateContext from "../../../../../context/StateContext"

export default function StateButton({ icons }) {
  const { setState, State } = useContext(StateContext)
  const handleClick = () => {
    if (State === "opened") {
      setState("closed")
    } else {
      setState("opened")
    }
  }

  return (
    <StateButtonStyled onClick={handleClick} currentstate={State}>
      <i>{icons}</i>
    </StateButtonStyled>
  )
}
const StateButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 22px 10px 22px;
  border-top: 1px solid #e4e5e9;
  border-right: 1px solid #e4e5e9;
  border-left: 1px solid #e4e5e9;
  border-bottom: 2px solid #e4e5e9;
  background-color: ${(props) =>
    props.currentstate === "closed" ? "black" : "white"};
  color: ${theme.colors.greyDark};
  border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0px 0px;
  box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`
