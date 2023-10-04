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
`
