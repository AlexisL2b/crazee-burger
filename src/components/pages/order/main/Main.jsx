import styled, { css } from "styled-components"
import { theme } from "../../../../theme"
import Basket from "./basket/Basket"
import Menu from "./menu/Menu"
import Pannel from "./pannel/Panel"
import { useContext, useRef, useState } from "react"
import OrderContext from "../../../../context/OrderContext"
import Loading from "../../Loading"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { animations } from "../../../../theme/animations"

export default function Main() {
  //state

  const { isAdmin, products, windowWidth, basketMobileOpen } =
    useContext(OrderContext)
  //comportement

  return (
    <MainStyled>
      <Basket
        version={windowWidth < 1370 && "mobile"}
        classname={
          basketMobileOpen || windowWidth > 1370 ? "visible" : "invisible"
        }
      />
      <div className="menu_and_pannel">
        {products === undefined ? <Loading version={"menu"} /> : <Menu />}

        {isAdmin ? (
          <TransitionGroup component={Pannel}>
            <CSSTransition appear={true} classNames={"pannel"} timeout={500}>
              <Pannel />
            </CSSTransition>
          </TransitionGroup>
        ) : null}
      </div>
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  height: calc(95vh - 10vh);
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: ${theme.shadows.strong};
  display: grid;
  grid-template-columns: 25% 1fr;
  grid-template-rows: 1fr;
  position: relative;

  .user {
    display: none;
  }

  .invisible {
    visibility: hidden;
  }
  .visible {
    visibility: visible;
  }

  .menu_and_pannel {
    width: 100%;
    height: 100%;
    position: relative;
    display: grid;
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    ${animations.pannel}
    z-index: 3;
    .stock_container {
      display: grid;
      align-items: center;
      justify-content: center;
    }
    .pannel_z {
      z-index: 3;
    }
  }

  @media (min-width: 1380px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 970px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 375px) {
  }
`
