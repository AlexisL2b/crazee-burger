import { getMenu } from "../../../api/menu"
import { getLocalStorage } from "../../../utils/windows"

const initialiseMenu = async (userName, setProducts) => {
  const menuReceived = await getMenu(userName)
  setProducts(menuReceived)
}
const initialiseBasket = async (userName, setBasketProducts) => {
  const basketReceived = getLocalStorage(userName)
  if (basketReceived) setBasketProducts(basketReceived)
}
const initialiseTotal = async (userName, setTotal) => {
  const totalReceived = getLocalStorage("total")
  if (totalReceived) setTotal(totalReceived)
}

export const initialiseUser = async (
  userName,
  setProducts,
  setBasketProducts,
  setTotal
) => {
  await initialiseMenu(userName, setProducts)
  initialiseBasket(userName, setBasketProducts)
  initialiseTotal("total", setTotal)
}
