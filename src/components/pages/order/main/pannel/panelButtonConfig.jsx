import { AiOutlinePlus } from "react-icons/ai"
import { MdModeEditOutline } from "react-icons/md"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import AddForm from "./tab-content/addform/AddForm"
import EditForm from "./tab-content/editform/EditForm"

export const getPanelButtonsConfig = (isOpen, selectedCardId) => [
  {
    className: isOpen ? "open" : "closed",
    label: "",
    icons: isOpen ? <FiChevronDown /> : <FiChevronUp />,
    index: "chevron",
  },
  {
    label: "Ajouter un produit",
    icons: <AiOutlinePlus />,
    index: "add",
    content: <AddForm />,
  },
  {
    label: "Modifier un produit",
    icons: <MdModeEditOutline />,
    index: "edit",
    content: <EditForm />,
  },
]
