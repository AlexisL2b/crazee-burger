import React from "react"
import { styled } from "styled-components"
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton"

export default function AddForm() {
  return (
    <AddFormStyled className="container_form">
      <form className="form" action="">
        <div className="picture">
          <img src="https://picsum.photos/200" alt="" />
        </div>
        <div className="right_side">
          Right
          <input type="text" name="" id="" placeholder="Nom" />
          <input type="text" name="" id="" placeholder="Lien" />
          <input type="text" name="" id="" placeholder="Prix" />
          <PrimaryButton />
        </div>
      </form>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.div`
  height: 100%;
  display: grid;
  align-items: center;
  justify-content: flex-start;
  padding-left: 70px;

  .form {
    display: inline-flex;
    gap: 20px;

    .pictue {
      background-color: blue;
    }
    .right_side {
      background-color: blue;
      display: flex;
      flex-direction: column;
      gap: 8px;
      input {
        background-color: green;
        padding: 8px 16px 8px 24px;
        width: 605px;
        height: 19px;
      }
    }
  }
`
