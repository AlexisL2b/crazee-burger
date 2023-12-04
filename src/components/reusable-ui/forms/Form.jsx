import { styled } from "styled-components"
import InputFields from "./InputFields"
import ImagePreview from "./ImagePreview"

export default function Form({
  action,
  onSubmit,
  product,
  onChange,
  index,
  children,
  onBlur,
  onFocus,
  onClick,
}) {
  return (
    <FormStyled action={action} onSubmit={onSubmit}>
      <ImagePreview />
      <InputFields
        className={"input_fields"}
        product={product}
        onChange={onChange}
        index={index}
        onBlur={onBlur}
        onFocus={onFocus}
        onClick={onClick}
      />

      <div className="children">{children}</div>
    </FormStyled>
  )
}

const FormStyled = styled.form`
  height: 100%;
  width: 70%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  column-gap: 20px;

  .input_fields {
    grid-area: 1/2/4/2;
    grid-row-gap: 8px;
  }

  .children {
    margin-top: 8px;
    grid-area: 4/2/4/2;
    white-space: nowrap;
    display: flex;
    justify-content: space-between;
  }
  .visible {
    display: flex;
  }
  .invisible {
    display: none;
  }
  /* .message {
    grid-area: 2/2/-1/-1;
  } */
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);

    overflow-x: scroll;
    width: 100%;
    .input_fields {
      grid-area: 2/1/2/1;
    }
    .children {
      grid-area: 3/1/3/1;
    }
  }
  @media (max-width: 970px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
    width: 170%;
  }
  @media (max-width: 375px) {
    width: 170%;
  }
`
