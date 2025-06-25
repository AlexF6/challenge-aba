//src/components/layout/note-section/Note.jsx
import "../../../styles/layout/note-section/Note.css"

const Note = ( {content, tag1, tag2, date} ) => {
    return (
        <div className="note-container">
            <p className="note-title">{content}</p>
            <div className="tag-container">
                <p className="tag-title">{tag1}</p>
                <p className="tag-title">{tag2}</p>
            </div>
            <p className="date">{date}</p>
        </div>
    );
}

export default Note;