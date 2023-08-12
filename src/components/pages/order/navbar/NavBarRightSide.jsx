import React from "react"
import { useParams } from "react-router-dom"
import { styled } from "styled-components"
import Profile from "./Profile"
import AdminButton from "./AdminButton/AdminButton"

export default function NavBarRightSide() {
  //state
  const identifiant = useParams()
  const firstKey = Object.keys(identifiant)[0]
  const firstValue = identifiant[firstKey]

  //comportement
  return (
    <NavBarRightSideStyled>
      <AdminButton />
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
