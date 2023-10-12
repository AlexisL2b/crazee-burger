import React, { useContext, useRef, useState } from "react"
import { styled } from "styled-components"
import { getTextInputConfig } from "./textInputAddConfig"
import TextInput from "../TextInput"
import OrderContext from "../../../context/OrderContext"
import { MdOutlineEuro } from "react-icons/md"
import { FiPackage } from "react-icons/fi"
import { RiMegaphoneFill } from "react-icons/ri"
import ToggleButtonForm from "./ToggleButtonForm"
import { getDeepClone } from "../../../utils/windows"

export default function InputFields({
  className,
  product,
  onChange,
  onBlur,
  onFocus,
  onClick,
}) {
  const textInputs = getTextInputConfig({ product })
  const { inputRef } = useContext(OrderContext)
  const [isSelected, setIsSelected] = useState([])
  const { existingProduct } = useContext(OrderContext)
  const [isAvailable, setIsAvailable] = useState(false)
  const [isAdvertised, setIsAdvertised] = useState(false)

  // const onSelect = (e) => {
  //   const value = e.currentTarget.id
  //   const copySelected = getDeepClone(isSelected)
  //   const alreadySelected = copySelected.includes(value)

  //   if (alreadySelected) {
  //     const updateCopy = copySelected.filter((button) => button !== value)
  //     setIsSelected(updateCopy)
  //     if (value === "isAvailable") {
  //       setIsAvailable(false)
  //     } else if (value === "isAdvertised") {
  //       setIsAdvertised(false)
  //     }
  //   } else {
  //     const updateCopy = [value, ...copySelected]
  //     setIsSelected(updateCopy)
  //     if (value === "isAdvertised") {
  //       setIsAdvertised(true)
  //     } else if (value === "isAvailable") {
  //       setIsAvailable(true)
  //     }
  //   }
  // }

  const stopPropagation = (e) => {
    onClick(e)
    console.log(product.isAdvertised)
  }

  return (
    <InputFieldsStyled className={className}>
      {textInputs.map((input) => (
        <TextInput
          key={input.id}
          Icon={input.icon}
          type={input.type}
          name={input.name}
          className={input.className}
          placeholder={input.placeholder}
          onChange={onChange}
          value={input.value ? input.value : ""}
          version={input.version}
          ref={input.name === "title" ? inputRef : null}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      ))}
      <div className="input_price">
        <TextInput
          key={3}
          Icon={<MdOutlineEuro />}
          type={"text"}
          name={"price"}
          placeholder={"Prix"}
          onChange={onChange}
          value={product.price ? product.price : ""}
          version={"minimalist"}
          onBlur={onBlur}
          onFocus={onFocus}
        />
        <ToggleButtonForm
          version={"addFeature"}
          id={"isAdvertised"}
          label={product.isAdvertised === true ? "Avec pub" : "Sans pub"}
          onClick={(e) => stopPropagation(e)}
          icon={<RiMegaphoneFill />}
        />
        <ToggleButtonForm
          version={"addFeature"}
          id={"isAvailable"}
          label={product.isAvailable ? "En stock" : "Épuisé"}
          // name={"isAvailable"}
          onClick={onClick}
          icon={<FiPackage />}
          // isActive={isAvailable}
        />
      </div>
    </InputFieldsStyled>
  )
}
const InputFieldsStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  .input_price {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px;
    padding: 10px 0px;
  }
`
