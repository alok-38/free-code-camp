import reactLogo from '../assets/react.svg';

function Navbar() {
    return (
        <nav className='flex bg-orange-500 text-white p-10 w-screen'>
            <ul className='flex flex-row gap-64 mx-auto'>
                <li><a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a></li>
                <li><a href="/">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;