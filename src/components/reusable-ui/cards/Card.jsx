import React, { useContext, useState } from "react"
import styled from "styled-components"
import { theme } from "../../../theme"
import ImageWrapper from "./ImageWrapper"
import Desc from "./Desc"
import DeleteButton from "./DeleteButton"
const EMPTY_BY_DEFAULT_PICTURE = "/assets/coming-soon.png"

const Card = React.forwardRef(
  (
    {
      id,
      imageSource,
      title,
      priceProduct,
      className,
      onDelete,
      isAdmin,
      onClick,
    },
    ref
  ) => {
    return (
      <CardStyled className={className} id={id} onClick={onClick} ref={ref}>
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
)

export default Card

// export default function Card({
//   //state
//   //comportement
//   id,
//   imageSource,
//   title,
//   priceProduct,
//   className,
//   onDelete,
//   isAdmin,
//   onClick,
// }) {
//state
//comportement

// const handleSelected = (e) => {
//   const cardIdToSelect = e.currentTarget.id
//   const copyIsSelected = [...isSelected]
//   const selectedId = copyIsSelected.push(cardIdToSelect)
//   // const updatedIsSelected = selectedId.filter((id) => id === cardIdToSelect)
//   setIsSelected(selectedId)
//   console.log(isSelected)
// }
//affichage

//   return (
//     <CardStyled className={className} id={id} onClick={onClick}>
//       {isAdmin && <DeleteButton onClick={onDelete} />}
//       <ImageWrapper
//         imageSource={imageSource ? imageSource : EMPTY_BY_DEFAULT_PICTURE}
//         className={"card_picture"}
//       />
//       <Desc priceProduct={priceProduct} title={title} />
//     </CardStyled>
//   )
// }

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
