import React, { useContext, useState } from "react"
import { css, styled } from "styled-components"
import ImageWrapper from "../../../../../reusable-ui/cards/ImageWrapper"
import { theme } from "../../../../../../theme"
import Desc from "./Desc"
import Sticker from "./Sticker"
import { TbTrashXFilled } from "react-icons/tb"
import OrderContext from "../../../../../../context/OrderContext"
import CasinoEffect from "../../../../../reusable-ui/CasinoEffect"
import { convertStringToBoolean } from "../../../../../../utils/bool"
import StickerAnimated, { stickerAnimation } from "./StickerAnimated"

export default function CardBasket({
  title,
  price,
  imageSource,
  quantity,
  onDelete,
  onClick,
  version,
  className,
  product,
}) {
  const { isAdmin } = useContext(OrderContext)
  return (
    <CardBasketStyled
      onClick={isAdmin ? onClick : null}
      version={version}
      className={className}
    >
      {/* <ImageWrapper className={"image"} imageSource={imageSource} /> */}
      <div className="image_wrapper">
        {convertStringToBoolean(product.isAdvertised) && <StickerAnimated />}
        <img src={imageSource} alt="" loading="lazy" />
      </div>

      <div className="desc">
        <Desc
          product={product}
          title={title}
          price={price}
          cardVersion={version}
        />
      </div>

      <div className="container_price">
        <div className="delete-button" onClick={onDelete}>
          <i className="icon">
            <TbTrashXFilled />
          </i>
        </div>
        <CasinoEffect count={quantity} className={"quantity"} />
      </div>
    </CardBasketStyled>
  )
}
const CardBasketStyled = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  height: 86px;
  display: grid;
  grid-template-columns: 25% 50% 25%;
  margin-top: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.md};
  box-shadow: ${theme.shadows.basket};
  position: relative;
  &:hover {
    .delete-button {
      border: none;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 25%;
      border-top-right-radius: ${theme.borderRadius.round};
      border-bottom-right-radius: ${theme.borderRadius.round};
      font-size: 24px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${theme.colors.red};
      color: ${theme.colors.white};
      cursor: pointer;

      .icon {
        width: ${theme.fonts.size.P3};
        height: ${theme.fonts.size.P3};
      }

      /* behaviour on delete-button hover */
      :hover {
        .icon {
          color: ${theme.colors.dark};
        }
        :active {
          .icon {
            color: ${theme.colors.white};
          }
        }
      }
    }
  }
  .image_wrapper {
    height: 100%;
    width: 100%;
    padding: ${theme.spacing.xxs} 4px;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .quantity {
    height: 100%;
    font-size: ${theme.fonts.size.SM};
    font-weight: ${theme.fonts.weights.light};
    color: ${theme.colors.primary};
    font-family: ${theme.fontsFamily.open};
    width: 100%;
    display: grid;
    place-content: center;
  }
  .container_price {
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
  }

  .delete-button {
    display: none;
    z-index: 1;
  }
  ${stickerAnimation}

  ${({ version }) => extraStyle[version]} /* @media (max-width: 1360px) {
    grid-template-columns: 75% 25%;
    .image_wrapper {
      display: none;
    }
  } */
`
const selectStyled = css`
  background: ${theme.colors.primary};
`

const normalStyled = css`
  background: ${theme.colors.white};
`

const extraStyle = { selectStyled, normalStyled }
