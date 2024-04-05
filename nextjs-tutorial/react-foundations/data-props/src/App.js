import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo w-28 mx-auto mt-10" alt="logo" />
        <HomePage />
    </div>
  );
}

export default App;
