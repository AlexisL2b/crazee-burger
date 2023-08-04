import React, { useState } from "react"
import { Link } from "react-router-dom"

export default function LoginForm() {
  //state
  const [firstName, setFirstName] = useState("")

  //comportement
  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href("/order")
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
      <Link to="/order">Vers order page </Link>
    </form>
  )
}
