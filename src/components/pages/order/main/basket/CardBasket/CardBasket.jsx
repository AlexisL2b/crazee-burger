import React from "react"
import { styled } from "styled-components"
import ImageWrapper from "../../../../../reusable-ui/cards/ImageWrapper"
import { theme } from "../../../../../../theme"

export default function CardBasket() {
  return (
    <CardBasketStyled>
      <ImageWrapper className={"image"} />
      <div className="desc">
        <div className="infos">
          <div className="title">
            <span>Title</span>
          </div>
          <div className="price">
            <span className="price">Price</span>
          </div>
        </div>
      </div>
      <div className="ammount">X17</div>
    </CardBasketStyled>
  )
}
const CardBasketStyled = styled.div`
  height: auto;
  background: red;
  padding: 8px 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  .image {
    background: blue;
    height: 100%;
    width: 85px;
    border: 1px solid purple;
  }
  .desc {
    background: blue;
    border: 1px solid purple;
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    height: auto;

    .infos {
      background: yellow;
      display: grid;
      grid-template-rows: 1fr 1fr;
      align-items: center;
      width: 120px;
      .title {
        height: 32px;
        font-size: ${theme.fonts.size.P3};
        grid-area: 1/1/2/2;
      }
      .price {
        grid-area: 2/1/3/2;
        height: 20px;
        margin: 0px;
        font-size: ${theme.fonts.size.SM};
        align-items: center;
        justify-content: center;
      }
    }
  }
  .ammount {
    background: pink;
    font-size: ${theme.fonts.size.SM};
    width: 100%;
  }
`
