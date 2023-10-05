import { useState } from "react"
import { fakeMenu3 } from "../components/fakeData/fakeMenu"
import { getDeepClone } from "../utils/windows"
import { useParams } from "react-router-dom"
import { getMenu, menuUpdate } from "../api/menu"

export const useMenu = () => {
  //state
  const [products, setProducts] = useState(undefined)
  const [productsBackup] = useState(fakeMenu3)

  const handleGenerate = (userName) => {
    const copyProducts = getDeepClone(products)

    copyProducts.push(...productsBackup)

    menuUpdate(userName, copyProducts)
    setProducts(copyProducts)
    //good
  }

  const handleAdd = (newProduct, userName) => {
    const copyProducts = getDeepClone(products)
    const productsUpdated = [newProduct, ...copyProducts]

    menuUpdate(userName, productsUpdated)

    setProducts(productsUpdated)

    //good
  }
  const handleDelete = (idProductToDelete, userName) => {
    const copyProducts = getDeepClone(products)
    const productFilter = copyProducts.filter(
      (product) => product.id != idProductToDelete
    )
    menuUpdate(userName, productFilter)
    setProducts(productFilter)

    //good
  }

  const handleEdit = (productBeingEdited, userName) => {
    // 1. copie du state (deep clone)
    const productsCopy = getDeepClone(products)

    // 2. manip de la copie du state
    const indexOfProductToEdit = products.findIndex(
      (product) => product.id === productBeingEdited.id
    )
    productsCopy[indexOfProductToEdit] = productBeingEdited

    // 3. update du state
    menuUpdate(userName, productsCopy)
    setProducts(productsCopy)
    //good
  }

  return {
    handleDelete,
    handleAdd,
    handleGenerate,
    handleEdit,
    products,
    setProducts,
  }
}
