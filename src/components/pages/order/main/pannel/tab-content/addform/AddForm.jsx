import React, { useContext } from "react"
import { styled } from "styled-components"
import OrderContext from "../../../../../../../context/OrderContext"
import Form from "../../../../../../reusable-ui/forms/Form"
import { EMPTY_PRODUCT } from "../../../../../../../enums/product"
import Message from "../../Message"
import { FiCheckCircle } from "react-icons/fi"
import PrimaryButton from "../../../../../../reusable-ui/PrimaryButton"
import { stringToBoolean } from "../../../../../../../utils/bool"

export default function AddForm() {
  //state
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
  }

  const handleClick = (e) => {
    const name = e.currentTarget.htmlFor
    const newValue = e.currentTarget.dataset.ischecked
    setNewProduct({ ...newProduct, [name]: stringToBoolean(newValue) })
    console.log(newProduct)
    // handleChange(e)
  }
  //affichage

  return (
    <Form
      action="submit"
      onSubmit={handleSubmit}
      product={newProduct}
      onChange={handleChange}
      index={activeTab}
      onClick={(e) => handleClick(e)}
    >
      <PrimaryButton
        label="Ajouter un nouveau produit au menu"
        version="success"
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
