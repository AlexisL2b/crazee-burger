import React from "react"
import styled from "styled-components"

export default function ImageWrapper({ imageSource, className }) {
  /*propsDrilling*/ const handleImageError = (e) => {
    e.target.src = "/assets/no_image.png"
  }

  return (
    <ImageWrapperStyled className={className}>
      <img src={imageSource} onError={handleImageError} />
    </ImageWrapperStyled>
  )
}

const ImageWrapperStyled = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
