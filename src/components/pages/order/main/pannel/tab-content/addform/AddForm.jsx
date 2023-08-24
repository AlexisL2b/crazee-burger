import React, { useContext, useState } from "react"
import { styled } from "styled-components"
import ImageWrapper from "../../../../../../reusable-ui/cards/ImageWrapper"
import OrderContext from "../../../../../../../context/OrderContext"
import InputFields from "./InputFields"
import ButtonConfirmation from "./ButtonConfirmation"

export default function AddForm() {
  //state
  const [link, setLink] = useState("")
  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)
  const { setIsVisible, handleAdd } = useContext(OrderContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    const newProduct = {
      id: new Date().getTime(),
      imageSource: link ? link : "/assets/coming-soon.png",
      title: name,
      price: price,
    }

    handleAdd(newProduct)
    setLink("")
    setName("")
    setPrice("")
    setIsVisible(true)
  }
  const handleChange = (e) => {
    console.log(price)
    if (e.currentTarget.name === "name") {
      setName(e.currentTarget.value)
    } else if (e.currentTarget.name === "link") {
      setLink(e.currentTarget.value)
    } else if (e.currentTarget.name === "price") {
      setPrice(e.currentTarget.value)
    }
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
        className={"input_fields"}
        link={link ? link : ""}
        name={name ? name : ""}
        price={price ? price : ""}
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
