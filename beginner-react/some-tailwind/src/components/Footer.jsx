import logo from '../logo.svg';
import '../App.css';

function Footer() {
    return (
        <footer className="App-footer">
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            <img src={logo} className="App-logo size-14" alt="logo" />
        </footer>
    );
}

export default Footer;
