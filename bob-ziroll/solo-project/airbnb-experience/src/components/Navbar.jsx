import airbnb from '../assets/images/airbnb 1.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img src={airbnb} alt="airbnb" />
            </div>
        </nav>
    );
}

export default Navbar;