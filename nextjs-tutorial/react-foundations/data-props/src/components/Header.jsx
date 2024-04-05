const Header = ({ title }) => {
    return <h1 className="text-5xl mb-10">{title ? title : 'Default Title'}</h1>;
}

export default Header;