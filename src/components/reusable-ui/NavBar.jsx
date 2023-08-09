import React, { useState } from "react"
import styled from "styled-components"
import Logo from "./Logo"
import { PiUserCircleFill } from "react-icons/pi"
import { theme } from "../../theme"
import { Link, useParams } from "react-router-dom"

export default function Navbar() {
  const identifiant = useParams()
  const firstKey = Object.keys(identifiant)[0]
  const firstValue = identifiant[firstKey]

  console.log()
  return (
    <NavBarStyled>
      <div className="left_side">
        <Logo />
      </div>
      <div className="right_side">
        <div className="userinfos">
          <span>
            Hey,<span className="username_info">{firstValue}</span>
          </span>
          <Link className="disconect" to="/">
            Se déconnecter
          </Link>
        </div>{" "}
        <PiUserCircleFill className="userlogo_navbar" />
      </div>
    </NavBarStyled>
  )
}

const NavBarStyled = styled.div`
  min-width: 1400px;
  display: flex;
  border-radius: 15px 15px 0px 0px;
  background: #fff;
  height: auto;
  justify-content: space-between;
  padding: 0px 70px 0px 20px;
  .left_side {
    background-color: #fff;
  }
  .right_side {
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
  }
`
