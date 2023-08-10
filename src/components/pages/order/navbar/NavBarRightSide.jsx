import React from "react"
import { PiUserCircleFill } from "react-icons/pi"
import { Link, useParams } from "react-router-dom"
import { styled } from "styled-components"
import { theme } from "../../../../theme"
import AdminButton from "./AdminButton"
import Profile from "./Profile"

export default function NavBarRightSide() {
  //state
  const identifiant = useParams()
  const firstKey = Object.keys(identifiant)[0]
  const firstValue = identifiant[firstKey]

  //comportement
  return (
    <NavBarRightSideStyled>
      {/* <AdminButton /> */}
      <Profile firstValue={firstValue} />
    </NavBarRightSideStyled>
  )
}

const NavBarRightSideStyled = styled.div`
  margin-left: auto;
  flex-shrink: 0;
  display: flex;
  align-items: center;
`
