import { FaHamburger } from "react-icons/fa"
import { BsFillCameraFill } from "react-icons/bs"
import { MdOutlineEuro } from "react-icons/md"

export const getTextInputConfig = ({ product }) => [
  {
    id: 1,
    icon: <FaHamburger />,
    type: "text",
    name: "title",
    placeholder: "Nom du produit (ex: Super Burger)",
    value: product.title,
    version: "minimalist",
  },
  {
    id: 2,
    icon: <BsFillCameraFill />,
    type: "url",
    name: "imageSource",
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    value: product.imageSource,
    version: "minimalist",
  },
  // {
  //   id: 3,
  //   icon: <MdOutlineEuro />,
  //   name: "price",
  //   placeholder: "Prix",
  //   type: "text",
  //   value: product.price,
  //   version: "minimalist",
  // },
]
