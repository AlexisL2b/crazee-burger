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
import SelectInput from "../SelectInput"

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
  const [isAvailable, setIsAvailable] = useState(true)
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
    onClick()
    console.log(product)
  }

  const isAdvertisedOptions = [
    { value: true, label: "Sans pub" },
    { value: false, label: "Avec pub" },
  ]
  const isAvailableOptions = [
    { value: true, label: "En stock" },
    { value: false, label: "En rupture" },
  ]
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
      {/* <div className="other_inputs">
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
          version={!product.isAdvertised ? "addFeature" : "removeFeature"}
          id={"isAdvertised"}
          label={product.isAdvertised === true ? "Avec pub" : "Sans pub"}
          onClick={onClick}
          icon={<RiMegaphoneFill />}
        />
        <ToggleButtonForm
          version={product.isAvailable ? "addFeature" : "removeFeature"}
          id={"isAvailable"}
          label={product.isAvailable ? "En stock" : "Épuisé"}
          onClick={onClick}
          icon={<FiPackage />}
        />
      </div> */}
      {/* <select name="isAvailable" className="is-available" id="4">
        {isAvailableOptions.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      <select name="isAdvertised" className="is-advertised" id="5">
        {isAdvertisedOptions.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select> */}
      <SelectInput
        options={isAdvertisedOptions}
        className="is-advertised"
        id="4"
      />
      <SelectInput
        options={isAvailableOptions}
        className="is-available"
        id="5"
      />
    </InputFieldsStyled>
  )
}
const InputFieldsStyled = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 8px;
  .title {
    grid-area: 1/1/2/4;
  }
  .image {
    grid-area: 2/1/3/4;
  }
  .price {
    grid-area: 3/1/4/2;
  }
  /* .other_inputs {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px;
    padding: 10px 0px;
  } */

  .is-available {
    background: pink;
  }
  .is-advertised {
    background: yellow;
  }
`
