import { useState } from "react"
import LoginPages from "./components/pages/login/LoginPages"
import OrderPages from "./components/pages/order/OrderPages"
import { Route, Routes } from "react-router-dom"
import ErrorPage from "./components/pages/error/ErrorPage"
import { ToastContainer } from "react-toastify"

function App() {
  //state

  //comportement

  //Affichage
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPages />} />
        <Route path="/order/:userName" element={<OrderPages />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}
export default App
