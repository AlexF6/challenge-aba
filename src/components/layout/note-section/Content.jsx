//src/components/layout/note-section/Content.jsx
import "../../../styles/layout/note-section/Content.css"
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


function Content({ onCreateClick }) {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleCancel = () => {
    setMostrarFormulario(false);
  };

  return (
    <div className="content">
      {!mostrarFormulario && (
        <CreateButton onClick={onCreateClick} />
      )}
    </div>
      
  );
}


export default Content;