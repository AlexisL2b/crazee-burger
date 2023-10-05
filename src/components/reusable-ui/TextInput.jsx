import React from "react"
import { theme } from "../../theme"
import styled, { css } from "styled-components"

const TextInput = React.forwardRef(
  (
    {
      onBlur,
      value,
      onChange,
      Icon,
      className,
      index,
      type,
      version,
      ...restProps
    },
    ref
  ) => {
    //state
    //comportement

    return (
      <TextInputStyled className={className} version={version}>
        <div className="icon">{Icon && Icon}</div>
        <input
          type={type}
          value={value}
          onChange={onChange}
          index={index}
          {...restProps}
          ref={ref}
          onBlur={onBlur}
        />
      </TextInputStyled>
    )
  }
)
export default TextInput
const TextInputStyled = styled.div`
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;

  .icon {
    font-size: ${theme.fonts.size.SM};
    margin: 0 13px 0 8px;
    display: flex; // to center icon vertically
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    width: 100%;

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }

  ${({ version }) => extraStyle[version]}
`

const minimalist = css`
  background-color: ${theme.colors.background_white};
  padding: 0px 16px;
  color: ${theme.colors.greyBlue};
  height: 35px;
  width: 480px;
  input {
    background: ${theme.colors.background_white};
    color: ${theme.colors.dark};

    &:focus {
      outline: 0; //// add outline
    }
  }
`
const normal = css`
  background-color: ${theme.colors.white};
  padding: 18px 28px;
  color: ${theme.colors.greySemiDark};
  margin: 18px 0px;

  input {
    color: ${theme.colors.dark};

    &::placeholder {
      background: ${theme.colors.white};
    }
  }
`

const extraStyle = {
  normal,
  minimalist,
}
