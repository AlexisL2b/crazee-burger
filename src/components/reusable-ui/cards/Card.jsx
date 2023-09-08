import styled, { css } from "styled-components"
import { theme } from "../../../theme"
import ImageWrapper from "./ImageWrapper"
import Desc from "./Desc"
import DeleteButton from "./DeleteButton"
import { EMPTY_BY_DEFAULT_PICTURE } from "../../../enums/product"

export default function Card({
  id,
  imageSource,
  title,
  priceProduct,
  className,
  onDelete,
  isAdmin,
  onClick,
  version,
  product,
}) {
  return (
    <CardStyled
      className={className}
      id={id}
      onClick={isAdmin ? onClick : null}
      version={version}
    >
      {isAdmin && (
        <DeleteButton
          onClick={onDelete}
          version={
            version === "selectStyled" ? "secondaryStyled" : "primaryStyled"
          }
        />
      )}
      <ImageWrapper
        name={"image_wrapper"}
        imageSource={imageSource ? imageSource : EMPTY_BY_DEFAULT_PICTURE}
        className={"card_picture"}
      />
      <Desc
        idCard={id}
        name={"desc"}
        priceProduct={priceProduct}
        title={title}
        cardVersion={version}
        product={product}
      />
    </CardStyled>
  )
}

const CardStyled = styled.div`
  width: 240px;
  height: 330px;
  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 20px;
  padding-bottom: 10px;
  box-shadow: ${theme.shadows.medium};
  border-radius: ${theme.borderRadius.extraRound};
  position: relative;
  transition: scale 0.3s ease;

  &:hover {
    scale: calc(1.05);
    transition: ease-in-out 0.5;
    box-shadow: 0px 0px 8px 0px #ff9a23;
  }

  .card_picture {
    width: 100%;
    height: auto;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  ${({ version }) => extraStyle[version]}
`

const selectStyled = css`
  background: ${theme.colors.primary};
`

const normalStyled = css`
  background: ${theme.colors.white};
`

const extraStyle = { selectStyled, normalStyled }
