import { FaHamburger } from "react-icons/fa"
import { BsFillCameraFill } from "react-icons/bs"
import { MdOutlineEuro } from "react-icons/md"
import { isAdvertisedOptions, isAvailableOptions } from "../../../enums/select"

export const getTextInput = ({ product }) => [
  {
    id: 1,
    icon: <FaHamburger />,
    type: "text",
    name: "title",
    placeholder: "Nom du produit (ex: Super Burger)",
    value: product.title,
    version: "minimalist",
    className: "title",
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
    className: "image",
  },
  {
    id: 3,
    icon: <MdOutlineEuro />,
    name: "price",
    placeholder: "Prix",
    type: "text",
    value: product.price,
    version: "minimalist",
    className: "price",
  },
]

export const getSelectInput = ({ product }) => [
  {
    name: "isAvailable",
    options: isAvailableOptions,
    className: "is-available",
    id: "5",
    value: product.isAvailable,
  },
  {
    name: "isAdvertised",
    options: isAdvertisedOptions,
    className: "is-advertised",
    id: "4",
    value: product.isAdvertised,
  },
]
