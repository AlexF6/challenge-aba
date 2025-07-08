import './Note.css';

const Note = ({ content, tags, date }) => {
  return (
    <div className="note-container">
      <p className="note-title">{content}</p>
      <div className="tag-container">
        {tags.map((tag) => (
        <p key={tag}>{tag}</p>
        ))}
      </div>
      <p className="date">{date}</p>
    </div>
  );
};

export default Note;
