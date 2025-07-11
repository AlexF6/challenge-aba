import './Note.css';

const Note = ({ content, tags, date, onClick, isSelected }) => {
  return (
    <div
      className={`note-container ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <p className="note-title">{content}</p>
      <div className="tag-container">
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
      <p className="note-date">{date}</p>
    </div>
  );
};

export default Note;
