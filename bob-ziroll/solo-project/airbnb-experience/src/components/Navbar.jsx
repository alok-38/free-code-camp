import airbnb from '../assets/images/airbnb 1.png';

const Navbar = () => {
    return (
        <nav className="navbar p-5">
            <div className="navbar__logo">
                <img className='p-5' src={airbnb} alt="airbnb" />
            </div>
        </nav>
    );
}

export default Navbar;