import React, { useState, useEffect } from 'react';
import "./Formulario.css";

function Formulario({ onCancel }) {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    async function fetchTags() {
      try {
        const res = await fetch("/api/tags/all", {
          credentials: "include",
        });
        if (!res.ok) throw new Error("Failed to fetch tags");
        const data = await res.json();
        setTags(data);
      } catch (err) {
        console.error("Error fetching tags:", err);
      }
    }

    fetchTags();
  }, []);

  const fecha = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  const handleTagToggle = (tagName) => {
    setSelectedTags((prev) =>
      prev.includes(tagName)
        ? prev.filter((t) => t !== tagName)
        : [...prev, tagName]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Create the note
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
        throw new Error(error.message || "Failed to save note");
      }

      const newNoteArray = await res.json();
      const newNote = newNoteArray[0];

      for (const tag of selectedTags) {
        const tagRes = await fetch("/api/tags", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            note_id: newNote.id,
            tag,
          }),
        });

        if (!tagRes.ok) {
          const tagErr = await tagRes.json();
          throw new Error(tagErr.message || `Failed to assign tag "${tag}"`);
        }
      }

      alert("Nota guardada con éxito");
      setTitulo('');
      setContenido('');
      setSelectedTags([]);

    } catch (err) {
      console.error("Error al guardar la nota:", err);
      alert("Error al guardar la nota: " + err.message);
    }
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <div className="form-section">
        <label className="form-label"><strong>Título</strong></label>
        <input
          className="input-form"
          type="text"
          value={titulo}
          placeholder="Title"
          onChange={(e) => setTitulo(e.target.value)}
        />
      </div>

      <div className="form-section">
        <label className="form-label"><strong>Etiquetas</strong></label>
        <div className="form-tags">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className={`form-tag ${selectedTags.includes(tag.name) ? 'selected' : ''}`}
              onClick={() => handleTagToggle(tag.name)}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>

      <p className="form-fecha">
        Last edited <strong>{fecha}</strong>
      </p>

      <div className="form-section">
        <label className="form-label"><strong>Contenido</strong></label>
        <textarea
          className="form-textarea"
          value={contenido}
          placeholder="Start typing..."
          onChange={(e) => setContenido(e.target.value)}
        />
      </div>

      <div className="form-footer">
        <button type="submit" className="form-save">Save Note</button>
        <button type="button" className="form-cancel" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default Formulario;
