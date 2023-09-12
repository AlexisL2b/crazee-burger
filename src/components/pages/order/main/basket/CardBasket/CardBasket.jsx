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
      {/* <div className="delete">
        <i></i>
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
    font-weight: ${theme.fonts.weights.light};
    color: ${theme.colors.primary};
    font-family: ${theme.fontsFamily.open};
    width: 100%;
    display: grid;
    place-content: center;
  }

  .delete {
    background: #e25549;
    height: 86px;
    width: 120%;
    position: relative;
    left: 5px;
    bottom: 8px;
    /* margin: -8px -13px; */
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    display: grid;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 24px;
    cursor: pointer;
    &:hover {
      color: black;
    }
    &:active {
      color: white;
    }
  }
`
