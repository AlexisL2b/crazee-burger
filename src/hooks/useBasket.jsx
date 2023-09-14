import { useState } from "react"
import { fakeBasket } from "../components/fakeData/fakeBasket"
import { getDeepClone } from "../utils/windows"
import { keyframes } from "styled-components"

export const useBasket = () => {
  //State

  const [basketProducts, setBasketProducts] = useState(fakeBasket.EMPTY)
  const [total, setTotal] = useState({})

  const handleAddBasketProduct = (newBasketProduct) => {
    const basketProductExisiting = basketProducts.find(
      (product) => product.id === newBasketProduct.id
    )

    if (basketProductExisiting) {
      basketProductExisiting.quantity += 1
      const copyBasketProduct = getDeepClone(basketProducts)
      setBasketProducts(copyBasketProduct)

      const copyTotal = getDeepClone(total)
      const priceUpdated =
        basketProductExisiting.price * basketProductExisiting.quantity

      const copyTotalUpdated = {
        ...copyTotal,
        [basketProductExisiting.id]: priceUpdated,
      }
      console.log(copyTotalUpdated)
      setTotal(copyTotalUpdated)
    } else {
      setBasketProducts([
        { ...newBasketProduct, quantity: 1 },
        ...basketProducts,
      ])

      const copyTotal = getDeepClone(total)
      const copyTotalUpadted = {
        [newBasketProduct.id]: newBasketProduct.price,
        ...copyTotal,
      }
      setTotal(copyTotalUpadted)
    }
  }

  const handleDeleteBasketProduct = (idProductToDelete) => {
    const copyBasketProduct = getDeepClone(basketProducts)
    const productToDecrement = copyBasketProduct.find(
      (product) => product.id == idProductToDelete
    )

    productToDecrement.quantity += 0
    const basketFilter = copyBasketProduct.filter(
      (product) => product.id !== idProductToDelete
    )

    const priceToDelete = idProductToDelete
    const copyTotal = getDeepClone(total)
    delete copyTotal[priceToDelete]
    setTotal(copyTotal)
    setBasketProducts(basketFilter)
  }
  const handleBasketEdit = (productBeingEdited) => {
    // 1. copie du state (deep clone)
    const productsCopy = getDeepClone(basketProducts)

    // 2. manip de la copie du state
    const ProductToEdit = basketProducts.find(
      (product) => product.id === productBeingEdited.id
    )
    // productsCopy[idOfProductToEdit] = productBeingEdited

    const productBeingEditedUpdated = {
      quantity: ProductToEdit.quantity,
      ...productBeingEdited,
    }

    const { quantity, ...restOfProperties } = productBeingEditedUpdated

    Object.assign(ProductToEdit, restOfProperties)

    //good

    // console.log(productBeingEdited)

    const basketProductExisiting = basketProducts.find(
      (product) => product.id === productBeingEdited.id
    )
    const copyTotal = getDeepClone(total)
    const priceUpdated =
      basketProductExisiting.price * basketProductExisiting.quantity

    const copyTotalUpdated = {
      ...copyTotal,
      [basketProductExisiting.id]: priceUpdated,
    }
    setTotal(copyTotalUpdated)
  }

  return {
    handleAddBasketProduct,
    basketProducts,
    total,
    handleDeleteBasketProduct,
    handleBasketEdit,
  }
}
