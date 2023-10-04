import { useContext, useState } from "react"
import { styled } from "styled-components"
import OrderContext from "../../../../../../../context/OrderContext"
import Message from "../../Message"
import { HiCursorClick } from "react-icons/hi"
import { BsCloudCheckFill } from "react-icons/bs"
import Form from "../../../../../../reusable-ui/forms/Form"

export default function EditForm() {
  //State

  //comportement
  //render
  const {
    existingProduct,
    setExistingProduct,
    handleEdit,
    activeTab,
    selectedCardId,
    handleBasketEdit,
    basketProducts,
    isBlured,
    setIsBlured,
    inputRef,
  } = useContext(OrderContext)

  const handleIsUpdated = (e) => {
    //COMPARAISON  AVEC LAFONCTION DEEPEQUAL??
    //LOGUER EXISTINGPRODUCT ET PRODUCTBEINGUPDATED POU VOIR CI CE SONT DES OBJETS  POSSIBLEMENT IDENTIQUES.
    const initialValue = inputRef.current._wrapperState.initialValue
    console.log(inputRef)
    // if (deepEqual(productBeingUpdated, existingProduct) && isBlured) {
    //   console.log("allgod")
    // }
  }

  const handleBlur = (e) => {
    setIsBlured(true)
    const timer = setTimeout(() => {
      setIsBlured(false)
    }, 2000)
    handleIsUpdated(e)
    return () => clearTimeout(timer)
  }

  const handleChange = (e) => {
    const name = e.target.name
    const newValue = e.target.value
    const productBeingUpdated = {
      ...existingProduct,
      [name]: newValue,
    }

    const productExistingBasket = basketProducts.find(
      (productExistingBasket) => productExistingBasket.id === existingProduct.id
    )

    setExistingProduct(productBeingUpdated)
    handleEdit(productBeingUpdated)
    if (productExistingBasket) {
      handleBasketEdit(productBeingUpdated)
    }
  }

  return selectedCardId != null ? (
    <Form
      action={"submit"}
      product={existingProduct}
      index={activeTab}
      onChange={handleChange}
      onBlur={(e) => handleIsUpdated(e)}
    >
      {!isBlured ? (
        <Message
          label={
            "Cliquer sur un produit du menu pour le modifier en temps réel"
          }
          version="smallPrimary"
          className="message"
        />
      ) : (
        <Message
          icon={<BsCloudCheckFill />}
          label={"Modifications enregistré"}
          version="update"
        />
      )}
    </Form>
  ) : (
    <Message
      label={"Cliquer sur un produit pour le modifier"}
      icon={<HiCursorClick />}
    />
  )
}

const EditFormStyled = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
`
