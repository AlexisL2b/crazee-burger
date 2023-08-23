import React from "react"
import styled from "styled-components"

export default function ImageWrapper({
  imageSource,
  className,
}) /*propsDrilling*/ {
  return (
    <ImageWrapperStyled className={className}>
      <img src={imageSource} />
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
