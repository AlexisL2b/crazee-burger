import LoginPages from "./components/pages/login/LoginPages"
import OrderPages from "./components/pages/order/OrderPages"
import { Route, Routes } from "react-router-dom"
import ErrorPage from "./components/pages/error/ErrorPage"
import AdminToast from "./components/pages/order/navbar/AdminToast"
import "./App.css"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPages />} />
        <Route path="/order/:userName" element={<OrderPages />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <AdminToast />
    </div>
  )
}
export default App
