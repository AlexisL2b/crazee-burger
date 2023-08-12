import React, { useState } from "react"
import styled from "styled-components"
import { theme } from "../../../theme"
import ImageWrapper from "./ImageWrapper"
import Desc from "./Desc"

export default function Card({
  //state
  //comportement

  id,
  imageSource,
  title,
  priceProduct,
  className,
}) {
  return (
    <CardStyled key={id} className={className}>
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
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};
  /* background-color: red;
  border: 1px solid red;
  display: grid;
  width: 200px;
  height: 300px;
  padding: 20px;
  padding-bottom: 10px;
  grid-template-rows: 65% 1fr;
  border-radius: ${theme.borderRadius.extraRound};
  background: ${theme.borderRadius.extraRound};
  box-shadow: -8px 8px 20px 0px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  justify-items: center;
  align-items: center; */
`
