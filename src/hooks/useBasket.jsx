import { useState } from "react"
import { fakeBasket } from "../components/fakeData/fakeBasket"
import { getDeepClone } from "../utils/windows"

export const useBasket = () => {
  //State

  const [basketProducts, setBasketProducts] = useState(fakeBasket.EMPTY)

  const handleAddBasketProduct = (newBasketProduct) => {
    const basketProductExisiting = basketProducts.find(
      (product) => product.id === newBasketProduct.id
    )

    if (basketProductExisiting) {
      basketProductExisiting.quantity += 1
      const copyBasketProduct = getDeepClone(basketProducts)
      setBasketProducts(copyBasketProduct)
    } else {
      setBasketProducts([
        ...basketProducts,
        { ...newBasketProduct, quantity: 1 },
      ])
    }
  }

  return {
    handleAddBasketProduct,
    basketProducts,
  }
}
