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
  justify-content: flex-end;
  align-items: flex-start;
  gap: 15px;
  .picture {
    background-color: blue;
  }
  .desc {
    background-color: blue;
  }
  .title {
    background: green;
  }
  .infos {
    background: green;

    .price {
      background: orange;
    }
    .button {
      background: orange;
    }
  }
`
