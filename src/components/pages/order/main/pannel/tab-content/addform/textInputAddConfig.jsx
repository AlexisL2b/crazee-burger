import { FaHamburger } from "react-icons/fa"
import { BsFillCameraFill } from "react-icons/bs"
import { MdOutlineEuro } from "react-icons/md"

export const getTextInputConfig = ({ newProduct }) => [
  {
    id: 1,
    icon: <FaHamburger />,
    type: "text",
    name: "title",
    placeholder: "Nom du produit (ex: Super Burger)",
    value: newProduct.title,
    version: "minimalist",
  },
  {
    id: 2,
    icon: <BsFillCameraFill />,
    type: "url",
    name: "imageSource",
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    value: newProduct.imageSource,
    version: "minimalist",
  },
  {
    id: 3,
    icon: <MdOutlineEuro />,
    name: "price",
    placeholder: "Prix",
    type: "text",
    value: newProduct.price,
    version: "minimalist",
  },
]
