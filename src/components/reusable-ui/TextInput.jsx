import { theme } from "../../theme"
import styled, { css } from "styled-components"

export default function TextInput({
  value,
  onChange,
  Icon,
  className,
  index,
  type,
  version = "normal",
  ...restProps
}) {
  //state
  //comportement

  return (
    <InputStyled className={className} version={version}>
      <div className="icon">{Icon && Icon}</div>
      <input
        type={type}
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

  .icon {
    font-size: ${theme.fonts.P0};
    margin-right: ${theme.spacing.xs};
    margin-left: 10px;
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
  ${({ version }) => extraStyle[version]}
`

const minimalist = css`
  margin: 0;
  border: none;
  height: 35px;
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
`
const normal = css`
  margin: 18px 0px;
  padding: 16px ${theme.gridUnit * 3}px;
`

const extraStyle = {
  normal,
  minimalist,
}
