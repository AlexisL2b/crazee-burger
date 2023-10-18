import React, { useContext } from "react"
import { styled } from "styled-components"
import { theme } from "../../../../../theme"
import CardBasket from "./CardBasket/CardBasket"
import OrderContext from "../../../../../context/OrderContext"
import Message from "../pannel/Message"
import { BASKET } from "../../../../../enums/message"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { animations } from "../../../../../theme/animations"
import { convertStringToBoolean } from "../../../../../utils/bool"
import { formatMontant } from "../../../../../utils/maths"
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
    userName,
  } = useContext(OrderContext)

  const handleFocus = async (idProductClicked) => {
    await setActiveTab("edit")
    const productClicked = products.find(
      (product) => product.id === idProductClicked
    )

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
        <TransitionGroup>
          {basketProducts.map((product) => (
            <CSSTransition
              appear={true}
              classNames={"cards"}
              key={product.id}
              timeout={500}
            >
              <CardBasket
                product={product}
                onClick={() => handleFocus(product.id, userName)}
                title={product.title}
                price={
                  convertStringToBoolean(product.isAvailable)
                    ? formatMontant(product.price)
                    : "Non disponible"
                }
                imageSource={product.imageSource}
                quantity={product.quantity}
                onDelete={() => handleDeleteBasketProduct(product.id, userName)}
                version={
                  selectedCardId === product.id && isAdmin
                    ? "selectStyled"
                    : "normalStyled"
                }
                className={"item"}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
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
  ${animations.basketCard}
`
