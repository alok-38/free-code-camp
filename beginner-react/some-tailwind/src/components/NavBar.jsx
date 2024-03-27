import React from 'react'; // Import React at the top if you're using JSX
import logo from '../logo.svg';

function NavBar() {
    return (
        <nav>
            <ul className='flex items-center justify-center'>
                <li><img src={logo} className="App-logo size-14 mr-10" alt="logo" /></li>
                <div className='flex gap-10'> {/* Moved <div> outside <ul> */}
                    <li><a href="/">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </div>
            </ul>
        </nav>
    );
}

export default NavBar;
