import HomePage from "./components/HomePage"

function App() {
    return (
        <>
            <HomePage />
        </>
    )
}

const app = document.getElementById("app")
const root = ReactDOM.createRoot(app);
root.render(<HomePage />);