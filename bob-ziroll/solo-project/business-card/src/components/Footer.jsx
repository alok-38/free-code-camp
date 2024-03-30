import facebook from '../assets/images/Facebook Icon.png';
import twitter from '../assets/images/Twitter Icon.png';
import instagram from '../assets/images/Instagram Icon.png';
import github from '../assets/images/GitHub Icon.png';

const Footer = () => {
    return (
        <footer className='flex'>
            <a href="https://www.facebook.com/" className="footer-btn" target="_blank" rel="noreferrer">
                <img className='footer-btn' src={facebook} alt="Facebook" />
            </a>
            <a href="https://twitter.com/" className="footer-btn" target="_blank" rel="noreferrer">
            <img className='footer-btn' src={twitter} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/" className="footer-btn" target="_blank" rel="noreferrer">
            <img className='footer-btn' src={instagram} alt="Facebook" />
            </a>
            <a href="https://github.com/" className="footer-btn" target="_blank" rel="noreferrer">
            <img className='footer-btn' src={github} alt="Facebook" />
            </a>
        </footer>
    );
}

export default Footer;