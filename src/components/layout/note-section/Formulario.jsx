//src/components/layout/note-section/Formulario.jsx
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

export default Formulario;
