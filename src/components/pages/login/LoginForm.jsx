import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BsWalletFill } from "react-icons/bs"
import styled from "styled-components"
import { theme } from "../../../theme"
import { MdKeyboardArrowRight } from "react-icons/md"
import { PiUserCircleFill } from "react-icons/pi"
import Input from "../../reusable-ui/Input"

export default function LoginForm() {
  //state
  const [firstName, setFirstName] = useState("")
  const navigate = useNavigate()
  //comportement
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`order/${firstName}`)
  }

  const handleChange = (e) => {
    setFirstName(e.currentTarget.value)
  }
  //affichage
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <div className="divider"></div>
      <h2>Connectez-vous</h2>
      <Input
        value={firstName}
        onChange={handleChange}
        placeholder="Entrez votre prénom"
        Icon={<PiUserCircleFill className="icone_user" />}
        required
      />
      <button>
        Accédez à mon espace <MdKeyboardArrowRight />
      </button>
    </LoginFormStyled>
  )
}
const LoginFormStyled = styled.form`
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    text-align: center;
    color: ${theme.colors.white};
    font-size: 48px;
    font-family: ${theme.fontsFamily.amatic};
  }
  .divider {
    border: 1px solid #f56a2c;
  }
  h2 {
    text-align: center;
    font-family: ${theme.fontsFamily.amatic};
    font-size: 36px;
    color: ${theme.colors.white};
  }

  button {
    font-size: 15px;
    border: none;
    display: flex;
    padding: 16px 0px;
    border-radius: 5px;
    border: none;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    &:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
    &:active {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
  }
`
