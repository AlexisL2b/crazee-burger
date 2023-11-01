import React, { useContext } from "react"
import { css, styled } from "styled-components"

import Body from "./Body"
import Header from "./Header"
import Footer from "./Footer"
import OrderContext from "../../../../../context/OrderContext"
import Loading from "../../../Loading"

export default function Basket({ version, classname }) {
  const { products, windowWidth } = useContext(OrderContext)
  // if (products === undefined) {
  //   return <Loading version={"basket"} />
  // }
  return (
    <BasketStyled version={version} className={classname}>
      <Header />
      <Body />
      <Footer version={windowWidth <= 362 && "mobile"} />
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  height: 100%;
  grid-row: span 3;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70px 2fr 70px;
  border-bottom-left-radius: 15px;
  ${({ version }) => extraStyle[version]}
`
const mobile = css`
  width: 326px;
  z-index: 100;
  height: calc(95vh - 10vh);
  border-bottom-right-radius: 15px;
`

const extraStyle = {
  mobile,
}
