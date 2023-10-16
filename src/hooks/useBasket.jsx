import { useState } from "react"

import { getDeepClone, setLocalStorage } from "../utils/windows"
import { keyframes } from "styled-components"

export const useBasket = () => {
  //State

  const [basketProducts, setBasketProducts] = useState([])
  const [total, setTotal] = useState({})

  const handleAddBasketProduct = (newBasketProduct, userName) => {
    const basketProductExisiting = basketProducts.find(
      (product) =>
        product.id === newBasketProduct.id && product.isAvailable === true
    )

    const basketProductExisitingAvailable = basketProducts.find(
      (product) =>
        product.id === newBasketProduct.id &&
        product.isAvailable === newBasketProduct.isAvailable
    )

    if (basketProductExisiting) {
      basketProductExisiting.quantity += 1
      const copyBasketProduct = getDeepClone(basketProducts)
      setBasketProducts(copyBasketProduct)
      setLocalStorage(userName, copyBasketProduct)
      //Filtrer les produit qui sont dispo ex

      const copyBasketFilter = copyBasketProduct.filter(
        (product) => product.isAvailable === true
      )

      const copyTotal = getDeepClone(total)
      const priceUpdated =
        basketProductExisiting.price * basketProductExisiting.quantity

      const copyTotalUpdated = {
        ...copyTotal,
        [basketProductExisiting.id]: priceUpdated,
      }

      setTotal(copyTotalUpdated)
      setLocalStorage("total", copyTotalUpdated)
    } else {
      setBasketProducts([
        { ...newBasketProduct, quantity: 1 },
        ...basketProducts,
      ])
      setLocalStorage(userName, newBasketProduct)
      const copyTotal = getDeepClone(total)
      const copyTotalUpdated = {
        [newBasketProduct.id]: newBasketProduct.price,
        ...copyTotal,
      }
      setTotal(copyTotalUpdated)
      setLocalStorage("total", copyTotalUpdated)
    }
  }

  const handleDeleteBasketProduct = (idProductToDelete, userName) => {
    const copyBasketProduct = getDeepClone(basketProducts)
    const productToDecrement = copyBasketProduct.find(
      (product) => product.id == idProductToDelete
    )

    productToDecrement.quantity += 0
    const basketFilter = copyBasketProduct.filter(
      (product) => product.id !== idProductToDelete
    )

    const priceToDelete = idProductToDelete
    const copyTotalUpdated = getDeepClone(total)
    delete copyTotalUpdated[priceToDelete]

    setTotal(copyTotalUpdated)
    setLocalStorage("total", copyTotalUpdated)

    setBasketProducts(basketFilter)
    setLocalStorage(userName, basketFilter)
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
    setLocalStorage("total", copyTotalUpdated)
  }

  return {
    handleAddBasketProduct,
    basketProducts,
    total,
    handleDeleteBasketProduct,
    handleBasketEdit,
    setBasketProducts,
    setTotal,
  }
}
