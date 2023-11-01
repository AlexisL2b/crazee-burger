import { useContext, useEffect, useState } from "react"
import { styled } from "styled-components"
import { theme } from "../../../../../theme"
import Card from "../../../../reusable-ui/cards/Card"
import OrderContext from "../../../../../context/OrderContext"
import Stock from "./stock/Stock"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { animations } from "../../../../../theme/animations"
import { IMAGE_NO_STOCK } from "../../../../../enums/product"
import { convertStringToBoolean } from "../../../../../utils/bool"
import RibbonAnimated, { ribbonAnimation } from "./RibbonAnimated"

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

  let cardContainerClassName = isAdmin
    ? "card-container is-hoverable"
    : "card-container"
  return products.length > 0 ? (
    <TransitionGroup component={MenuStyled}>
      {products.map((product) => (
        <CSSTransition
          appear={true}
          classNames={"cards_menu"}
          timeout={300}
          key={product.id}
        >
          <div className={cardContainerClassName}>
            {convertStringToBoolean(product.isAdvertised) && <RibbonAnimated />}
            <Card
              available={product.isAvailable}
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
              isOverlapImageVisible={
                convertStringToBoolean(product.isAvailable) === false
              }
              version={
                selectedCardId === product.id && isAdmin
                  ? "selectStyled"
                  : "normalStyled"
              }
              product={product}
            />
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  ) : (
    <div className="stock_container">
      <Stock />
    </div>
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
  .card-container {
    position: relative;
    height: 330px;
    border-radius: ${theme.borderRadius.extraRound};
    &.is-hoverable {
      &:hover {
        transform: scale(1.05);
        transition: ease-out 0.4s;
      }
    }
  }
  ${ribbonAnimation}

  ${animations.menuCard}

  @media (max-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1080px) {
    grid-row-gap: 30px;
  }

  @media (max-width: 970px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 925px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 375px) {
  }
`
