import { theme } from "../../theme"
import styled from "styled-components"

export default function TextInput({
  value,
  onChange,
  Icon,
  className,
  index,
  ...restProps
}) {
  //state
  //comportement

  return (
    <InputStyled className={className}>
      {Icon && Icon}
      <input
        type="text"
        value={value}
        onChange={onChange}
        index={index}
        {...restProps}
      />
    </InputStyled>
  )
}

const InputStyled = styled.div`
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;

  .icone_user {
    font-size: ${theme.fonts.P0};
    margin-right: ${theme.spacing.xs};
    color: ${theme.colors.greyDark};
  }
  input {
    border: none;
    font-size: ${theme.fonts.P0};
    color: ${theme.colors.dark};
  }
  &::placeholder {
    background-color: ${theme.colors.white};
    color: ${theme.colors.greyLight};
  }
`
