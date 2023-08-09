import React from "react"
import { PiUserCircleFill } from "react-icons/pi"
import { Link, useParams } from "react-router-dom"
import { styled } from "styled-components"
import { theme } from "../../../../theme"

export default function NavBarRightSide() {
  //state
  const identifiant = useParams()
  const firstKey = Object.keys(identifiant)[0]
  const firstValue = identifiant[firstKey]

  //comportement
  return (
    <NavBarRightSideStyled>
      <div className="userinfos">
        <span>
          Hey,<span className="username_info">{firstValue}</span>
        </span>
        <Link className="disconect" to="/">
          Se déconnecter
        </Link>
      </div>
      <PiUserCircleFill className="userlogo_navbar" />
    </NavBarRightSideStyled>
  )
}

const NavBarRightSideStyled = styled.div`
  margin-left: auto;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  .userinfos {
    margin-right: 10px;
    text-align: right;
    font-family: ${theme.fontsFamily.open};
    font-size: 16px;
    font-style: normal;
    font-weight: ${theme.weights.regular};
    line-height: 22px;
    display: flex;
    flex-direction: column;
    color: ${theme.colors.greyBlue};
    .username_info {
      font-family: ${theme.fontsFamily.open};
      font-size: 16px;
      font-style: normal;
      font-weight: ${theme.weights.bold};
      line-height: 22px;
      color: ${theme.colors.primary};
    }
    .disconect {
      font-size: ${theme.fonts.XXS};
      color: ${theme.colors.greyBlue};
      text-decoration: none;
      &:visited {
        color: ${theme.colors.greyBlue};
      }
    }
  }
  .userlogo_navbar {
    width: 36px;
    height: 36px;
    color: ${theme.colors.greyBlue};
  }
`
