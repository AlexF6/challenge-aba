
//src/components/layout/note-section/Formulario.jsx
import React, { useState } from 'react';
import "../../../styles/layout/note-section/Content.css"

function Formulario({ onCancel }) {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [categoria, setCategoria] = useState(null);
  const categorias = ['Dev', 'React', 'UI', 'Backend'];

  const fecha = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Nota guardada:\n\nTítulo: " + titulo + "\nContenido: " + contenido + "\nCategoría: " + categoria);
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <div className="form-section">
        <label><strong>Título</strong></label>
        <input
          type="text"
          value={titulo}
          placeholder="Title"
          onChange={(e) => setTitulo(e.target.value)}
        />
      </div>

      <div className="form-section">
        <label><strong>Categoría</strong></label>
        <div className="tag">
          {categorias.map((cat) => (
            <span
              key={cat}
              className={`tag ${categoria === cat ? 'selected' : ''}`}
              onClick={() => setCategoria(cat)}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      <p className="fecha">Last edited <strong>{fecha}</strong></p>

      <div className="form-section">
        <label><strong>Contenido</strong></label>
        <textarea
          value={contenido}
          placeholder="Start typing..."
          onChange={(e) => setContenido(e.target.value)}
        />
      </div>

      <div className="form-footer">
        <button type="submit" className="save">Save Note</button>
        <button type="button" className="cancel" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default Formulario;
