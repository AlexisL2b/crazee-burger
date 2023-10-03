import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../../theme"
import { MdKeyboardArrowRight } from "react-icons/md"
import { PiUserCircleFill } from "react-icons/pi"
import TextInput from "../../reusable-ui/TextInput"
import PrimaryButton from "../../reusable-ui/PrimaryButton"
import { createUser, getUser } from "../../../api/user"

export default function LoginForm() {
  //state
  const [firstName, setFirstName] = useState("")
  const navigate = useNavigate()
  //comportement
  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = await getUser(firstName)

    if (user != undefined) {
      navigate(`order/${firstName}`)
    } else {
      createUser(firstName)
      navigate(`order/${firstName}`)
    }

    //   if (!getUser(firstName)) {
    //     createUser(firstName)
    //     console.log("ok")
    //     navigate(`order/${firstName}`)
    //   } else {
    //     console.log("pasok")
    //   }
  }

  const handleChange = (e) => {
    setFirstName(e.currentTarget.value)
  }
  //affichage
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <div className="divider"></div>
      <span className="connect">Connectez-vous</span>
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
  justify-content: space-between;
  border-radius: ${theme.borderRadius.round};
  h1 {
    text-align: center;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
    font-family: ${theme.fontsFamily.amatic};
  }
  .divider {
    border: 1px solid ${theme.colors.primary};
    margin-bottom: ${theme.gridUnit * 5}px;
    margin-top: 32px;
    width: 400px;
  }
  .connect {
    text-align: center;
    font-family: ${theme.fontsFamily.amatic};
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.white};
  }
`
