import styled from "styled-components"
import { theme } from "../../theme"

export default function TextInput({ value, onChange, Icon, ...restProps }) {
  //state
  //comportement

  return (
    <InputStyled>
      {Icon && Icon}
      <input type="text" value={value} onChange={onChange} {...restProps} />
    </InputStyled>
  )
}

const InputStyled = styled.div`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  margin: 18px 0px;

  .icone_user {
    font-size: 15px;
    margin-right: 8px;
    color: ${theme.colors.greyDark};
  }
  input {
    border: none;
    font-size: 15px;
    color: black;
  }
  &::placeholder {
    background-color: #fff;
    color: ${theme.colors.greyLight};
  }
`
