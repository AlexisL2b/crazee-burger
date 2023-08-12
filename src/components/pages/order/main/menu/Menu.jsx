import React, { useState } from "react"
import { styled } from "styled-components"
import { fakeMenu2 } from "../../../../fakeData/fakeMenu"
import Card from "../cards/Card"
import { theme } from "../../../../../theme"

export default function Menu() {
  const [products, setProducts] = useState(fakeMenu2)

  return (
    <MenuStyled>
      {products.map((products) => (
        <Card
          className={"cardProduct"}
          key={products.id}
          imageSource={products.imageSource}
          title={products.title}
          priceProduct={products.price}
        />
      ))}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  /* display: grid;
  background-color: purple;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 2fr;
  padding: 50px 50px 150px;
  row-gap: 85px;
  column-gap: 50px;
  align-items: center;
  justify-items: center; */
  /* .cardProduct {
    grid-area: 0/2/3/4;
  } */
`
/**/
