import logo from '../logo.svg';

const Header = () => {
    return (
        <>
            <img src={logo} className="App-logo mx-auto mt-28" alt="logo" />
        <h1 className='text-5xl mt-10 mb-10'>Develop.Preview.Ship</h1>
        </>
    )
}

export default Header;