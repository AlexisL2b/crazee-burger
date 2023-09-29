import React, { useContext } from "react"
import { styled } from "styled-components"
import OrderContext from "../../../../../../../context/OrderContext"
import Form from "../../../../../../reusable-ui/forms/Form"
import ButtonConfirmation from "../../../../../../reusable-ui/forms/ButtonConfirmation"
import { EMPTY_PRODUCT } from "../../../../../../../enums/product"

export default function AddForm() {
  //state
  const { newProduct, activeTab, setNewProduct, setIsVisible, handleAdd } =
    useContext(OrderContext)
  //comportement

  const handleSubmit = (e) => {
    e.preventDefault()
    const newProductToAdd = {
      id: new Date().getTime(),
      ...newProduct,
    }
    handleAdd(newProductToAdd)
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
    console.log(newProduct)
  }
  //affichage

  return (
    <Form
      action="submit"
      onSubmit={handleSubmit}
      product={newProduct}
      onChange={handleChange}
      index={activeTab}
      g
    >
      <ButtonConfirmation className={"button_confirmation"} />
    </Form>
  )
}

const AddFormStyled = styled.div`
  height: 100%;
  width: 100%;
`
