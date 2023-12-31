import React from "react"
import { ToastContainer } from "react-toastify"
import { styled } from "styled-components"
import { theme } from "../../../../theme"

export default function AdminToast() {
  return (
    <ToastContainerStyled>
      <ToastContainer className="toaster" bodyClassName="body-toast" />
    </ToastContainerStyled>
  )
}
const ToastContainerStyled = styled.div`
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
