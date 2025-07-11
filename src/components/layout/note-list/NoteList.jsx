import React, { useEffect, useState } from 'react';
import Note from './Note';
import CreateButton from './CreateButton';
import './NoteList.css';

const NoteList = ({ selectedNoteId, setSelectedNoteId }) => { // Props are correctly destructured here
  const [notes, setNotes] = useState([]);
  // REMOVE THIS LINE: const [selectedNoteId, setSelectedNoteId] = useState(null);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const res = await fetch('/api/notes/all', {
          credentials: 'include',
        });

        if (!res.ok) throw new Error('Failed to fetch notes');
        const data = await res.json();

        setNotes(data);
      } catch (err) {
        console.error('Failed to fetch notes:', err);
      }
    }

    fetchNotes();
  }, []);

  const handleNoteClick = (id) => {
    setSelectedNoteId(id);
    console.log('Selected Note ID:', id);
  };

  return (
    <div className="note-list-container">
      <CreateButton />
      {notes.map((note) => (
        <Note
          key={note.id}
          content={note.title}
          tags={note.tags ?? []}
          date={new Date(note.created_at).toLocaleDateString('es-CO', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          })}
          onClick={() => handleNoteClick(note.id)}
          isSelected={note.id === selectedNoteId}
        />
      ))}
    </div>
  );
};

export default NoteList;