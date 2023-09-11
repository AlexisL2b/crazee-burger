import { useState } from "react"
import { fakeBasket } from "../components/fakeData/fakeBasket"
import { getDeepClone } from "../utils/windows"

export const useBasket = () => {
  //State

  const [basketProducts, setBasketProducts] = useState(fakeBasket.EMPTY)
  const [total, setTotal] = useState([])

  const handleAddBasketProduct = (newBasketProduct) => {
    const basketProductExisiting = basketProducts.find(
      (product) => product.id === newBasketProduct.id
    )

    if (basketProductExisiting) {
      basketProductExisiting.quantity += 1
      const copyBasketProduct = getDeepClone(basketProducts)
      setBasketProducts(copyBasketProduct)

      const copyTotal = getDeepClone(total)
      const copyTotalUpadted = [basketProductExisiting.price, ...copyTotal]
      setTotal(copyTotalUpadted)
    } else {
      setBasketProducts([
        ...basketProducts,
        { ...newBasketProduct, quantity: 1 },
      ])

      const copyTotal = getDeepClone(total)
      const copyTotalUpadted = [newBasketProduct.price, ...copyTotal]
      setTotal(copyTotalUpadted)
    }
  }

  return {
    handleAddBasketProduct,
    basketProducts,
    total,
  }
}
