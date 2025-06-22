import HouseImage from "../assets/house.svg"
import "../styles/Menu.css"

export function Menu( {name} ) {
    return (
        <div className="menu-item">
            <img src={HouseImage} className="menu-icon"/>
            <a href="#">{name}</a>
        </div>
    );
}

export default Menu;