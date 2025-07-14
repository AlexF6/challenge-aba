import React, { useState } from 'react';
import "./Formulario.css";

function Formulario({ onCancel }) {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [newTag, setNewTag] = useState('');
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);

  const fecha = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  const handleAddTag = () => {
    const trimmed = newTag.trim();
    if (trimmed && !tags.includes(trimmed)) {
      setTags([...tags, trimmed]);
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Crear la nota
      const res = await fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          title: titulo,
          content: contenido,
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Error al crear la nota");
      }

      const noteArray = await res.json();
      const note = noteArray[0];

      // Crear cada etiqueta
      for (const tag of tags) {
        const tagRes = await fetch("/api/tags", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            note_id: note.id,
            tag: tag,
          }),
        });

        if (!tagRes.ok) {
          const tagErr = await tagRes.json();
          throw new Error(tagErr.message || `Error al agregar etiqueta "${tag}"`);
        }
      }

      alert("Nota guardada con éxito");
      setTitulo('');
      setContenido('');
      setTags([]);
    } catch (err) {
      console.error("Error:", err);
      alert("Error al guardar: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <div className="form-section">
        <label className="form-label"><strong>Title</strong></label>
        <input
          className="input-form"
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="write the title"
        />
      </div>

      <div className="form-section">
        <label className="form-label"><strong>Tags</strong></label>
        <div className="form-tags-input">
          <input
            className="input-form"
            type="text"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            placeholder="write a tag and add it"
          />
          <button type="button" onClick={handleAddTag}>Add</button>
        </div>

        <div className="form-tags" style={{ marginTop: 8 }}>
          {tags.map((tag) => (
            <span key={tag} className="form-tag selected">
              {tag}
              <button type="button" onClick={() => handleRemoveTag(tag)} style={{ marginLeft: 6 }}>✕</button>
            </span>
          ))}
        </div>
      </div>

      {/* <p className="form-fecha">
        Última edición <strong>{fecha}</strong>
      </p> */}

      <div className="form-section">
        <label className="form-label"><strong>Contenido</strong></label>
        <textarea
          className="form-textarea"
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
          placeholder="Start typing..."
        />
      </div>

      <div className="form-footer">
        <button type="submit" className="form-save" disabled={loading}>
          {loading ? "Guardando..." : "Save Note"}
        </button>
        <button type="button" className="form-cancel" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default Formulario;
