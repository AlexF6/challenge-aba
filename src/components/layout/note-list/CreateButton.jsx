import { useState } from "react";
import Formulario from "./Formulario";
import "./CreateButton.css";

const CreateButton = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(prev => !prev);
  };

  return (
    <div className="button-container">
      <button className="create-button" onClick={toggleForm}>
        {showForm ? "Close Form" : "+ Create New Note"}
      </button>

      {showForm && (
        <Formulario onCancel={() => setShowForm(false)} />
      )}
    </div>
  );
};

export default CreateButton;
