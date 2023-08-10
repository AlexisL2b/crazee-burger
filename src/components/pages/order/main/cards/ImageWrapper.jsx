import React from "react"
import styled from "styled-components"

export default function ImageWrapper({ imageSource }) /*propsDrilling*/ {
  return (
    <ImageWrapperStyled>
      <img src={imageSource} alt="" />
    </ImageWrapperStyled>
  )
}

const ImageWrapperStyled = styled.div`
  position: relative;
  width: 200px;
  height: 145px;
  background-image: url();
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* l'image couvre tout le conteneur */
  }
`
