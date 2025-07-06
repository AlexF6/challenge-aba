import "./Note.css"

const Note = ( {content, tag1, tag2, date} ) => {

    return (
        <div className="note-container">
            <p className="note-title">{content}</p>
            <div className="tag-container">
                <p>{tag1}</p>
                <p>{tag2}</p>
            </div>
            <p className="date">{date}</p>
        </div>
    );
}

export default Note;