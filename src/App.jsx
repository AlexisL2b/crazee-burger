import { useRef } from "react";
import { useState } from "react";

function App() {
  //state

  const [prenom, setPrenom] = useState("");
  const inputPrenom = useRef();
  //comportement
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Bonjour " + prenom);
    setPrenom("");
  };
  const handlePrenom = (e) => {
    setPrenom(e.currentTarget.value);
  };

  //render
  return (
    <div>
      <h1>Bienvenue chez nous !</h1>
      <h1>Connectez vous !</h1>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          ref={inputPrenom}
          onChange={handlePrenom}
          type="text"
          placeholder="Entrez votre prénom"
          required
          value={prenom}
        />
        <button>Accéder a votre espace</button>
      </form>
    </div>
  );
}
export default App;
