//src/components/layout/content/Content.jsx
import "../../../styles/layout/content/Content.css"

function CreateButton({ onClick }) {
  return (
    <button className="create-button" onClick={onClick}>
      + Create New Note
    </button>
  );
}
function Formulario(){
    return(
        alert("prueba para el form")


    );
}

function Content() {
  

  return (
    <div className="content">
      <CreateButton onClick={Formulario} />
    </div>
  );
}

export default Content;