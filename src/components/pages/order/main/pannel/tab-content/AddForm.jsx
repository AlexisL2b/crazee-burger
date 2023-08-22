import React, { useContext, useState } from "react"
import { styled } from "styled-components"
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton"
import TextInput from "../../../../../reusable-ui/TextInput"
import { theme } from "../../../../../../theme"
import OrderContext from "../../../../../../context/OrderContext"

export default function AddForm() {
  //state
  const [name, setName] = useState("")
  const [link, setLink] = useState("")
  const [price, setPrice] = useState("")

  //comportement
  const handleChange = (e) => {
    if (e.currentTarget.name === "name") {
      setName(e.currentTarget.value)
    } else if (e.currentTarget.name === "link") {
      setLink(e.currentTarget.value)
    } else if (e.currentTarget.name === "price") {
      setPrice(e.currentTarget.value)
    }
  }
  const { products, setProducts } = useContext(OrderContext)
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
  }
  //affichage
  return (
    <AddFormStyled className="container_form">
      <form className="form" action="submit" onSubmit={handleSubmit}>
        <div className="picture">
          <img src={link ? link : "/assets/coming-soon.png"} alt="" />
        </div>
        <div className="right_side ">
          <TextInput
            type="text"
            name="name"
            className="input_text"
            placeholder="Nom du produit (ex: Super Burger)"
            onChange={handleChange}
            value={name}
          />
          <TextInput
            type="url"
            name="link"
            onChange={handleChange}
            className="input_text"
            placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          />
          <TextInput
            onChange={handleChange}
            name="price"
            className="input_text"
            placeholder="Prix"
            type="text"
            value={price}
          />
          <div className="add_container">
            <PrimaryButton
              label="Ajouter un nouveau produit au menu"
              className="add_button"
            />
          </div>
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

    .picture {
    }
    .right_side {
      display: flex;
      flex-direction: column;
      gap: 8px;

      .input_text {
        border: none;
        background-color: #f5f5f7;
        width: 605px;
        border-radius: 5px;
        padding: 8px 16px 8px 24px;
        input {
          background-color: #f5f5f7;
          width: 100%;
        }

        &::placeholder {
          font-size: 14px;
          color: #a7a8ad;
        }
      }
      .add_button {
        width: 50%;
        padding: 8px 16px 8px 24px;
        border: solid 2px ${theme.colors.green};
        background-color: ${theme.colors.green};
        &:hover {
          color: ${theme.colors.green};
          background-color: ${theme.colors.white};
        }
      }
    }
  }
`
