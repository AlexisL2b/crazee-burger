import React, { useContext } from "react"
import { css, styled } from "styled-components"
import { theme } from "../../../../theme"
import { Link } from "react-router-dom"
import { PiUserCircleFill } from "react-icons/pi"
import OrderContext from "../../../../context/OrderContext"

export default function Profile({ username, version }) {
  const { windowWidth } = useContext(OrderContext)
  return (
    <ProfileSyled version={version}>
      <div className="infos">
        <span>
          Hey, <span className="username">{username}</span>
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
  padding-left: 50px;
  margin-right: 10px;
  text-align: right;
  font-family: ${theme.fontsFamily.open};
  font-size: 16px;
  font-style: normal;
  font-weight: ${theme.fonts.weights.regular};
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
      font-weight: ${theme.fonts.weights.bold};
      line-height: 22px;
      color: ${theme.colors.primary};
    }
    .disconect {
      font-size: ${theme.fonts.size.XXS};
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

    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
  }
  ${({ version }) => extraStyle[version]}
`
const mobile = css`
  padding: 0;
  .picture {
    display: none;
  }
`

const extraStyle = {
  mobile,
}
