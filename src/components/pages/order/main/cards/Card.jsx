import React from "react"
import styled from "styled-components"

export default function Card() {
  return (
    <CardStyled>
      <div className="picture">IMAGE</div>
      <div className="desc">
        DESCRIPTION <div className="title">TITRE</div>
        <div className="infos">
          INFOS <div className="price">Price</div>
          <div className="button">Button</div>
        </div>
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
  background-color: red;
  display: flex;
  width: 240px;
  padding: 50px 20px 10px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  .picture {
    background-color: blue;
    width: 200px;
    height: 145px;
  }
  .desc {
    background-color: blue;
    display: flex;
    padding: 0px 5px 5px 5px;
    flex-direction: column;
    align-items: flex-start;
    gap: -7.5px;
  }
  .title {
    background: green;
    display: flex;
    height: 46px;
    flex-direction: column;
    justify-content: center;
  }
  .infos {
    background: green;
    display: flex;
    align-items: center;

    .price {
      background: orange;

      display: flex;
      padding: 22.25px 50px 22.25px 0px;
      align-items: flex-start;
    }
    .button {
      background: orange;
      display: flex;
      width: 95px;
      height: 38px;
      padding: 12px 26.3px 12px 26.5px;
      justify-content: center;
      align-items: center;
    }
  }
`
