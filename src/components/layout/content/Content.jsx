//src/components/layout/content/Content.jsx
import "../../../styles/layout/content/Content.css"
import { useState } from "react";

function CreateButton({ onClick }) {
  return (
    <button className="create-button" onClick={onClick}>
      + Create New Note
    </button>
  );
}
function Formulario(){
    return(
        <form className="formulario">
      <h1>New Note</h1>
      <label>Título</label>
      <input type="text" placeholder="Tittle" />

      <label>Contenido</label>
      <textarea placeholder="Start typing..."></textarea>

      <button type="submit">Guardar</button>
    </form>


    );
}

function Content() {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
  

  return (
    <div className="content">
        {!mostrarFormulario && (
      <CreateButton onClick={() =>setMostrarFormulario(true)} />
      )}
       {mostrarFormulario && <Formulario />}
    </div>
  );
}

export default Content;