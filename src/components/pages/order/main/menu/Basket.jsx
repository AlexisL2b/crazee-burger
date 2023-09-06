import React from "react"
import { styled } from "styled-components"

export default function Basket() {
  return (
    <BasketStyled>
      <div className="price">Price</div>
      <div className="content">Content</div>
      <div className="footer">Footer</div>
    </BasketStyled>
  )
}

const BasketStyled = styled.div`
  height: 100%;
  grid-row: span 3;
  background: red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .price {
    background: orange;
    border: 1px solid purple;
  }
  .content {
    background: orange;
    border: 1px solid purple;
  }
  .footer {
    background: orange;
    border: 1px solid purple;
  }
`
