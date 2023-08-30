import React, { useContext, useState } from "react"
import { styled } from "styled-components"
import ImageWrapper from "../../../../../../reusable-ui/cards/ImageWrapper"
import OrderContext from "../../../../../../../context/OrderContext"
import InputFields from "./InputFields"
import ButtonConfirmation from "./ButtonConfirmation"
// const EMPTY_PRODUCT = {
//   title: "",
//   imageSource: "",
//   price: 0,
// }
const EMPTY_NO_IMAGE = "/assets/no_image.png"
export default function AddForm() {
  //state
  const { newProduct, handleSubmit, handleChange } = useContext(OrderContext)
  // const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)

  // const { setIsVisible, handleAdd } = useContext(OrderContext)

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const newProductToAdd = {
  //     id: new Date().getTime(),
  //     ...newProduct,
  //   }
  //   handleAdd(newProductToAdd)
  //   setIsVisible(true)
  //   setNewProduct(EMPTY_PRODUCT)
  //   console.log(products)
  // }
  // const handleChange = (e) => {
  //   const name = e.target.name
  //   const newValue = e.target.value
  //   setNewProduct({ ...newProduct, [name]: newValue })
  // }
  //affichage

  return (
    <AddFormStyled
      className="container_form"
      action="submit"
      onSubmit={handleSubmit}
    >
      <div className="image_preview">
        {newProduct.imageSource ? (
          <ImageWrapper
            imageSource={newProduct.imageSource}
            className={"add_picture"}
          />
        ) : (
          <ImageWrapper imageSource={EMPTY_NO_IMAGE} className={"no_image"} />
        )}
      </div>

      <InputFields
        className={"input_fields"}
        link={
          newProduct.imageSource
            ? newProduct.imageSource
            : "/assets/coming-soon.png"
        }
        newProduct={newProduct}
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

  .input_fields {
    grid-area: 1/2/4/2;
    grid-row-gap: 8px;
  }
  .button_confirmation {
    grid-area: 4/2/4/2;
  }
  .image_preview {
    width: 215px;
    height: 120px;
  }
  .add_picture {
    height: 100%;
    width: 100%;
  }
  .no_image {
    height: 100%;
    width: 100%;
  }
`
