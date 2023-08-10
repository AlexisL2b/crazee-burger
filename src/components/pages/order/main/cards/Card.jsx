import React from "react"
import styled from "styled-components"
import PrimaryButton from "../../../../reusable-ui/PrimaryButton"
import { theme } from "../../../../../theme"

export default function Card() {
  return (
    <CardStyled>
      <div className="picture"></div>
      <div className="desc">
        <h1>BURGER</h1>
        <div className="infos">
          <div className="price">Price</div>
          <PrimaryButton label="Ajouter" className="card_button" />
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

  border-radius: 15px;
  background: #fff;
  box-shadow: -8px 8px 20px 0px rgba(0, 0, 0, 0.2);
  .picture {
    width: 200px;
    height: 145px;
    background-image: url("/images/burger-bacon-egg.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .desc {
    display: flex;
    padding: 0px 5px 5px 5px;
    flex-direction: column;
    align-items: flex-start;
    gap: -7.5px;
  }
  .title {
    display: flex;
    height: 46px;
    flex-direction: column;
    justify-content: center;
  }
  .infos {
    display: flex;
    align-items: center;

    .price {
      color: ${theme.colors.pri};
      display: flex;
      padding: 22.25px 50px 22.25px 0px;
      align-items: flex-start;
    }
    .card_button {
      display: flex;
      height: 38px;
      padding: 12px 26.3px 12px 26.5px;
      justify-content: center;
      align-items: center;
      border: 1px solid ${theme.colors.primary};
    }
  }
`
