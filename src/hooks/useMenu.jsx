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
  // getMenu(userName).then((data) => {
  //   setProducts(data)
  // })

  //comportement

  // const userMenu = async ()=>{
  //   const menu = await getMenu(userName)

  // }
  const fetchData = async () => {
    const menuData = await getMenu(userName)
    setProducts(menuData)
  }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  const handleGenerate = async () => {
    await menuUpdate(userName, productsBackup)
    //good
  }

  const handleAdd = (newProduct) => {
    const copyProducts = getDeepClone(products)
    const productsUpdated = [newProduct, ...copyProducts]
    setProducts(productsUpdated)
    menuUpdate(userName, products)

    //good
  }
  const handleDelete = async (idProductToDelete) => {
    const copyProducts = getDeepClone(products)
    const productFilter = copyProducts.filter(
      (product) => product.id != idProductToDelete
    )
    setProducts(productFilter)
    await menuUpdate(userName, products)

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
    fetchData,
  }
}
