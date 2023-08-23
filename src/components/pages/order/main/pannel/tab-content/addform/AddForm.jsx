import React, { useContext, useState } from "react"
import { styled } from "styled-components"
import ImageWrapper from "../../../../../../reusable-ui/cards/ImageWrapper"
import OrderContext from "../../../../../../../context/OrderContext"
import RightSide from "./RightSide"

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
    <AddFormStyled className="container_form">
      <form className="form" action="submit" onSubmit={handleSubmit}>
        <ImageWrapper
          imageSource={link ? link : "/assets/coming-soon.png"}
          className={"add_picture"}
        />
        <RightSide
          key={Date.now()}
          link={link}
          name={name}
          price={price}
          setLink={setLink}
          setName={setName}
          setPrice={setPrice}
        />
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

    .add_picture {
      width: 215px;
      height: 120px;
    }
  }
`
