import React, { useContext } from "react"
import { styled } from "styled-components"
import { theme } from "../../../../../theme"
import ActiveContext from "../../../../../context/ActiveContext"

export default function PannelButton({
  label,
  icons,
  className,
  id,
  onClick,
  isOpen,
}) {
  //State

  const { activeTab, setActiveTab } = useContext(ActiveContext)
  const isActive = activeTab === id
  const classNameCombined = ` ${isActive ? "active" : "inactive"} ${className}`

  //comportement

  return (
    <PannelButtonStyled
      className={classNameCombined}
      onClick={() => {
        {
          id && setActiveTab(id)
        }
        onClick()
      }}
      isOpen={isOpen}
    >
      <div className="icon">{icons}</div>
      {label && <p className="label">{label}</p>}
    </PannelButtonStyled>
  )
}

const PannelButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 1px;
  padding: 0 22px;

  height: 43px;

  box-shadow: ${theme.shadows.subtle};
  border: solid 1px ${theme.colors.greyLight};
  border-bottom: 2px solid ${theme.colors.greyLight};
  border-radius: ${theme.borderRadius.round} ${theme.borderRadius.round} 0px 0px;

  cursor: pointer;

  &:hover {
    border-bottom: 2px solid ${theme.colors.white};
  }
  .label {
    margin-left: 10px;
  }
  .icon {
    display: flex;
  }
`
