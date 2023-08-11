import React from "react"
import styled from "styled-components"
import PrimaryButton from "../../../../reusable-ui/PrimaryButton"
import { theme } from "../../../../../theme"
import { formatMontant } from "../../../../../utils/maths"

export default function Desc({ priceProduct, title }) /*propsDrilling*/ {
  //State

  //comportement
  return (
    <DescStyled>
      <h1>{title}</h1>
      <div className="infos">
        <div className="price">{formatMontant(priceProduct)}</div>
        <PrimaryButton label="Ajouter" className="card_button" />
      </div>
    </DescStyled>
  )
}

const DescStyled = styled.div`
  display: flex;
  padding: 0px 5px 5px 5px;
  flex-direction: column;
  h1 {
    color: ${theme.colors.dark};
    font-family: ${theme.fontsFamily.amatic};
    font-size: ${theme.fonts.P4};
    font-style: normal;
    font-weight: ${theme.weights.bold};
    line-height: normal;
    white-space: nowrap; /* Empêche le texte de passer à la ligne */
    overflow: hidden; /* Cache tout ce qui dépasse du conteneur */
    text-overflow: ellipsis; /* Affiche une ellipse lorsque le texte est coupé */
    max-width: 220px;
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
