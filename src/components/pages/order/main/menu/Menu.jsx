import { useContext, useEffect, useState } from "react"
import { styled } from "styled-components"
import { theme } from "../../../../../theme"
import Card from "../../../../reusable-ui/cards/Card"
import OrderContext from "../../../../../context/OrderContext"
import Stock from "./stock/Stock"
import { TransitionGroup, CSSTransition } from "react-transition-group"

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
    userName,
  } = useContext(OrderContext)

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
  const handleDeleteProduct = (product, userName) => {
    const existingBasketProduct = basketProducts.find(
      (basketProduct) => basketProduct.id == product
    )
    if (existingBasketProduct) {
      handleDeleteBasketProduct(product, userName)
      handleDelete(product, userName)
    } else {
      handleDelete(product, userName)
    }
  }

  return (
    <TransitionGroup component={MenuStyled}>
      {products.length > 0 ? (
        products.map((product) => (
          <CSSTransition
            appear={true}
            classNames={"cards"}
            timeout={500}
            key={product.id}
          >
            <Card
              id={product.id}
              className={"cardProduct"}
              imageSource={product.imageSource}
              title={product.title}
              priceProduct={product.price}
              onDelete={() => handleDeleteProduct(product.id, userName)}
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
          </CSSTransition>
        ))
      ) : (
        <div className="stock_container">
          <Stock />
        </div>
      )}
    </TransitionGroup>
  )
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 115px;
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
  .cards-appear {
    transform: translateX(100px);
    opacity: 0%;
  }
  .cards-appear-active {
    transition: 0.5s;
    transform: translateX(0px);
    opacity: 100%;
  }
  .cards-enter {
    transform: translateX(100px);
    opacity: 0%;
  }
  .cards-enter-active {
    transition: 0.5s;
    transform: translateX(0px);
    opacity: 100%;
  }
  .cards-exit {
    opacity: 100%;
  }
  .cards-exit-active {
    transition: 0.5s;

    opacity: 0%;
  }
`
