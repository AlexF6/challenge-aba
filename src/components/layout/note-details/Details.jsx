import React, { useEffect, useState } from 'react';
import './Details.css';

const Details = ({ noteId }) => {
  const [note, setNote] = useState(null);

  useEffect(() => {
    if (!noteId) {
      setNote(null);
      return;
    }

    async function fetchNote() {
      try {
        const res = await fetch(`/api/notes/${noteId}`, {
          credentials: 'include',
        });

        if (!res.ok) throw new Error('Failed to fetch note');

        const data = await res.json();
        setNote(data);
      } catch (err) {
        console.error('Error fetching note details:', err);
      }
    }

    fetchNote();
  }, [noteId]);

  if (!note) {
    return <div className="note-details-container"></div>;
  }

  return (
    <div className="note-details-container">
      <h1 className="note-title">{note.title}</h1>

      <div className="note-meta">
        <div className="note-tags">
          <strong>Tags:</strong>{' '}
          {note.tags?.map((tag) => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
        <div className="note-date">
          <strong>Last edited:</strong>{' '}
          {new Date(note.updated_at ?? note.created_at).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })}
        </div>
      </div>

      <hr />

      <div className="note-content">
        {note.content.split('\n').map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default Details;
