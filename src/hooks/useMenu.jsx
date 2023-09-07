import { useState } from "react"
import { fakeMenu2, fakeMenu3 } from "../components/fakeData/fakeMenu"
import { getDeepClone } from "../utils/windows"

export const useMenu = () => {
  //state

  const [products, setProducts] = useState(fakeMenu2)
  const [productsBackup] = useState(fakeMenu3)

  //comportement

  const handleGenerate = () => {
    setProducts(productsBackup)
    //good
  }

  const handleAdd = (newProduct) => {
    const copyProducts = getDeepClone(products)

    const productsUpdated = [newProduct, ...copyProducts]

    setProducts(productsUpdated)
    //good
  }
  const handleDelete = (idProductToDelete) => {
    const copyProducts = getDeepClone(products)
    const productFilter = copyProducts.filter(
      (product) => product.id != idProductToDelete
    )
    setProducts(productFilter)
    //good
  }

  const handleEdit = (productBeingEdited) => {
    // 1. copie du state (deep clone)
    const productsCopy = getDeepClone(products)

    // 2. manip de la copie du state
    const indexOfProductToEdit = products.findIndex(
      (product) => product.id === productBeingEdited.id
    )
    productsCopy[indexOfProductToEdit] = productBeingEdited

    // 3. update du state
    setProducts(productsCopy)
    //good
  }

  return {
    handleDelete,
    handleAdd,
    handleGenerate,
    handleEdit,
    products,
  }
}
