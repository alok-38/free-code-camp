import logo from '../logo.svg';
const Navbar = () => {
    return (
        <nav className="navbar">
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <h3>ReactFacts</h3>
            </div>
            <div>
                <p>React Course - Project 1</p>
            </div>
        </nav>
    );
}

export default Navbar;