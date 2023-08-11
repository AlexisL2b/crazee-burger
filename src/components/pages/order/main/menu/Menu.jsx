import React from "react"
import { styled } from "styled-components"
import { fakeMenu2 } from "../../../../fakeData/fakeMenu"
import Card from "../cards/Card"

export default function Menu() {
  return (
    <MenuStyled>
      {fakeMenu2.map((produit) => (
        <Card
          className={"cardProduct"}
          key={produit.id}
          imageSource={produit.imageSource}
          title={produit.title}
          priceProduct={produit.price}
        />
      ))}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 2fr;
  padding: 50px 50px 150px;
  row-gap: 85px;
  column-gap: 50px;
  place-items: center;
  .cardProduct {
    grid-area: 0/1/3/4;
  }
`
/**/
