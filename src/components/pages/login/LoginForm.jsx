import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BsWalletFill } from "react-icons/bs"
import styled from "styled-components"
import { theme } from "../../../theme"
import { MdKeyboardArrowRight } from "react-icons/md"
import { PiUserCircleFill } from "react-icons/pi"
import TextInput from "../../reusable-ui/TextInput"
import PrimaryButton from "../../reusable-ui/PrimaryButton"

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
      <TextInput
        className={"first_name"}
        value={firstName}
        onChange={handleChange}
        placeholder="Entrez votre prénom"
        Icon={<PiUserCircleFill className="icone_user" />}
        required
      />
      <PrimaryButton
        label="Accéder à mon espace"
        Icon={<MdKeyboardArrowRight />}
      />
    </LoginFormStyled>
  )
}
const LoginFormStyled = styled.form`
  padding: ${theme.spacing.lg} 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: ${theme.borderRadius.round};
  h1 {
    text-align: center;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P5};
    font-family: ${theme.fontsFamily.amatic};
  }
  .divider {
    border: 1px solid ${theme.colors.primary};
    margin-bottom: ${theme.gridUnit * 5}px;
  }
  h2 {
    text-align: center;
    font-family: ${theme.fontsFamily.amatic};
    font-size: ${theme.fonts.P4};
    color: ${theme.colors.white};
  }
  .first_name {
    margin: 18px 0px;
    padding: 16px ${theme.gridUnit * 3}px;
  }
`
