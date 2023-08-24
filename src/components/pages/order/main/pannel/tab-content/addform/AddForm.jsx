import React, { useContext, useState } from "react"
import { styled } from "styled-components"
import ImageWrapper from "../../../../../../reusable-ui/cards/ImageWrapper"
import OrderContext from "../../../../../../../context/OrderContext"
import InputFields from "./InputFields"
import ButtonConfirmation from "./ButtonConfirmation"
const EMPTY_PRODUCT = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
}
export default function AddForm() {
  //state

  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)

  const { setIsVisible, handleAdd } = useContext(OrderContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newProductToAdd = {
      id: new Date().getMinutes(),
    }
    handleAdd(newProductToAdd)
    setIsVisible(true)
  }
  const handleChange = (e) => {
    const name = e.target.name
    const newValue = e.target.value
    setNewProduct({ ...newProduct, [name]: newValue })
  }
  //affichage

  return (
    <AddFormStyled
      className="container_form"
      action="submit"
      onSubmit={handleSubmit}
    >
      <ImageWrapper
        imageSource={
          newProduct.imageSource
            ? newProduct.imageSource
            : "/assets/coming-soon.png"
        }
        className={"add_picture"}
      />
      <InputFields
        className={"input_fields"}
        link={newProduct.link ? newProduct.link : "/assets/coming-soon.png"}
        name={newProduct.title ? newProduct.title : ""}
        price={newProduct.price ? newProduct.price : ""}
        onChange={handleChange}
      />
      <ButtonConfirmation className={"button_confirmation"} />
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
  height: 90%;
  width: 70%;
  display: grid;

  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);

  .add_picture {
    width: 215px;
    height: 120px;
  }
  .input_fields {
    grid-area: 1/2/4/2;
  }
  .button_confirmation {
    grid-area: 4/2/4/2;
  }
`
