import { Link, useParams } from "react-router-dom"

export default function OrderPages() {
  //state
  const { userName } = useParams()
  console.log(userName)

  //comportement

  //affichage
  return (
    <div>
      <h1>Bonjour {userName}</h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  )
}
