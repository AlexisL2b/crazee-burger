import { FaHamburger } from "react-icons/fa"
import { BsFillCameraFill } from "react-icons/bs"
import { MdOutlineEuro } from "react-icons/md"

export const getTextInputConfig = ({ name, handleChange, price }) => [
  {
    icon: <FaHamburger />,
    type: "text",
    name: "name",
    className: "input_text",
    placeholder: "Nom du produit (ex: Super Burger)",
    onChange: handleChange,
    value: name,
  },
  {
    icon: <BsFillCameraFill />,

    type: "url",
    name: "link",
    onChange: handleChange,
    className: "input_text",
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
  },
  {
    icon: <MdOutlineEuro />,

    onChange: handleChange,
    name: "price",
    className: "input_text",
    placeholder: "Prix",
    type: "text",
    value: price,
  },
]
