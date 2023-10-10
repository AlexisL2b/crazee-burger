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
}) {
  const textInputs = getTextInputConfig({ product })
  const { inputRef } = useContext(OrderContext)
  const [isActive, setIsActive] = useState([])
  // const onClick = (e) => {
  //   const value = e.currentTarget.id
  //   const copyActive = getDeepClone(isActive)
  //   const alreadyActive = copyActive.includes(value)
  //   if (alreadyActive) {
  //     const updateCopy = copyActive.filter((button) => button != value)
  //     setIsActive(updateCopy)
  //   }
  //   const updateCopy = [value, ...copyActive]
  //   setIsActive(updateCopy)
  //   // console.log(isActive)
  // }
  const onClick = (e) => {
    console.log(isActive)
    const value = e.currentTarget.id
    const copyActive = getDeepClone(isActive)
    const alreadyActive = copyActive.includes(value)

    if (alreadyActive) {
      const updateCopy = copyActive.filter((button) => button !== value)
      setIsActive(updateCopy)
    } else {
      const updateCopy = [value, ...copyActive]
      setIsActive(updateCopy)
    }
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
          name={"pub"}
          onClick={onClick}
          label={isActive.includes("pub") ? "Activé" : "Désactivé"}
          icon={<RiMegaphoneFill />}
        />
        <ToggleButtonForm
          name={"stock"}
          onClick={onClick}
          label={isActive.includes("stock") ? "Activé" : "Désactivé"}
          icon={<FiPackage />}
        />
        {/* <ToggleButton
          version={"avaible"}
          labelIfChecked="Ok"
          labelIfUnchecked="Not Ok"
          onToggle={onToggle}
          isChecked={isChecked}
        /> */}

        {/* 
        <TextInput
          key={6}
          Icon={<MdOutlineEuro />}
          type={"text"}
          name={"price"}
          placeholder={"Prix"}
          onChange={onChange}
          value={product.price ? product.price : ""}
          version={"minimalist"}
          onBlur={onBlur}
          onFocus={onFocus} */}
        {/* /> */}
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
    border: 1px solid red;
    column-gap: 10px;
    padding: 10px;
  }
`
