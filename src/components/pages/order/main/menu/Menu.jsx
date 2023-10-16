import { useContext, useEffect, useState } from "react"
import { styled } from "styled-components"
import { theme } from "../../../../../theme"
import Card from "../../../../reusable-ui/cards/Card"
import OrderContext from "../../../../../context/OrderContext"
import Stock from "./stock/Stock"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { animations } from "../../../../../theme/animations"
import { IMAGE_NO_STOCK } from "../../../../../enums/product"

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
  return products.length > 0 ? (
    <TransitionGroup component={MenuStyled}>
      {products.map((product) => (
        <CSSTransition
          appear={true}
          classNames={"cards_menu"}
          timeout={300}
          key={product.id}
        >
          <Card
            available={product.isAvailable}
            ribon={product.isAdvertised}
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
            overlapImage={IMAGE_NO_STOCK}
            isOverlapImageVisible={true}
            version={
              selectedCardId === product.id &&
              product.isAvailable === true &&
              isAdmin
                ? "selectStyled"
                : selectedCardId === product.id &&
                  product.isAvailable === false &&
                  isAdmin
                ? "outofstockselected"
                : !isAdmin || selectedCardId != product.id
                ? "normalStyled"
                : "outofstockselected"
            }
            product={product}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  ) : (
    <div className="stock_container">
      <Stock />
    </div>
  )

  // <TransitionGroup component={MenuStyled}>
  //   {products.length > 0 ? (
  //     products.map((product) => (
  //       <CSSTransition
  //         appear={true}
  //         classNames={"cards_menu"}
  //         timeout={300}
  //         key={product.id}
  //       >
  //         <Card
  //           id={product.id}
  //           className={"cardProduct"}
  //           imageSource={product.imageSource}
  //           title={product.title}
  //           priceProduct={product.price}
  //           onDelete={() => handleDeleteProduct(product.id, userName)}
  //           isAdmin={isAdmin}
  //           onClick={() => {
  //             handleFocus(product.id)
  //           }}
  //           version={
  //             selectedCardId === product.id && isAdmin
  //               ? "selectStyled"
  //               : "normalStyled"
  //           }
  //           product={product}
  //         />
  //       </CSSTransition>
  //     ))
  //   ) : (
  //     <div className="stock_container">
  //       <Stock />
  //     </div>
  //   )}
  // </TransitionGroup>
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

  ${animations.menuCard}
`
