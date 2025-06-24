//src/components/layout/content/Content.jsx
import "../../../styles/layout/content/Content.css"
import { useState } from "react";

function CreateButton({ onClick }) {
  return (
    <div className="button-container">
      <button className="create-button" onClick={onClick}>
        + Create New Note
      </button>
    </div>

  );
}
function Formulario({ onCancel }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("nota guardada");
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <h1>New Note</h1>

      <label>Título</label>
      <input type="text" placeholder="Title" />

      <label>Contenido</label>
      <textarea placeholder="Start typing..."></textarea>

      <button type="submit">Guardar</button>
   <button type="button" className="cancel-button" onClick={onCancel}>
    Cancelar</button>


    </form>
  );
}


function Content() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleCancel = () => {
    setMostrarFormulario(false);
  };

  return (
    <div className="content">
      {!mostrarFormulario && (
        <CreateButton onClick={() => setMostrarFormulario(true)} />
      )}
      {mostrarFormulario && <Formulario onCancel={handleCancel} />}
    </div>
  );
}


export default Content;