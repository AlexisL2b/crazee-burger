import React, { useContext, useState } from "react"
import { styled } from "styled-components"
import ImageWrapper from "../../../../../reusable-ui/cards/ImageWrapper"
import { theme } from "../../../../../../theme"
import Desc from "./Desc"
import { TbTrashXFilled } from "react-icons/tb"
import OrderContext from "../../../../../../context/OrderContext"

export default function CardBasket({
  title,
  price,
  imageSource,
  quantity,
  onDelete,
}) {
  const [hovered, setHovered] = useState(false)
  const { isAdmin } = useContext(OrderContext)

  return (
    <CardBasketStyled
      onMouseEnter={isAdmin ? () => setHovered(true) : null}
      onMouseLeave={isAdmin ? () => setHovered(false) : null}
    >
      <ImageWrapper className={"image"} imageSource={imageSource} />
      <Desc title={title} price={price} />

      <div className="container">
        {hovered ? (
          <div className="delete" onClick={onDelete}>
            <i>
              <TbTrashXFilled />
            </i>
          </div>
        ) : (
          <span className="quantity">x{quantity}</span>
        )}
      </div>
    </CardBasketStyled>
  )
}
const CardBasketStyled = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  height: 86px;
  padding: ${theme.spacing.xs} 16px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.md};
  box-shadow: ${theme.shadows.basket};
  .image {
    height: 70px;

    width: 85px;
  }

  .quantity {
    height: 70px;
    font-size: ${theme.fonts.size.SM};
    font-weight: ${theme.fonts.weights.light};
    color: ${theme.colors.primary};
    font-family: ${theme.fontsFamily.open};
    width: 100%;
    display: grid;
    place-content: center;
  }

  .delete {
    background: ${theme.colors.red};
    height: 86px;
    width: 120%;
    position: relative;
    left: 5px;
    bottom: 8px;
    /* margin: -8px -13px; */
    border-top-right-radius: ${theme.borderRadius.round};
    border-bottom-right-radius: ${theme.borderRadius.round};
    display: grid;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P3};
    cursor: pointer;
    &:hover {
      color: ${theme.colors.dark};
    }
    &:active {
      color: ${theme.colors.white};
    }
  }
`
