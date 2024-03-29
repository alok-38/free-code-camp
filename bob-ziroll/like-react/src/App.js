import './App.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App w-5/12 mx-auto mt-32 bg-[#282c34]">
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App;
