import PlumaImage from "../assets/feather.svg"
import "../styles/LogoSidebar.css"

export function LogoSidebar( {name} ) {
    return(
        <h2 className="logo-container">
            <img src={PlumaImage} className="logo-image"/>
            {name}
        </h2>
    );
}

export default LogoSidebar;