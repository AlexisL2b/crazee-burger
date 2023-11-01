import React, { useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { styled } from "styled-components"
import "react-toastify/dist/ReactToastify.css"
import Profile from "./Profile"
import { toast } from "react-toastify"
import ToggleButton from "../../../reusable-ui/ToggleButton"
import { FaUserSecret } from "react-icons/fa6"
import OrderContext from "../../../../context/OrderContext"

export default function NavBarRightSide() {
  //state

  const [isChecked, setIsChecked] = useState(0)
  const { setIsAdmin, userName, windowWidth } = useContext(OrderContext)
  //comportement
  const onToggle = () => {
    if (isChecked == 0) {
      setIsChecked(1)
      toast.info("Mode admin activé", {
        icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      setIsAdmin(true)
    } else {
      setIsChecked(0)
      setIsAdmin(false)
    }
  }

  //comportement
  return (
    <NavBarRightSideStyled>
      <ToggleButton
        version={windowWidth > 600 ? "" : "mobile"}
        isChecked={isChecked}
        onToggle={onToggle}
        labelIfChecked={
          windowWidth > 600 ? "DéSACTIVER LE MODE ADMIN" : "ADMIN"
        }
        labelIfUnchecked={windowWidth > 600 ? "ACTIVER LE MODE ADMIN" : "USER"}
      />
      <Profile username={userName} version={windowWidth < 485 && "mobile"} />
    </NavBarRightSideStyled>
  )
}

const NavBarRightSideStyled = styled.div`
  margin-left: auto;
  flex-shrink: 0;
  display: flex;
  align-items: center;
`
