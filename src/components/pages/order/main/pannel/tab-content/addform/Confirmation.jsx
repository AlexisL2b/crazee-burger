import React, { useContext, useEffect } from "react"
import { styled } from "styled-components"
import { FiCheckCircle } from "react-icons/fi"
import { theme } from "../../../../../../../theme"
import OrderContext from "../../../../../../../context/OrderContext"

export default function Confirmation() {
  const { isVisible, setIsVisible } = useContext(OrderContext)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      console.log("log de mon timeout", isVisible)
    }, 2000)
    return () => clearTimeout(timer)
  }, [isVisible])
  if (!isVisible) return null
  return (
    <ConfirmationStyled>
      <i>
        <FiCheckCircle />
      </i>
      <span>Ajouté avec succès !</span>
    </ConfirmationStyled>
  )
}
const ConfirmationStyled = styled.div`
  display: flex;
  color: ${theme.colors.success};
  place-items: center;

  i {
    display: flex;
    place-items: center;
    margin-left: 10px;
    margin-right: 10px;
  }
`
