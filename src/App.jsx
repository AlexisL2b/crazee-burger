import { useState } from "react"
import LoginPages from "./components/pages/login/LoginPages"
import OrderPages from "./components/pages/order/OrderPages"

function App() {
  //state
  const [url, setUrl] = useState("/")

  //comportement

  //Affichage
  return (
    <div>
      <LoginPages />
    </div>
  )
}
export default App
