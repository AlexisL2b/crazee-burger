import { useState } from "react"
import LoginForm from "./LoginForm"
import TitleLogo from "../../reusable-ui/TitleLogo"
import styled from "styled-components"
import { theme } from "../../../theme"

export default function LoginPages() {
  return (
    <LoginPagesStyled>
      <TitleLogo />
      <LoginForm />
    </LoginPagesStyled>
  )
}

const LoginPagesStyled = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  ::before {
    content: "";
    background: url("public/assets/F03 burger-background.jpg")
      rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center center;
    background-blend-mode: darken;

    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
  }
`
