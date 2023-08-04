import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BsWalletFill } from "react-icons/bs"
import styled from 'styled-components'

export default function LoginForm() {
  //state
  const [firstName, setFirstName] = useState("")
  const navigate = useNavigate()
  //comportement
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`order/${firstName}`)
  }

  const handlePrenom = (e) => {
    setFirstName(e.currentTarget.value)
  }
  //affichage
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>
      <input
        type="text"
        placeholder="Entrez votre prénom"
        required
        value={firstName}
        onChange={handlePrenom}
      />
      <button>Accédez à votre espace</button>
    </form>
  )
}
const LoginFormStyled = styled.


// 4 méthodes pour ajouter du style a un component 


/*
1. Inline style
Ajout rapide de css +/- Pas très propre

Exemple:
<h2 style = {1st acolade pour interpolation js{2th pour l'objet js pour ecrire du css in js attentdue par ma propriétée style \\key : "value"//}}>Connectez-vous</h2>

2. Object   style

3. Modules CSS (avec class name)

4. global style(inedx.css)

5. Style component

*/