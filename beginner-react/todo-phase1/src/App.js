import logo from './logo.svg';
import './App.css';
import Checkboxes from './components/Checkboxes';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Checkboxes />
    </div>
  );
}

export default App;
