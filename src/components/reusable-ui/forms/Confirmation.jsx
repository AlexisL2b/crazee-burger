import React, { useContext, useEffect } from "react"
import { styled } from "styled-components"
import { FiCheckCircle } from "react-icons/fi"
import { theme } from "../../../theme"
import OrderContext from "../../../context/OrderContext"
import Message from "../../pages/order/main/pannel/Message"

export default function Confirmation() {
  const { isVisible } = useContext(OrderContext)

  if (!isVisible) return null
  return (
    <ConfirmationStyled>
      <i>
        <FiCheckCircle />
      </i>
      <Message label={"Ajouté avec succés"} version="success" />
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
