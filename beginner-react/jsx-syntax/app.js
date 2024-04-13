const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

function Navbar() {
    return (
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
}

const containerDiv = document.createElement('div');
containerDiv.className = 'container';

root.render(
    <>
        <Navbar />
        <h1>Develop. Preview. Ship.</h1>
    </>
);