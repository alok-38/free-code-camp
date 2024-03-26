import reactLogo from '../assets/react.svg';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a></li>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;