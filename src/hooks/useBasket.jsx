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

  const handleDeleteBasketProduct = (ProductToDelete) => {
    const copyBasketProduct = getDeepClone(basketProducts)
    const productToDecrement = copyBasketProduct.find(
      (product) => product.id == ProductToDelete.id
    )

    productToDecrement.quantity += 0
    const basketFilter = copyBasketProduct.filter(
      (product) => product.id !== ProductToDelete.id
    )

    const priceToDelete = ProductToDelete.id
    const copyTotal = getDeepClone(total)
    delete copyTotal[priceToDelete]
    setTotal(copyTotal)
    setBasketProducts(basketFilter)
  }

  return {
    handleAddBasketProduct,
    basketProducts,
    total,
    handleDeleteBasketProduct,
  }
}
