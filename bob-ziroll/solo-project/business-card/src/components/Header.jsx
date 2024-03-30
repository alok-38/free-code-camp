import profile1 from '../assets/images/profile1.png';

const Header = () => {
    return (
        <header>
            <img className='h-[317px] w-[317px] mx-auto object-cover' src={profile1} alt="profile" />
        </header>
    );
};

export default Header;