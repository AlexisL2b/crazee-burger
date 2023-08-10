import styled from "styled-components"
import { theme } from "../../../../theme"
import Card from "./cards/Card"
import { theme } from "../../../../theme"
import Card from "./card/Card"

export default function Main() {
  return (
    <MainStyled>
      <Card />
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
