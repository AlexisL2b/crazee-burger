import { useState } from "react"
import { fakeBasket } from "../components/fakeData/fakeBasket"
import { getDeepClone } from "../utils/windows"

export const useBasket = () => {
  //State

  const [basketProducts, setBasketProducts] = useState(fakeBasket.EMPTY)

  const handleAddBasketProduct = (newBasketProduct) => {
    const copyBasketProduct = getDeepClone(basketProducts)

    const basketProductUpdated = [newBasketProduct, ...copyBasketProduct]

    setBasketProducts(basketProductUpdated)
  }

  return { handleAddBasketProduct, basketProducts }
}
