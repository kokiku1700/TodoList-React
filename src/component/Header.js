import "./Header.css";

const Header = () => {
    return (
        <div className="Header">
            <h1>{new Date().toLocaleDateString().slice(0, -1)}</h1>
        </div>
    );
};

export default Header;