import { useRef } from "react"
import { useState } from "react"
import LoginPages from "./components/pages/LoginPages"

function App() {
  //state
  const [firstName, setFirstName] = useState("")

  //comportement
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Bonjour " + firstName)
    setFirstName("")
  }

  const handlePrenom = (e) => {
    setFirstName(e.currentTarget.value)
  }

  //Affichage
  return (
    <div>
      <LoginPages />
    </div>
  )
}
export default App
