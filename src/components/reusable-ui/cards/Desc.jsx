import React, { useContext, useState } from "react"
import styled from "styled-components"
import { formatMontant } from "../../../utils/maths"
import { theme } from "../../../theme"
import PrimaryButton from "../PrimaryButton"
import OrderContext from "../../../context/OrderContext"
import Price from "./Price"
import { getDeepClone } from "../../../utils/windows"

export default function Desc({
  priceProduct,
  title,
  name,
  cardVersion,
  product,
}) /*propsDrilling*/ {
  //State

  const { handleAddBasketProduct, basketProducts, quantity, setQuantity } =
    useContext(OrderContext)

  const basketExistingProduct = basketProducts.find(
    (basketProduct) => basketProduct.id === product.id
  )

  // const handleAddQuantity = (toAddBasketProduct) => {
  //   // toAddBasketProduct.quantity = toAddBasketProduct.quantity + 1
  //   setQuantity(quantity + 1)
  //   toAddBasketProduct.quantity = quantity
  //   console.log(toAddBasketProduct.quantity)
  // }

  // const handleClick = () => {
  //   product.ammount = 0

  //   const basketExistingProduct = basketProducts.find(
  //     (basketProduct) => basketProduct.id === product.id
  //   )
  //   if (basketExistingProduct) {
  //     product.ammount = product.ammount + 1
  //   } else {
  //     handleAddBasketProduct(product)
  //   }
  // }
  //comportement
  return (
    <DescStyled name={name}>
      <div className="title">{title}</div>
      <div className="infos">
        <div className="left-description">
          <Price
            priceProduct={priceProduct}
            version={
              cardVersion === "selectStyled"
                ? "secondaryStyled"
                : "primaryStyled"
            }
          />
        </div>

        <div className="right-description">
          <PrimaryButton
            label="Ajouter"
            version={
              cardVersion === "selectStyled" ? "smallSecondary" : "smallPrimary"
            }
            className={"button"}
            onClick={() => handleAddBasketProduct(product)}
          />
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

    .right-description {
      display: grid;
      align-items: center; /* Verticalement */
      justify-content: center;
      font-size: ${theme.fonts.size.P1};
    }
    .left-description {
      display: grid;
      align-items: center; /* Verticalement */
      justify-content: center;
      font-size: ${theme.fonts.size.P1};
    }
  }
`
