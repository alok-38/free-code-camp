import './App.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App w-5/12 mx-auto mt-32 bg-[url('./logo.svg')] bg-no-repeat">
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App;
