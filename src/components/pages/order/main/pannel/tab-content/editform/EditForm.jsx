import { useContext, useState } from "react"
import { styled } from "styled-components"
import OrderContext from "../../../../../../../context/OrderContext"
import Message from "../../Message"
import { HiCursorClick } from "react-icons/hi"
import { BsCloudCheckFill } from "react-icons/bs"
import Form from "../../../../../../reusable-ui/forms/Form"
import { ADMIN_TAB } from "../../../../../../../enums/message"
import { convertStringToBoolean } from "../../../../../../../utils/bool"

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
    console.log(newValue)
    const productBeingUpdated = {
      ...existingProduct,
      [name]: newValue,
    }
    convertStringToBoolean(newValue)
    console.log(name + " : " + convertStringToBoolean(newValue))
    const productExistingBasket = basketProducts.find(
      (productExistingBasket) => productExistingBasket.id === existingProduct.id
    )

    setExistingProduct(productBeingUpdated)
    handleEdit(productBeingUpdated, userName)
    if (productExistingBasket) {
      handleBasketEdit(productBeingUpdated)
    }
  }
  convertStringToBoolean

  // const handleClick = (e) => {
  //   const name = e.currentTarget.htmlFor
  //   const newValue = e.currentTarget.dataset.ischecked

  //   const productBeingUpdated = {
  //     ...existingProduct,
  //     [name]: stringToBoolean(newValue),
  //   }
  //   const productExistingBasket = basketProducts.find(
  //     (productExistingBasket) => productExistingBasket.id === existingProduct.id
  //   )
  //   setExistingProduct(productBeingUpdated)
  //   handleEdit(productBeingUpdated, userName)
  //   if (productExistingBasket) {
  //     handleBasketEdit(productBeingUpdated)
  //   }
  // }
  //render

  return selectedCardId != null ? (
    <Form
      action={"submit"}
      product={existingProduct}
      index={activeTab}
      onChange={handleChange}
      onBlur={(e) => handleBlur(e)}
      onFocus={handleOnFocus}
      // onClick={(e) => handleClick(e)}
    >
      <Message
        label={
          isSaved
            ? ADMIN_TAB.UPDATE_CONFIRMATION
            : ADMIN_TAB.UPDATE_HINT_SECONDARY
        }
        version={isSaved ? "update" : "smallPrimary"}
        icon={isSaved ? <BsCloudCheckFill /> : null}
      />
    </Form>
  ) : (
    <Message label={ADMIN_TAB.UPDATE_HINT_PRIMARY} icon={<HiCursorClick />} />
  )
}

const EditFormStyled = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
`
