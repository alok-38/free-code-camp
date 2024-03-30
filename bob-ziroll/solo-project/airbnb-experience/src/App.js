import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Description from './components/Description';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App max-w-[50%] mx-auto">
      <Navbar />
      <Hero />
      <Description />
      <Cards />
    </div>
  );
}

export default App;
