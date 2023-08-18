import React, { useContext } from "react"
import { styled } from "styled-components"
import { theme } from "../../../../../theme"
import OrderContext from "../../../../../context/OrderContext"

export default function StateButton({ icons }) {
  const { isOpen, setIsOpen } = useContext(OrderContext)
  // const handleClickState = () => {
  //   if (isOpen) {
  //     setIsOpen(!isOpen)
  //   } else {
  //     setIsOpen(!isOpen)
  //   }
  // }

  return (
    <StateButtonStyled
      onClick={() => handleClickState()}
      currentstate={isOpen.toString()}
    >
      <div className="icon">{icons}</div>
    </StateButtonStyled>
  )
}
const StateButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 22px;
  height: 43px;

  background-color: ${(props) =>
    props.currentstate == "false"
      ? `${theme.colors.background_dark}`
      : `${theme.colors.white}`};

  color: ${(props) =>
    props.currentstate == "false"
      ? `${theme.colors.white}`
      : `${theme.colors.greySemiDark}`};

  box-shadow: ${theme.shadows.subtle};

  border: ${(props) =>
    props.currentstate == "false"
      ? `1px solid ${theme.colors.dark}`
      : `1px solid ${theme.colors.greyLight}`};

  border-bottom: ${(props) =>
    props.currentstate == "false"
      ? `2px solid ${theme.colors.dark}`
      : `2px solid ${theme.colors.greyLight}`};
  border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0px 0px;

  cursor: pointer;
  top: 1px;
  position: relative;
  &:hover {
    border-bottom: ${(props) =>
      props.currentstate == "true" ? `2px solid ${theme.colors.white}` : null};
  }
  .icon {
    display: flex;
  }
`
