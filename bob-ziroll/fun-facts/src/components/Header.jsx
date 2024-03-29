import logo from '../logo.svg';

const Header = () => {
    return (
        <header className="flex justify-center mt-10">
            <img src={logo} className="h-14 mt-10 !important" alt="logo" />
        </header>
    );
}

export default Header;
