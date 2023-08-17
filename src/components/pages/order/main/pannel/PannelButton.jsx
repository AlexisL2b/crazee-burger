import React, { useContext, useState } from "react"
import { styled } from "styled-components"
import { theme } from "../../../../../theme"
import ActiveContext from "../../../../../context/ActiveContext"

export default function PannelButton({
  labbel,
  icons,
  className,
  id,
  onClick,
}) {
  //State

  const { activeTab, setActiveTab } = useContext(ActiveContext)
  const isActive = activeTab === id
  const classNameCombined = `${className} ${isActive ? "active" : "inactive"}`

  //comportement

  return (
    <PannelButtonStyled
      className={classNameCombined}
      onClick={() => {
        setActiveTab(id)
        onClick()
      }}
    >
      <i>{icons}</i>
      {labbel && labbel}
    </PannelButtonStyled>
  )
}

const PannelButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 22px 10px 22px;
  border-top: 1px solid #e4e5e9;
  border-right: 1px solid #e4e5e9;
  border-left: 1px solid #e4e5e9;
  border-bottom: 2px solid #e4e5e9;
  background-color: ${(props) =>
    props.activity === "active" ? "black" : "white"};
  color: ${theme.colors.greyDark};
  border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0px 0px;
  box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);

  cursor: pointer;
  &:hover {
    border-bottom: 2px solid white;
  }
`
