import React, { useContext } from "react"
import { styled } from "styled-components"
import { theme } from "../../../../../theme"
import ActiveContext from "../../../../../context/ActiveContext"

export default function Tab() {
  //State

  //comportement

  const { activeTab } = useContext(ActiveContext)

  return (
    <TabStyled>
      {activeTab === 1 && "Ajouter un produit"}
      {activeTab === 2 && "Modifier un produit"}
    </TabStyled>
  )
}
const TabStyled = styled.div`
  height: 250px;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);
  border: 1px solid #e4e5e9;
  background-color: white;
`
