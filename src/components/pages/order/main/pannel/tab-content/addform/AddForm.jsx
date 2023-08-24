import React, { useContext, useState } from "react"
import { styled } from "styled-components"
import ImageWrapper from "../../../../../../reusable-ui/cards/ImageWrapper"
import OrderContext from "../../../../../../../context/OrderContext"
import InputFields from "./InputFields"
import ButtonConfirmation from "./ButtonConfirmation"

export default function AddForm() {
  //state
  const [link, setLink] = useState("")
  const { products, setProducts, isVisible, setIsVisible } =
    useContext(OrderContext)
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const product = {
      id: Date.now(),
      imageSource: link ? link : "/assets/coming-soon.png",
      title: name,
      price: price,
    }
    const copyProducts = products.slice()
    copyProducts.unshift(product)
    setProducts(copyProducts)
    setLink("")
    setName("")
    setPrice("")
    setIsVisible(true)
  }
  //affichage
  return (
    <AddFormStyled
      className="container_form"
      action="submit"
      onSubmit={handleSubmit}
    >
      <ImageWrapper
        imageSource={link ? link : "/assets/coming-soon.png"}
        className={"add_picture"}
      />
      <InputFields
        link={link}
        name={name}
        price={price}
        setLink={setLink}
        setName={setName}
        setPrice={setPrice}
      />
      <ButtonConfirmation className={"button_confirmation"} />
    </AddFormStyled>
  )
}

const AddFormStyled = styled.form`
  border: solid 2px blue;
  height: 100%;
  display: grid;
  align-items: center;
  justify-content: flex-start;
  /* padding-left: 70px;
  padding-top: 31px;
  gap: 20px; */
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);

  .add_picture {
    width: 215px;
    height: 120px;
  }
  .button_confirmation {
    grid-area: 2/2;
  }
`
