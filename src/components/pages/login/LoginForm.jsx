import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

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
