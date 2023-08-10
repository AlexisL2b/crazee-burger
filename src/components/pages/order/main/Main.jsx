import styled from "styled-components"
import { theme } from "../../../../theme"
import Card from "./cards/Card"
import { fakeMenu2 } from "../../../fakeData/fakeMenu"

export default function Main() {
  //state

  //comportement

  return (
    <MainStyled>
      {fakeMenu2.map((produit) => (
        <Card
          className={"cardProduct"}
          key={produit.id}
          imageSource={produit.imageSource}
          title={produit.title}
          priceProduct={produit.price}
        />
      ))}
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: 0px ${theme.spacing.xs} ${theme.spacing.md} ${theme.spacing.xs}
    rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;
  width: 1400px;
  height: 100vh;
  overflow-y: scroll;
  scrollbar-width: none;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 2fr;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  padding: 50px 50px 150px;
  grid-row-gap: 60px;
  place-items: center;
  .cardProduct {
    grid-area: 0/1/3/4;
  }
`
