import React, { useContext, useState } from "react"
import styled from "styled-components"
import { theme } from "../../../theme"
import ImageWrapper from "./ImageWrapper"
import Desc from "./Desc"
import DeleteButton from "./DeleteButton"
import OrderContext from "../../../context/OrderContext"

export default function Card({
  //state
  //comportement
  id,
  imageSource,
  title,
  priceProduct,
  className,
}) {
  const { products, setProducts } = useContext(OrderContext)

  //state
  const handleDelete = (e) => {
    //L'id du produit
    const idProductToDelete = e.currentTarget.parentElement.id
    const productFilter = products.filter(
      (product) => product.id != idProductToDelete
    )
    setProducts(productFilter)
    console.log(products)
  }
  //comportement

  const { isAdmin } = useContext(OrderContext)

  //affichage

  return (
    <CardStyled className={className} id={id}>
      {isAdmin && <DeleteButton onClick={handleDelete} />}
      <ImageWrapper imageSource={imageSource} />
      <Desc priceProduct={priceProduct} title={title} />
    </CardStyled>
  )
}

const CardStyled = styled.div`
  background: ${theme.colors.white};
  width: 240px;
  height: 330px;
  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 20px;
  padding-bottom: 10px;
  box-shadow: ${theme.shadows.medium};
  border-radius: ${theme.borderRadius.extraRound};
  position: relative;
`
