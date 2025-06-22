//src/components/TagItem.jsx
import TagImage from "../assets/tag.svg"
import "../styles/TagItem.css"

export function TagItem( {name} ) {
    return <li className="tag-item">
        <img src={TagImage} className="tag-icon"/>
        {name}
    </li>
}

export default TagItem;