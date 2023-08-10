import React from "react"
import styled from "styled-components"
import PrimaryButton from "../../../../reusable-ui/PrimaryButton"
import { theme } from "../../../../../theme"

export default function Desc({ priceProduct, title }) /*propsDrilling*/ {
  //State

  //comportement

  const priceRounded = Math.ceil(priceProduct * 10) / 10
  const price = priceRounded.toFixed(2)
  return (
    <DescStyled>
      <h1>{title}</h1>
      <div className="infos">
        <div className="price">{price}</div>
        <PrimaryButton label="Ajouter" className="card_button" />
      </div>
    </DescStyled>
  )
}

const DescStyled = styled.div`
  display: flex;
  padding: 0px 5px 5px 5px;
  flex-direction: column;
  align-items: flex-start;
  gap: -7.5px;
  h1 {
    display: flex;
    height: 46px;
    flex-direction: column;
    justify-content: center;
    color: ${theme.colors.dark};
    font-family: ${theme.fontsFamily.amatic};
    font-size: ${theme.fonts.P4};
    font-style: normal;
    font-weight: ${theme.weights.bold};
    line-height: normal;
  }
  .infos {
    display: flex;
    align-items: center;

    .price {
      color: ${theme.colors.primary};
      display: flex;
      padding: 22.25px 50px 22.25px 0px;
      align-items: flex-start;
    }
    .card_button {
      cursor: pointer;
      display: flex;
      height: 38px;
      padding: ${theme.spacing.sm} 26px ${theme.spacing.sm} 26px;
      justify-content: center;
      align-items: center;
      border: 1px solid ${theme.colors.primary};
    }
  }
`
