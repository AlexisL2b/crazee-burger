import React from "react"
import styled from "styled-components"
import { theme } from "../../../../../theme"
import ImageWrapper from "./ImageWrapper"
import Desc from "./Desc"

export default function Card({
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
  display: flex;
  width: 240px;
  padding: 50px 20px 10px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-radius: 15px;
  background: #fff;
  box-shadow: -8px 8px 20px 0px rgba(0, 0, 0, 0.2);
`
