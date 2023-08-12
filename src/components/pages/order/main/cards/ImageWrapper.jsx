import React from "react"
import styled from "styled-components"

export default function ImageWrapper({ imageSource }) /*propsDrilling*/ {
  return (
    <ImageWrapperStyled>
      <img src={imageSource} />
    </ImageWrapperStyled>
  )
}

const ImageWrapperStyled = styled.div`
  width: 100%;
  height: auto;
  margin-top: 30px;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  /* border: 1px solid blue;
  margin-top: 30px;
  width: 200px;
  height: 145px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  } */
`
