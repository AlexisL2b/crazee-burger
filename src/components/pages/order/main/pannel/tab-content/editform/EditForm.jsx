import { useContext, useState } from "react"
import { styled } from "styled-components"
import OrderContext from "../../../../../../../context/OrderContext"
import Message from "../../Message"
import { HiCursorClick } from "react-icons/hi"
import { BsCloudCheckFill } from "react-icons/bs"
import Form from "../../../../../../reusable-ui/forms/Form"

export default function EditForm() {
  //State
  const [onFocus, setOnFocus] = useState()
  //comportement

  const {
    existingProduct,
    setExistingProduct,
    handleEdit,
    userName,
    activeTab,
    selectedCardId,
    handleBasketEdit,
    basketProducts,
    isVisible: isSaved,
    setIsVisible: setIsSaved,
  } = useContext(OrderContext)

  // const handleIsUpdated = (e) => {
  //   //COMPARAISON  AVEC LAFONCTION DEEPEQUAL??
  //   //LOGUER EXISTINGPRODUCT ET PRODUCTBEINGUPDATED POU VOIR CI CE SONT DES OBJETS  POSSIBLEMENT IDENTIQUES.
  //   const initialValue = inputRef.current._wrapperState.initialValue
  //   console.log(inputRef)
  //   const name = e.target.name
  //   if{existingProduct[name]!=}
  //   // if (deepEqual(productBeingUpdated, existingProduct) && isBlured) {
  //   //   console.log("allgod")
  //   // }
  // }

  const handleOnFocus = (e) => {
    const valueOnFocus = e.target.value
    setOnFocus(valueOnFocus)
  }

  const handleBlur = (e) => {
    const valueOnBlur = e.target.value
    if (onFocus != valueOnBlur) {
      setIsSaved(true)
      const timer = setTimeout(() => {
        setIsSaved(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
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
    handleEdit(productBeingUpdated, userName)
    if (productExistingBasket) {
      handleBasketEdit(productBeingUpdated)
    }
  }

  //render

  return selectedCardId != null ? (
    <Form
      action={"submit"}
      product={existingProduct}
      index={activeTab}
      onChange={handleChange}
      onBlur={(e) => handleBlur(e)}
      onFocus={handleOnFocus}
    >
      <Message
        label={
          isSaved
            ? "Modifications enregistré"
            : "Cliquer sur un produit du menu pour le modifier en temps réel"
        }
        version={isSaved ? "update" : "smallPrimary"}
        icon={isSaved ? <BsCloudCheckFill /> : null}
      />
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
