import React from "react"
import styled from "styled-components"
import { formatMontant } from "../../../utils/maths"
import { theme } from "../../../theme"
import PrimaryButton from "../PrimaryButton"

export default function Desc({ priceProduct, title }) /*propsDrilling*/ {
  //State

  //comportement
  return (
    <DescStyled>
      <div className="title">{title}</div>
      <div className="infos">
        <div className="left-description">{formatMontant(priceProduct)} €</div>
        <div className="right-description">
          <PrimaryButton label="Ajouter" version="smallPrimary" />
        </div>
      </div>
    </DescStyled>
  )
}

const DescStyled = styled.div`
  display: grid;
  grid-template-rows: 30% 70%;
  padding: 5px;
  gap: 10px;
  .title {
    margin: auto 0;
    font-size: ${theme.fonts.size.P4};
    position: relative;
    bottom: 10px;
    color: ${theme.colors.dark};
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    text-overflow: ellipsis;
    font-family: "Amatic SC";
    font-weight: ${theme.fonts.weights.bold};
  }

  .infos {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .left-description {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-weight: ${theme.fonts.weights.medium};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: ${theme.fonts.weights.medium};
      color: ${theme.colors.primary};
    }

    .right-description {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: ${theme.fonts.size.P1};
    }
  }
`
