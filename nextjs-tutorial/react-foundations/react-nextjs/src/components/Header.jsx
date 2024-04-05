import logo from '../logo.svg';

const Header = () => {
    return (
        <>
            <h1 className='text-5xl mt-10 mb-10'>Develop. Preview. Ship</h1>
            <img src={logo} className="App-logo mx-auto mb-5" alt="logo" />
        </>
    )
}

export default Header;