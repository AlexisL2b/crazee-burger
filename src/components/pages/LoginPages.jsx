import { useState } from "react"

export default function LoginPages() {
  //state
  const [firstName, setFirstName] = useState("")

  //comportement
  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Bonjour ${firstName}`)
    setFirstName("")
  }

  const handlePrenom = (e) => {
    setFirstName(e.currentTarget.value)
  }

  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entrez votre prénom"
          required
          value={firstName}
          onChange={handlePrenom}
        />
        <button>Accédez à votre espace</button>
      </form>
    </div>
  )
}
