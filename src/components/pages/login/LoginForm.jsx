import React, { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../../theme"
import { MdKeyboardArrowRight } from "react-icons/md"
import { PiUserCircleFill } from "react-icons/pi"
import TextInput from "../../reusable-ui/TextInput"
import PrimaryButton from "../../reusable-ui/PrimaryButton"
import { authenticateUser, createUser, getUser } from "../../../api/user"
import { getMenu } from "../../../api/menu"
import Welcome from "./Welcome"

export default function LoginForm() {
  //state
  const [firstName, setFirstName] = useState("")
  const navigate = useNavigate()
  //comportement
  const handleSubmit = async (e) => {
    e.preventDefault()
    authenticateUser(firstName)
    await getMenu(firstName)
    navigate(`order/${firstName}`)
  }

  const handleChange = (e) => {
    setFirstName(e.currentTarget.value)
  }
  //affichage
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <Welcome />
      <TextInput
        className={"first_name"}
        value={firstName}
        onChange={handleChange}
        placeholder="Entrez votre prénom"
        Icon={<PiUserCircleFill />}
        type="text"
        required
        version="normal"
      />
      <PrimaryButton
        version={"longPrimary"}
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
  border-radius: ${theme.borderRadius.round};
`
