import React, { useState } from "react"
import { styled } from "styled-components"
import ToggleButton from "../../../reusable-ui/ToggleButton"
import { toast } from "react-toastify"
import { FaUserSecret } from "react-icons/fa6"

export default function AdminButton() {
  //State

  const [isChecked, setIsChecked] = useState(0)
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
    } else {
      setIsChecked(0)
    }
  }

  return (
    <AdminButtonStyled>
      <ToggleButton
        isChecked={isChecked}
        onToggle={onToggle}
        labelIfChecked="DéSACTIVER LE MODE ADMIN"
        labelIfUnchecked={"ACTIVER LE MODE ADMIN"}
      />
    </AdminButtonStyled>
  )
}
const AdminButtonStyled = styled.div`
  margin-right: 50px;
`
