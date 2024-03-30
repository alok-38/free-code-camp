import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App h-[780px] w-[317px] mx-auto mt-10">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
