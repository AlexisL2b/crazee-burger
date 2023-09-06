import { useContext } from "react"
import { styled } from "styled-components"
import OrderContext from "../../../../../../../context/OrderContext"
import Message from "../../Message"
import { HiCursorClick } from "react-icons/hi"
import Form from "../../../../../../reusable-ui/forms/Form"

export default function EditForm() {
  //State

  //comportement

  //render
  const { existingProduct, handleEdit, activeTab, selectedCardId } =
    useContext(OrderContext)

  return selectedCardId != null ? (
    <Form
      action={"submit"}
      product={existingProduct}
      index={activeTab}
      onChange={handleEdit}
      children={
        <Message
          label={
            "Cliquer sur un produit du menu pour le modifier en temps réel"
          }
          version="smallPrimary"
          className="message"
        />
      }
    />
  ) : (
    <Message
      label={"Cliquer sur un produit pour le modifier"}
      icon={<HiCursorClick />}
    />
  )
}

const EditFormStyled = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
`
