import React, { useEffect, useState } from 'react';
import Note from './Note';
import CreateButton from './CreateButton';
import './NoteList.css';

const NoteList = () => {
  const [notes, setNotes] = useState([]);

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
        />
      ))}
    </div>
  );
};

export default NoteList;
