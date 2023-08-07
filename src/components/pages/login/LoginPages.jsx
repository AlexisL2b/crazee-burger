import { useState } from "react"
import LoginForm from "./LoginForm"
import TitleLogo from "../../title-logo/TitleLogo"
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
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.251));
  background-image: url("src/assets/F03 burger-background.jpg");
  background-size: cover;
  background-position: center center;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`
