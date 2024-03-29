import logo from '../logo.svg';
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='navbar__left'>
                <img src={logo} className="App-logo" alt="logo" />
                <h3>ReactFacts</h3>
            </div>
            <div className='navbar__right'>
                <p>React Course - Project 1</p>
            </div>
        </nav>
    );
}

export default Navbar;