import { useState } from "react"
import LoginPages from "./components/pages/login/LoginPages"
import OrderPages from "./components/pages/order/OrderPages"
import { Route, Routes } from "react-router-dom"
import ErrorPage from "./components/pages/error/ErrorPage"

function App() {
  //state
  const [url, setUrl] = useState("/")

  //comportement

  //Affichage
  return (
    <Routes>
      <Route path="/" element={<LoginPages />} />
      <Route path="/order" element={<OrderPages />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}
export default App
