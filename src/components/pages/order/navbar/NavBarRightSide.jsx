import React from "react"
import { useParams } from "react-router-dom"
import { styled } from "styled-components"
import "react-toastify/dist/ReactToastify.css"
import Profile from "./Profile"
import AdminButton from "./AdminButton"
import { ToastContainer } from "react-toastify"
import { theme } from "../../../../theme"

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
      <ToastContainer className="toaster" bodyClassName="body-toast" />
    </NavBarRightSideStyled>
  )
}

const NavBarRightSideStyled = styled.div`
  margin-left: auto;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`
