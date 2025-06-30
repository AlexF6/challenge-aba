import ArchivedImage from "../../../assets/archive.svg"
import "../../../styles/layout/note-actions/NoteButtons.css"
import DeleteImage from "../../../assets/deletee.png"


const NoteButtons = () => {
    return (
        <div className="note-actions">
            <button className="note-button">
                <img src={ArchivedImage} alt="archived" className="note-button-archived"/>
                Archive Note
            </button>

              <div className="note-actions">
            <button className="note-button">
                  <img src={DeleteImage} alt="delete" className="note-button-delete"/>
                Delete Note

            </button>
        </div>


        </div>
       
    )
}
export default NoteButtons;