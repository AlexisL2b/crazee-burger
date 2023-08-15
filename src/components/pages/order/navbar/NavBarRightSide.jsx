import React, { useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { styled } from "styled-components"
import "react-toastify/dist/ReactToastify.css"
import Profile from "./Profile"
import { toast } from "react-toastify"
import ToggleButton from "../../../reusable-ui/ToggleButton"
import { FaUserSecret } from "react-icons/fa6"
import Context from "../../../../context/Context"

export default function NavBarRightSide() {
  //state

  const identifiant = useParams()
  const firstKey = Object.keys(identifiant)[0]
  const firstValue = identifiant[firstKey]
  const [isChecked, setIsChecked] = useState(0)
  const { setRole } = useContext(Context)
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
      setRole("admin")
    } else {
      setIsChecked(0)
      setRole("user")
    }
  }

  //comportement
  return (
    <NavBarRightSideStyled>
      <ToggleButton
        isChecked={isChecked}
        onToggle={onToggle}
        labelIfChecked="DéSACTIVER LE MODE ADMIN"
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        className="admin-button"
      />
      <Profile firstValue={firstValue} />
    </NavBarRightSideStyled>
  )
}

const NavBarRightSideStyled = styled.div`
  margin-left: auto;
  flex-shrink: 0;
  display: flex;
  align-items: center;
`
