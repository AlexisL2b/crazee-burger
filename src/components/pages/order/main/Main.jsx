import styled from "styled-components"
import { theme } from "../../../../theme"
import Card from "./cards/Card"

export default function Main() {
  return (
    <MainStyled>
      <Card />
    </MainStyled>
  )
}

const MainStyled = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-columns: 25% 25% 25% 25%;

  background: ${theme.colors.background_white};
  box-shadow: 0px ${theme.spacing.xs} ${theme.spacing.md} ${theme.spacing.xs}
    rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;
  width: 1400px;
  height: 100%;
`
