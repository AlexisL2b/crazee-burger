import { useState } from "react"
import { fakeMenu3 } from "../components/fakeData/fakeMenu"
import { getDeepClone } from "../utils/windows"
import { useParams } from "react-router-dom"
import { getMenu, menuUpdate } from "../api/menu"

export const useMenu = () => {
  //state
  const { userName } = useParams()
  const [products, setProducts] = useState([])
  const [productsBackup] = useState(fakeMenu3)

  const fetchData = async () => {
    const menuData = await getMenu(userName)
    setProducts(menuData)
  }

  const handleGenerate = async () => {
    await menuUpdate(userName, productsBackup)
    setProducts(productsBackup)
    //good
  }

  const handleAdd = async (newProduct) => {
    const copyProducts = getDeepClone(products)
    const productsUpdated = [newProduct, ...copyProducts]

    await menuUpdate(userName, productsUpdated)

    setProducts(productsUpdated)

    //good
  }
  const handleDelete = async (idProductToDelete) => {
    const copyProducts = getDeepClone(products)
    const productFilter = copyProducts.filter(
      (product) => product.id != idProductToDelete
    )
    await menuUpdate(userName, productFilter)
    setProducts(productFilter)

    //good
  }

  const handleEdit = async (productBeingEdited) => {
    // 1. copie du state (deep clone)
    const productsCopy = getDeepClone(products)

    // 2. manip de la copie du state
    const indexOfProductToEdit = products.findIndex(
      (product) => product.id === productBeingEdited.id
    )
    productsCopy[indexOfProductToEdit] = productBeingEdited

    // 3. update du state
    await menuUpdate(userName, productsCopy)
    setProducts(productsCopy)
    //good
  }

  return {
    handleDelete,
    handleAdd,
    handleGenerate,
    handleEdit,
    products,
    fetchData,
  }
}
