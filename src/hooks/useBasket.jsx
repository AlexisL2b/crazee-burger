import { useState } from "react"

import { getDeepClone, setLocalStorage } from "../utils/windows"
import { keyframes } from "styled-components"
import { convertStringToBoolean } from "../utils/bool"

export const useBasket = () => {
  //State

  const [basketProducts, setBasketProducts] = useState([])
  const [total, setTotal] = useState({})

  const handleAddBasketProduct = (newBasketProduct, userName) => {
    const basketProductExisiting = basketProducts.find(
      (product) => product.id === newBasketProduct.id
    )

    if (basketProductExisiting) {
      basketProductExisiting.quantity += 1
      const copyBasketProduct = getDeepClone(basketProducts)
      setBasketProducts(copyBasketProduct)
      setLocalStorage(userName, copyBasketProduct)

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

    // Cette variable contient le produit ce situant dans le basket dont l'id est === a l'id du produit ce situant dans le formulaire d'édition.
    const ProductToEdit = basketProducts.find(
      (product) => product.id === productBeingEdited.id
    )

    // productsCopy[idOfProductToEdit] = productBeingEdited

    //Cette objet est créé
    const productBeingEditedUpdated = {
      quantity: ProductToEdit.quantity,
      ...productBeingEdited,
    }

    const { quantity, ...restOfProperties } = productBeingEditedUpdated
    console.log(productBeingEditedUpdated)
    Object.assign(ProductToEdit, restOfProperties)

    //good

    const basketProductExisiting = basketProducts.find(
      (product) => product.id === productBeingEdited.id
    )
    const basketProductAvailable = basketProducts.find(
      (product) => convertStringToBoolean(product.isAvailable) === true
    )

    // Je récupère un  object basketProductsIdToPrice, basé sur basketProducts a condition qu'il soit dispo.
    const basketProductsIdToPrice = basketProducts
      .filter((product) => convertStringToBoolean(product.isAvailable) == true)
      .reduce((acc, product) => {
        acc[product.id] = product.price
        return acc
      }, {})
    const copyTotal = getDeepClone(total)
    const priceUpdated =
      basketProductExisiting.price * basketProductExisiting.quantity

    const copyTotalUpdated = {
      ...copyTotal,
      [basketProductExisiting.id]: priceUpdated,
    }
    // Je récupère un nouvel object a partir de l'objet copyTotalUpdated(cet objet réunis tout les prix et les id des objet dans le panier AVANT le filtrage des produit dispo)
    // et basketProductsIdToPrice (cette objet contient tout les prix/id des produits dans le basket qui sont DISPO) qui nous sert de comparateur pour enssuite créer un objet "updaté" et set le Total avec.
    const filteredCopyTotalUpdated = Object.keys(copyTotalUpdated)
      .filter((key) => key in basketProductsIdToPrice)
      .reduce((acc, key) => {
        acc[key] = copyTotalUpdated[key]
        return acc
      }, {})
    console.log(filteredCopyTotalUpdated)

    setTotal(filteredCopyTotalUpdated)
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

// A teste :

/**
 * Convertire total en number et plus un objet
 *
 *
 *
 */
