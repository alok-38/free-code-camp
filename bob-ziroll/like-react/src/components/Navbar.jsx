import logo from '../logo.svg';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container flex flex-row items-center">
                <img src={logo} alt="logo" className="navbar-logo h-[2.5rem]" />
                <h3>React Facts</h3>
                <p className='flex'>React Course - Project 1</p>
            </div>
        </nav>
    );
}

export default Navbar;