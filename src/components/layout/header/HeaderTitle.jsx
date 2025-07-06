import "./HeaderTitle.css"

const HeaderTitle = ( {title} ) => {
    return (
        <div className="header-title-container">
            <h2>{title}</h2>
        </div>
    );
};

export default HeaderTitle;