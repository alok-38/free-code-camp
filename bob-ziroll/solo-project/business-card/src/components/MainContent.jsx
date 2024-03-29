import About from './sub/About';

const MainContent = () => {
    return (
        <div>
            <h2>Laura Smith</h2>
            <p>Frontend Developer</p>
            <p><a href="www.laurasmith.com">laurasmith.website</a></p>
            <div>
                <button>Email</button>
                <button>Linkedin</button>
            </div>
            <About />
        </div>
    )
}
export default MainContent;