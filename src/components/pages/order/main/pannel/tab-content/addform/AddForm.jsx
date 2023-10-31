import React, { useContext, useState } from "react"
import { styled } from "styled-components"
import OrderContext from "../../../../../../../context/OrderContext"
import Form from "../../../../../../reusable-ui/forms/Form"
import { EMPTY_PRODUCT } from "../../../../../../../enums/product"
import Message from "../../Message"
import { FiCheckCircle } from "react-icons/fi"
import PrimaryButton from "../../../../../../reusable-ui/PrimaryButton"

export default function AddForm() {
  //state
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const {
    newProduct,
    activeTab,
    setNewProduct,
    setIsVisible,
    handleAdd,
    isVisible,
    userName,
  } = useContext(OrderContext)
  //comportement

  const handleSubmit = (e) => {
    e.preventDefault()
    const newProductToAdd = {
      id: new Date().getTime(),
      ...newProduct,
    }
    handleAdd(newProductToAdd, userName)
    setIsVisible(true)
    setNewProduct(EMPTY_PRODUCT)
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2000)
    return () => clearTimeout(timer)
  }
  const handleChange = (e) => {
    const name = e.target.name
    const newValue = e.target.value
    setNewProduct({ ...newProduct, [name]: newValue })
    console.log(windowWidth)
  }

  //affichage

  return (
    <Form
      action="submit"
      onSubmit={handleSubmit}
      product={newProduct}
      onChange={handleChange}
      index={activeTab}
      // onClick={(e) => handleClick(e)}
    >
      <PrimaryButton
        label={
          windowWidth > 480
            ? "Ajouter un nouveau produit au menu"
            : "Ajouter un nouveau produit"
        }
        version="success"
        className="custom-button"
      />
      <Message
        className={isVisible ? "visible" : "invisible"}
        icon={<FiCheckCircle />}
        label={"Ajouté avec succés"}
        version="success"
      />
    </Form>
  )
}

const AddFormStyled = styled.div`
  height: 100%;
  width: 100%;
`
