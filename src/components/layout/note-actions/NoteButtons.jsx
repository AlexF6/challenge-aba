import "./NoteButtons.css"
import { Archive } from "lucide-react"
import { TrashIcon } from "lucide-react"

const NoteButtons = () => {
    return (
        <div className='note-actions-container'>
            <div className="note-actions">
                <button className="note-button">
                    <Archive alt="archived" className="note-button-archived"/>
                    Archive Note
                </button>

                <button className="note-button">
                        <TrashIcon alt="delete" className="note-button-delete"/>
                        Delete Note
                </button>
            </div>
        </div>
    )
}
export default NoteButtons;