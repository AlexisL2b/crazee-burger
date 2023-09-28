import { useContext, useState } from "react"
import { styled } from "styled-components"
import { theme } from "../../../../../theme"
import Card from "../../../../reusable-ui/cards/Card"
import OrderContext from "../../../../../context/OrderContext"
import Stock from "./stock/Stock"
import { useParams } from "react-router-dom"
import { getMenu } from "../../../../../api/menu"

export default function Menu() {
  const {
    products,
    isAdmin,
    handleDelete,
    inputRef,
    selectedCardId,
    setActiveTab,
    setExistingProduct,
    setSelectedCardId,
    handleDeleteBasketProduct,
    basketProducts,
    setIsOpen,
    isOpen,
  } = useContext(OrderContext)

  // const [products, setProducts] = useState([])

  const { userName } = useParams()
  // const fetchMenu = async () => {
  //   const menuData = await getMenu(userName)
  //   setProducts(menuData)
  // }
  // console.log(products)

  // const handleSwitchSelect = async (id) => {
  // @TODO
  //   setSelectedCardId((prevId) => (prevId !== id ? id : null))
  //   console.log(selectedCardId)
  // }
  const handleFocus = async (idProductClicked) => {
    await setActiveTab("edit")
    const productClicked = products.find(
      (product) => product.id === idProductClicked
    )

    // await handleSwitchSelect(idProductClicked)
    await setSelectedCardId(idProductClicked)
    await setExistingProduct(productClicked)
    if (!isOpen) {
      await setIsOpen(true)
      inputRef.current.focus()
    } else {
      inputRef.current.focus()
    }
  }
  const handleDeleteProduct = (product) => {
    const existingBasketProduct = basketProducts.find(
      (basketProduct) => basketProduct.id == product
    )
    if (existingBasketProduct) {
      handleDeleteBasketProduct(product)
      handleDelete(product)
    } else {
      handleDelete(product)
    }
  }
  console.log(products)
  // fetchMenu()
  return (
    <MenuStyled>
      {products.length != 0 ? (
        products.map((product) => (
          <Card
            id={product.id}
            className={"cardProduct"}
            key={product.id}
            imageSource={product.imageSource}
            title={product.title}
            priceProduct={product.price}
            onDelete={() => handleDeleteProduct(product.id)}
            isAdmin={isAdmin}
            onClick={() => {
              handleFocus(product.id)
            }}
            version={
              selectedCardId === product.id && isAdmin
                ? "selectStyled"
                : "normalStyled"
            }
            product={product}
          />
        ))
      ) : (
        <div className="stock_container">
          <Stock />
        </div>
      )}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: ${theme.shadows.medium};
  overflow-y: scroll;
  scrollbar-width: none;
  width: 100%;
  .stock_container {
    display: grid;
    grid-column: 2;
    place-items: center;
  }
`
