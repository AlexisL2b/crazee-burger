import { useContext } from "react"
import { styled } from "styled-components"
import ImageWrapper from "../cards/ImageWrapper"
import OrderContext from "../../../context/OrderContext"
const EMPTY_NO_IMAGE = "/assets/no_image.png"

export default function ImagePreview() {
  const { newProduct, existingProduct, activeTab } = useContext(OrderContext)

  return (
    <ImagePreviewStyled>
      {activeTab === "add" ? (
        newProduct.imageSource ? (
          <ImageWrapper
            imageSource={newProduct.imageSource}
            className={"add_picture"}
          />
        ) : (
          <ImageWrapper
            imageSource={EMPTY_NO_IMAGE}
            className={"add_picture"}
          />
        )
      ) : (
        <ImageWrapper
          imageSource={existingProduct.imageSource}
          className={"add_picture"}
        />
      )}
    </ImagePreviewStyled>
  )
}
const ImagePreviewStyled = styled.div`
  width: 215px;
  height: 150px;

  .add_picture {
    height: 100%;
    width: 100%;
  }
`
