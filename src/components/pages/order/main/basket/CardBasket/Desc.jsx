import React from "react"
import { css, styled } from "styled-components"
import { theme } from "../../../../../../theme"
import { formatMontant } from "../../../../../../utils/maths"

export default function Desc({ title, price, cardVersion, product }) {
  const formatPrice = formatMontant(price)
  return (
    <DescStyled
      version={
        cardVersion === "selectStyled" ? "secondaryStyled" : "primaryStyled"
      }
    >
      <div className="infos">
        <div className="title">
          <span>{title}</span>
        </div>
        <div className="price">{price}</div>
      </div>
    </DescStyled>
  )
}
const DescStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  height: 86px;
  padding: ${theme.spacing.xs} 16px;

  .infos {
    padding: ${theme.spacing.xxs} 4px;

    height: 70px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    width: 100%;
    .title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 32px;
      color: ${theme.colors.dark};
      font-weight: ${theme.fonts.weights.bold};
      font-size: ${theme.fonts.size.P3};
      grid-area: 1/1/2/2;
    }
    .price {
      grid-area: 2/1/3/2;
      height: 20px;
      margin: 0px;
      font-size: ${theme.fonts.size.SM};
      font-family: ${theme.fontsFamily.open};
      align-items: center;
      justify-content: center;
    }
    .price {
      grid-area: 2/1/3/2;
      height: 20px;
      margin: 0px;
      font-size: ${theme.fonts.size.SM};
      font-family: ${theme.fontsFamily.open};
      align-items: center;
      justify-content: center;
    }
    .available {
      grid-area: 2/1/3/2;
      height: 20px;
      margin: 0px;
      font-size: ${theme.fonts.size.SM};
      font-family: ${theme.fontsFamily.open};
      align-items: center;
      justify-content: center;
    }
  }
  ${({ version }) => extraStyle[version]}
  @media (max-width: 1440px) {
  }
`
const primaryStyled = css`
  .price {
    color: ${theme.colors.primary};
  }
`
const secondaryStyled = css`
  .price {
    color: ${theme.colors.white};
  }
`

const extraStyle = {
  primaryStyled,
  secondaryStyled,
}
