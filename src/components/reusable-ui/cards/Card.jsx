import styled, { css } from "styled-components"
import { theme } from "../../../theme"
import ImageWrapper from "./ImageWrapper"
import Desc from "./Desc"
import DeleteButton from "./DeleteButton"
import { EMPTY_BY_DEFAULT_PICTURE } from "../../../enums/product"
import Ribbon from "./Ribbon"
import IsAvailable from "../IsAvailable"
import { animations } from "../../../theme/animations"
import { convertStringToBoolean } from "../../../utils/bool"

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
  existingProduct,
  ribon,
  available,
  overlapImage,
  isOverlapImageVisible,
  disabled,
}) {
  return (
    <CardStyled
      className={className}
      id={id}
      onClick={isAdmin ? onClick : null}
      version={version}
    >
      {/* {convertStringToBoolean(product.isAdvertised) ? <Ribbon /> : null} */}
      {isAdmin && (
        <DeleteButton
          onClick={onDelete}
          version={
            version === "selectStyled" ? "secondaryStyled" : "primaryStyled"
          }
        />
      )}
      <div className="image">
        {isOverlapImageVisible && (
          <div className="overlap">
            <div className="transparent-layer"></div>
            <img className="overlap-image" src={overlapImage} alt="" />
          </div>
        )}
        <ImageWrapper
          name={"image_wrapper"}
          imageSource={imageSource ? imageSource : EMPTY_BY_DEFAULT_PICTURE}
          className={"card_picture"}
        />
      </div>
      <Desc
        idCard={id}
        name={"desc"}
        priceProduct={priceProduct}
        title={title}
        cardVersion={version}
        product={product}
        disabled={isOverlapImageVisible}
      />
    </CardStyled>
  )
}

const CardStyled = styled.div`
  position: relative;
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
    /* scale: calc(1.05);
    transition: ease-in-out 0.5; */
    box-shadow: 0px 0px 8px 0px #ff9a23;
  }
  .image {
    /* border: 2px solid green; */
    margin-top: 30px;
    margin-bottom: 20px;
    /* position: relative; */
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .card_picture {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .overlap-image {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 80%;
      height: 100%;
      z-index: 1;
      animation: ${animations.fadeInFromTop} 500ms;
      border-radius: ${theme.borderRadius.extraRound};
    }
    .overlap {
      .transparent-layer {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 70%;
        background: snow;
        z-index: 1;
        border-radius: ${theme.borderRadius.extraRound};
      }
    }
  }
  ${({ version }) => extraStyle[version]}
`

const selectStyled = css`
  background: ${theme.colors.primary};
`

const normalStyled = css`
  background: ${theme.colors.white};
`

// const outofstockselected = css`
//   background-color: #ffc676;
// `

const extraStyle = { selectStyled, normalStyled }
