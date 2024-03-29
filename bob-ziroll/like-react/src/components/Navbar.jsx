import logo from '../logo.svg';

const Navbar = () => {
    return (
        <nav className="navbar text-white flex p-10">
            <div className="navbar-container flex flex-row items-center justify-between w-full">
                <div className="flex items-center">
                    <img src={logo} alt="logo" className="navbar-logo h-[2.5rem]" />
                    <h3>React Facts</h3>
                </div>
                <p>React Course - Project 1</p>
            </div>
        </nav>
    );
}

export default Navbar;
