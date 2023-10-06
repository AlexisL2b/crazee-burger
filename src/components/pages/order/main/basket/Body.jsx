import React, { useContext } from "react"
import { styled } from "styled-components"
import { theme } from "../../../../../theme"
import CardBasket from "./CardBasket/CardBasket"
import OrderContext from "../../../../../context/OrderContext"
import Loading from "../../../Loading"
import Message from "../pannel/Message"
import { BASKET } from "../../../../../enums/message"
export default function Body() {
  const {
    selectedCardId,
    products,
    isAdmin,
    inputRef,
    setActiveTab,
    setExistingProduct,
    setSelectedCardId,
    handleDeleteBasketProduct,
    basketProducts,
    setIsOpen,
    isOpen,
    afficher,
    userName,
  } = useContext(OrderContext)

  const handleFocus = async (idProductClicked) => {
    // const basketProductExisting = basketProducts.find(
    //   (product) => product.id === idProductClicked
    // )
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

  return (
    <BodyStyled>
      {basketProducts.length > 0 ? (
        basketProducts.map((product) => (
          <CardBasket
            onClick={() => handleFocus(product.id, userName)}
            key={product.id}
            title={product.title}
            price={product.price}
            imageSource={product.imageSource}
            quantity={product.quantity}
            onDelete={() => handleDeleteBasketProduct(product.id, userName)}
            version={
              selectedCardId === product.id && isAdmin
                ? "selectStyled"
                : "normalStyled"
            }
          />
        ))
      ) : (
        <Message
          label={
            products === undefined ? BASKET.LOADING_BASKET : BASKET.EMPTY_BASKET
          }
          version="basket"
        />
      )}
    </BodyStyled>
  )
}
const BodyStyled = styled.div`
  /* height: 100%; */
  background: #f5f5f7;
  color: ${theme.colors.greyBlue};
  font-family: ${theme.fontsFamily.amatic};
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.regular};
  box-shadow: 0px 0px 20px 0px #00000033 inset;
  display: flex;
  flex-direction: column;

  overflow-y: auto;
  scrollbar-width: none;
  padding: 16px 20px;
`
