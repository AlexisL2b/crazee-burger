import React from "react"
import { styled } from "styled-components"
import { theme } from "../../../../theme"
import { Link } from "react-router-dom"
import { PiUserCircleFill } from "react-icons/pi"

export default function Profile({ firstValue }) {
  return (
    <ProfileSyled>
      <div className="infos">
        <span>
          Hey, <span className="username">{firstValue}</span>
        </span>
        <Link className="disconect" to="/">
          Se déconnecter
        </Link>
      </div>
      <div className="picture">
        <PiUserCircleFill className="userlogo_navbar" />
      </div>
    </ProfileSyled>
  )
}
const ProfileSyled = styled.div`
  margin-right: 10px;
  text-align: right;
  font-family: ${theme.fontsFamily.open};
  font-size: 16px;
  font-style: normal;
  font-weight: ${theme.weights.regular};
  line-height: 22px;
  display: flex;
  color: ${theme.colors.greyBlue};
  .infos {
    display: flex;
    flex-direction: column;

    .username {
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
      &:hover {
        text-decoration: underline;
        color: ${theme.colors.greyBlue};
      }
    }
  }
  .picture {
    display: flex;
    margin-left: 10px;
    height: auto;
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.greyBlue};
  }
`
