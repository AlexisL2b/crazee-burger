import React, { useRef, useState } from "react"
import { styled, css } from "styled-components"
import { theme } from "../../../theme"

export default function ToggleButtonForm({
  onToggle,
  label,
  className,
  version,
  id,
  onClick,
  icon,
}) {
  const [isChecked, setIsChecked] = useState(false)
  const checkboxRef = useRef(null)
  const handleChange = () => {
    const checkBoxValue = checkboxRef.current.checked

    setIsChecked(checkBoxValue)
  }

  return (
    <ToggleButtonFormStyled
      className={className}
      version={version}
      onClick={onClick}
      data-ischecked={isChecked.toString()}
      htmlFor={id}
    >
      <input
        type="checkbox"
        className="toggle"
        id={id}
        ref={checkboxRef}
        onChange={handleChange}

        // checked={isChecked}
        // onChange={onToggle}
      />
      <div className="label" onClick={(e) => e.stopPropagation()}>
        {icon}
        {label}
      </div>
    </ToggleButtonFormStyled>
  )
}

const ToggleButtonFormStyled = styled.label`
  ${({ version }) => extraStyle[version]}
`
const addFeature = css`
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  background-color: ${theme.colors.background_white};
  padding: 0px 16px;
  color: ${theme.colors.greyBlue};
  height: 35px;
  text-align: center;
  &:hover {
    background-color: ${theme.colors.greyLight};
  }
  &:active {
    background-color: ${theme.colors.greyMedium};
  }
  input[type="checkbox"] {
    // Hides the square box but keeps the core "toggle functionality"
    &.toggle {
      display: none;
    }
  }
  .label {
    width: 100%;
    display: grid;
    grid-template-columns: 20% 80%;
    user-select: none;
    -webkit-user-select: none; /* Pour les anciennes versions de Safari */
    -moz-user-select: none; /* Pour les anciennes versions de Firefox */
    -ms-user-select: none; /* Pour Internet Explorer 10 et 11 */
  }
`

const extraStyle = {
  addFeature,
}

// import { React, useState } from "react"
// import { styled } from "styled-components"
// import { theme } from "../../../theme"

// export default function ToggleButtonForm({
//   label,
//   name,
//   onClick,
//   icon,
//   isActive,
// }) {
//   return (
//     <ToggleButtonFormStyled
//       onClick={onClick}
//       id={name}
//       data-is-active={isActive}
//     >
//       <div className="icon">{icon}</div>
//       <div className="label">{label}</div>
//     </ToggleButtonFormStyled>
//   )
// }
// const ToggleButtonFormStyled = styled.div`
//   border-radius: 3px;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 35px;
//   background-color: ${theme.colors.background_white};
//   padding: 0px 16px;
//   color: ${theme.colors.greyBlue};
//   height: 35px;
//   display: grid;
//   grid-template-columns: 20% 80%;
//   place-items: center;
//   &:hover {
//     background-color: ${theme.colors.greyLight};
//   }
//   &:active {
//     background-color: ${theme.colors.greyMedium};
//   }
//   .icon {
//     display: flex;
//     font-size: ${theme.fonts.size.SM};
//   }
//   .label {
//     user-select: none;
//     -webkit-user-select: none; /* Pour les anciennes versions de Safari */
//     -moz-user-select: none; /* Pour les anciennes versions de Firefox */
//     -ms-user-select: none; /* Pour Internet Explorer 10 et 11 */
//     pointer-events: none;
//   }
// `
