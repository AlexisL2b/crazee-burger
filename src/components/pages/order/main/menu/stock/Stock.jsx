import React, { useContext } from "react"
import { styled } from "styled-components"
import OrderContext from "../../../../../../context/OrderContext"
import Admin from "./Admin"
import User from "./User"
import Loading from "../../../../Loading"

export default function Stock() {
  const { isAdmin, isMounted, products } = useContext(OrderContext)
  if (!isMounted) {
    return <Loading />
  }
  return <StockStyled>{isAdmin ? <Admin /> : <User />}</StockStyled>
}

const StockStyled = styled.div``
