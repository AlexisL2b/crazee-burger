export const getTextInputConfig = ({ name, handleChange, price }) => [
  {
    type: "text",
    name: "name",
    className: "input_text",
    placeholder: "Nom du produit (ex: Super Burger)",
    onChange: handleChange,
    value: name,
  },
  {
    type: "url",
    name: "link",
    onChange: handleChange,
    className: "input_text",
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
  },
  {
    onChange: handleChange,
    name: "price",
    className: "input_text",
    placeholder: "Prix",
    type: "text",
    value: price,
  },
]
