import React, { useContext, useState } from "react"
import styled from "styled-components"
import { theme } from "../../../theme"
import ImageWrapper from "./ImageWrapper"
import Desc from "./Desc"
import DeleteButton from "./DeleteButton"
const EMPTY_BY_DEFAULT_PICTURE = "/assets/coming-soon.png"

export default function Card({
  id,
  imageSource,
  title,
  priceProduct,
  className,
  onDelete,
  isAdmin,
  onClick,
}) {
  return (
    <CardStyled
      className={className}
      id={id}
      onClick={isAdmin ? onClick : null}
    >
      {isAdmin && <DeleteButton onClick={onDelete} />}
      <ImageWrapper
        name={"image_wrapper"}
        imageSource={imageSource ? imageSource : EMPTY_BY_DEFAULT_PICTURE}
        className={"card_picture"}
      />
      <Desc name={"desc"} priceProduct={priceProduct} title={title} />
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
  .card_picture {
    width: 100%;
    height: auto;
    margin-top: 30px;
    margin-bottom: 20px;
  }
`
