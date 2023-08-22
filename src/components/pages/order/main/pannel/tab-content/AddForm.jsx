import React from "react"
import { styled } from "styled-components"

export default function AddForm() {
  return (
    <AddFormStyled className="container_form">
      <form className="form" action=""></form>
    </AddFormStyled>
  )
}

const AddFormStyled = styled.div`
  background-color: red;
  height: 100%;
  .form {
    background-color: ;
  }
`
