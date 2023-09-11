import React from "react"
import { styled } from "styled-components"
import ImageWrapper from "../../../../../reusable-ui/cards/ImageWrapper"
import { theme } from "../../../../../../theme"
import Desc from "./Desc"

export default function CardBasket({
  title,
  price,
  imageSource,
  quantity,
  onDelete,
}) {
  return (
    <CardBasketStyled>
      <ImageWrapper className={"image"} imageSource={imageSource} />
      <Desc title={title} price={price} />
      {/* <div className="desc">
        <div className="infos">
          <div className="title">
            <span>{title}</span>
          </div>
          <div className="price">
            <span className="price">{price}</span>
          </div>
        </div>
      </div> */}
      <div className="quantity">
        {" "}
        <span>X {quantity}</span>{" "}
      </div>
      {/* <div className="delete">
        <button onClick={onDelete}>delete</button>
      </div> */}
    </CardBasketStyled>
  )
}
const CardBasketStyled = styled.div`
  background: #ffffff;
  border-radius: 5px;
  height: 86px;
  padding: 8px 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow: -4px 4px 15px 0px #00000033;

  .image {
    height: 70px;

    width: 85px;
  }

  .quantity {
    height: 70px;

    font-size: ${theme.fonts.size.SM};
    font-weight: ${theme.fonts.weights.regular};
    color: ${theme.colors.primary};
    font-family: ${theme.fontsFamily.open};
    width: 100%;
    display: grid;
    place-content: center;
  }
`
