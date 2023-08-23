import React, { useContext, useState } from "react"
import { styled } from "styled-components"
import { getTextInputConfig } from "./textInputAddConfig"
import OrderContext from "../../../../../../../context/OrderContext"
import TextInput from "../../../../../../reusable-ui/TextInput"
import PrimaryButton from "../../../../../../reusable-ui/PrimaryButton"
import { theme } from "../../../../../../../theme"
import Confirmation from "./Confirmation"

export default function RightSide({
  link,
  name,
  price,
  setLink,
  setName,
  setPrice,
}) {
  const handleChange = (e) => {
    if (e.currentTarget.name === "name") {
      setName(e.currentTarget.value)
    } else if (e.currentTarget.name === "link") {
      setLink(e.currentTarget.value)
    } else if (e.currentTarget.name === "price") {
      setPrice(e.currentTarget.value)
    }
  }
  const textInputs = getTextInputConfig({ name, link, price, handleChange })
  return (
    <RightSideStyled>
      {textInputs.map((input) => (
        <TextInput
          Icon={input.icon}
          type={input.type}
          name={input.name}
          className={input.className}
          placeholder={input.placeholder}
          onChange={input.onChange}
          value={input.value}
        />
      ))}
      <div className="add_container">
        <PrimaryButton
          label="Ajouter un nouveau produit au menu"
          className="add_button"
        />
        <Confirmation />
      </div>
    </RightSideStyled>
  )
}
const RightSideStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  .input_text {
    border: none;
    background-color: #f5f5f7;
    width: 605px;
    border-radius: 5px;
    padding: 8px 16px 8px 24px;
    input {
      background-color: #f5f5f7;
      width: 100%;
      margin-left: 15px;
    }
    &::placeholder {
      font-size: 14px;
      color: #a7a8ad;
    }
    .icon {
      color: ${theme.colors.greyBlue};
    }
  }
  .add_container {
    display: flex;
    .add_button {
      width: 50%;
      padding: 8px 16px 8px 24px;
      border: solid 2px ${theme.colors.green};
      background-color: ${theme.colors.green};
      &:hover {
        color: ${theme.colors.green};
        background-color: ${theme.colors.white};
      }
    }
  }
`
