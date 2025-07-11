import "./NoteButtons.css";
import { Archive } from "lucide-react";
import { TrashIcon } from "lucide-react";

const NoteButtons = ({ noteId }) => {
  const handleArchive = async () => {
    if (!noteId) return console.warn("No note selected to archive");

    try {
      const res = await fetch(`/api/notes/${noteId}/archived`, {
        method: "PATCH",
        credentials: "include",
      });

      if (!res.ok) throw new Error("Failed to archive note");
      const data = await res.json();
      console.log("Archived note:", data);
    } catch (err) {
      console.error("Archive error:", err);
    }
  };

  const handleDelete = async () => {
    if (!noteId) return console.warn("No note selected to delete");

    try {
      const res = await fetch(`/api/notes/${noteId}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!res.ok) throw new Error("Failed to delete note");
      const data = await res.json();
      console.log("Deleted note:", data);
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  return (
    <div className="note-actions-container">
      <div className="note-actions">
        <button className="note-button" onClick={handleArchive}>
          <Archive className="note-button-archived" />
          Archive Note
        </button>

        <button className="note-button" onClick={handleDelete}>
          <TrashIcon className="note-button-delete" />
          Delete Note
        </button>
      </div>
    </div>
  );
};

export default NoteButtons;
