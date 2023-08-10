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
          key={produit.id}
          imageSource={produit.imageSource}
          title={produit.title}
          price={produit.price}
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
  height: 100%;
`
