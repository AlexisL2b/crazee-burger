import { useState } from "react"
import { fakeBasket } from "../components/fakeData/fakeBasket"
import { getDeepClone } from "../utils/windows"

export const useBasket = () => {
  //State

  const [basketProducts, setBasketProducts] = useState(fakeBasket.EMPTY)
  const [ammount, setAmmount] = useState(0)

  const handleAddBasketProduct = (newBasketProduct) => {
    const copyBasketProduct = getDeepClone(basketProducts)

    const basketProductUpdated = [newBasketProduct, ...copyBasketProduct]

    setBasketProducts(basketProductUpdated)

    console.log(newBasketProduct.ammount)
  }

  const handleIncrementationBasketProduct = (product) => {
    setAmmount((prevAmmount) => prevAmmount + 1)
    product.ammount = ammount
    console.log(product)
  }
  return {
    handleAddBasketProduct,
    basketProducts,
    handleIncrementationBasketProduct,
    ammount,
  }
}
